import React, { useState, useRef, useEffect } from "react";
import CheckIcon from "~/assets/icons/CheckIcon";
import Colors from "~/constants/colors";
import XCircleIcon from "~/assets/icons/XCircleIcon";
import useWindowSize from "~/hooks/useWindowSize";
import ArrowDownIcon from "~/assets/icons/ArrowDownIcon";
import CrossIcon from "~/assets/icons/CrossIcon";
import Checkbox from "./checkbox";

interface Option {
  value: string | number;
  label: string;
}

interface DropdownProps {
  label?: string;
  value?: null | string | number | (string | number)[];
  onChange: (value: string | number | (string | number)[]) => void;
  placeholder?: string;
  name?: string;
  description?: string;
  required?: boolean;
  error?: string;
  icon?: React.ReactNode;
  options: Option[];
  isMulti?: boolean;
  searchable?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  onChange,
  placeholder = "",
  name = "",
  description,
  required = false,
  error = "",
  icon,
  options = [],
  isMulti = false,
  searchable = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOptions, setSelectedOptions] = useState<Option[]>(
    isMulti
      ? (value as (string | number)[]).map(
          (v) => options.find((o) => o.value === v)!
        )
      : []
  );

  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: Option) => {
    if (isMulti) {
      const isSelected = selectedOptions.some((o) => o.value === option.value);
      if (isSelected) {
        const updatedOptions = selectedOptions.filter(
          (o) => o.value !== option.value
        );
        setSelectedOptions(updatedOptions);
        onChange(updatedOptions.map((o) => o.value));
      } else {
        const updatedOptions = [...selectedOptions, option];
        setSelectedOptions(updatedOptions);
        onChange(updatedOptions.map((o) => o.value));
      }
    } else {
      setSelectedOptions([option]);
      onChange(option.value);
      setIsOpen(false);
      setSearchTerm("");
    }
  };

  const filteredOptions = searchable
    ? options.filter((option) =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : options;

  const handleInputClick = () => {
    setIsOpen(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleRemove = (option: Option) => {
    const updatedOptions = selectedOptions.filter(
      (o) => o.value !== option.value
    );
    setSelectedOptions(updatedOptions);
    onChange(updatedOptions.map((o) => o.value));
  };

  const resetSelection = () => {
    setSelectedOptions([]);
    onChange(isMulti ? [] : "");
  };

  return (
    <div className="w-full" ref={dropdownRef}>
      {label && (
        <label
          htmlFor={name}
          className={`block fs-500-14 text-neutral-black ${
            description ? "mb-1" : "mb-2"
          }`}
        >
          {label}
        </label>
      )}

      {description && (
        <p className="mb-2 fs-400-12 text-neutral-text-secondary">
          {description}
        </p>
      )}

      <div className="relative">
        <div
          className={`
            relative
            h-auto
            w-full
            bg-white
            border
            border-neutral-border
            rounded-lg
            focus-within:ring-1
            focus-within:ring-neutral-border
            focus-within:border-neutral-border
            focus-within:shadow-custom-light
            cursor-pointer
             ${isMulti ? "pr-12" : ""}
            ${
              error
                ? "border-status-error-pressed focus-within:ring-red-500 focus-within:border-red-500"
                : ""
            }
          `}
        >
          {icon && (
            <div
              className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-500`}
            >
              {icon}
            </div>
          )}

          <div
            onClick={handleInputClick}
            className={`flex flex-wrap items-center gap-1 px-3 cursor-pointer ${
              icon ? "pl-10" : ""
            } ${selectedOptions.length > 0 ? "py-1.5" : "py-2.5"} `}
          >
            {selectedOptions.length > 0 ? (
              isMulti ? (
                selectedOptions.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center bg-white pl-3 pr-2.5 py-1 border border-neutral-border rounded-full "
                  >
                    <span className="mr-2 fs-400-14-18">{option.label}</span>
                    <button onClick={() => handleRemove(option)}>
                      <CrossIcon />
                    </button>
                  </div>
                ))
              ) : searchable && isOpen ? (
                <input
                  ref={inputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder={placeholder}
                  autoFocus={searchable && isOpen}
                  className={`flex-grow h-full border-none focus:outline-none py-1`}
                />
              ) : (
                <div className="flex items-center bg-white py-1  border-neutral-border rounded-full ">
                  <span className="fs-400-16">{selectedOptions[0].label}</span>
                </div>
              )
            ) : searchable ? (
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder={placeholder}
                className={`flex-grow h-full border-none focus:outline-none`}
              />
            ) : (
              <p className="text-neutral-text-tertiary fs-400-16">
                {placeholder}
              </p>
            )}
          </div>

          <div
            className={`absolute right-3 top-1/2 -translate-y-1/2 flex items-center`}
          >
            {selectedOptions.length > 0 && isMulti && (
              <button
                className="mr-2 pr-2 border-neutral-border border-r-[1px]"
                onClick={resetSelection}
              >
                <CrossIcon height={12} width={12} />
              </button>
            )}
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <ArrowDownIcon
                height={14}
                width={14}
                color={Colors.neutral.text.tertiary}
              />
            </div>
          </div>
        </div>

        {/* Animated Dropdown Options */}
        <div
          className={`
            absolute 
            z-10 
            w-full 
            mt-1 
            bg-white 
            border 
            border-neutral-border 
            rounded-lg 
            shadow-lg 
            p-2
            transition-all 
            duration-300 
            ease-in-out
            origin-top
            ${
              isOpen
                ? "opacity-100 scale-y-100 visible"
                : "opacity-0 scale-y-0 invisible"
            }
          `}
        >
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => handleSelect(option)}
                className="
                  w-full 
                  px-2 
                  py-2 
                  text-left 
                  hover:bg-neutral-background-soft
                  transition-colors 
                  duration-200
                "
              >
                <Checkbox
                  label={option.label}
                  checked={selectedOptions.some(
                    (o) => o.value === option.value
                  )}
                />
              </button>
            ))}
            {filteredOptions.length === 0 && (
              <div className="px-3 py-2.5 text-neutral-text-tertiary">
                No options found
              </div>
            )}
          </div>
        </div>
      </div>

      {error && (
        <p className="mt-1 text-sm text-status-error-dark fs-400-12 flex items-center">
          <span className="mr-1">
            <XCircleIcon />
          </span>
          {error}
        </p>
      )}
    </div>
  );
};

export default Dropdown;