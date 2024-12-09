import React, { useState, useRef, useEffect } from "react";

import CheckIcon from "~/assets/icons/CheckIcon";
import Colors from "~/constants/colors";
import XCircleIcon from "~/assets/icons/XCircleIcon";
import useWindowSize from "~/hooks/useWindowSize";
import ArrowDownIcon from "~/assets/icons/ArrowDownIcon";

const Dropdown = ({
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
  ...props
}: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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

  const handleSelect = (option: any) => {
    onChange(option);
    setIsOpen(false);
    setSearchTerm("");
  };

  const filteredOptions = options.filter((option: any) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedLabel =
    options.find((opt: any) => opt.value === value)?.label || "";

  const handleInputClick = () => {
    setIsOpen(true);
    if (inputRef.current) {
      inputRef.current.focus();
    }
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
          {/* {required && <span className="text-red-500 ml-1">*</span>} */}
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
            h-10 
            w-full
            bg-white
            border
            border-neutral-border
            rounded-lg
            focus-within:ring-1
            focus-within:ring-neutral-border
            focus-within:border-neutral-border
            ${
              error
                ? "border-status-error-pressed focus-within:ring-red-500 focus-within:border-red-500"
                : ""
            }
          `}
        >
          {icon && (
            <div
              className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-500
              `}
            >
              {icon}
            </div>
          )}
          <input
            ref={inputRef}
            type="text"
            value={isOpen ? searchTerm : selectedLabel}
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={handleInputClick}
            placeholder={placeholder}
            className={`  
              h-full
              w-full
              px-3
              py-1.5
              rounded-lg
              fs-400-16
              text-neutral-defaultBlack
              placeholder:text-neutral-text-tertiary
              focus:outline-none
              disabled:bg-gray-100
              ${icon ? "pl-10" : ""}
              disabled:cursor-not-allowed
              pr-8
            `}
            {...props}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
            <div
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <ArrowDownIcon color={Colors.neutral.text.tertiary} />
            </div>
          </div>
        </div>

        {isOpen && (
          <div
            className="absolute p-2 z-10 w-full mt-1 bg-white border border-neutral-border rounded-lg shadow-lg overflow-hidden"
            style={
              isMobile
                ? {
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(240,240,255,1) 100%)",
                  }
                : {}
            }
          >
            <div className="max-h-60 overflow-y-auto">
              {filteredOptions.map((option: any) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`
                    w-full px-3 py-2.5 text-left fs-400-14-18
                    flex items-center justify-between
                    hover:bg-neutral-background-soft
                    ${
                      value === option.value
                        ? "md:bg-neutral-background-soft"
                        : ""
                    }
                  `}
                >
                  <span>{option.label}</span>
                  {value === option.value && (
                    <CheckIcon
                      color={Colors.brand.secondary}
                      height={"20px"}
                      width={"20px"}
                    />
                  )}
                </button>
              ))}
              {filteredOptions.length === 0 && (
                <div className="px-3 py-2.5 text-neutral-text-tertiary">
                  No options found
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {error && (
        <p className="mt-1 text-sm text-status-error-dark fs-400-12 flex items-center">
          <span className="mr-1">
            <XCircleIcon />
          </span>{" "}
          {error}
        </p>
      )}
    </div>
  );
};

export default Dropdown;
