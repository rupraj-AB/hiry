import * as React from "react";
import { cn } from "~/lib/utils";
import XCircleIcon from "~/assets/icons/XCircleIcon";
import InfoIcon from "~/assets/icons/InfoIcon";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  info?: string;
  icon?: React.ReactNode;
  leftPadding?: string;
  clearable?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      label,
      value,
      onChange,
      error,
      info,
      icon,
      leftPadding = "pl-10",
      clearable = false,
      ...props
    },
    ref
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);

    const handleIconClick = () => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    const getBorderColor = () => {
      if (error) return "border-status-error-default";
      return "border-neutral-border focus:border-neutral-focus";
    };

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={props.name}
            className="block fs-500-14 text-neutral-text-primary font-medium mb-2"
          >
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div
              className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-text-tertiary cursor-pointer"
              onClick={handleIconClick}
            >
              {icon}
            </div>
          )}
          <input
            ref={inputRef}
            type={type}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className={cn(
              "w-full px-3 py-3 bg-neutral-white border rounded-[10px] fs-400-16",
              "text-neutral-text-primary placeholder:text-neutral-text-tertiary",
              "focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-custom-light",
              "disabled:bg-neutral-background-disabled disabled:cursor-not-allowed",
              getBorderColor(),
              icon ? leftPadding : "",
              clearable && value ? "pr-10" : "",
              className
            )}
            {...props}
          />
          {clearable && value && (
            <button
              type="button"
              onClick={() => onChange?.("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-text-tertiary hover:text-neutral-text-secondary"
            >
              <XCircleIcon />
            </button>
          )}
        </div>
        {error && (
          <p className="mt-2 text-status-error-dark fs-400-12 flex items-center">
            <span className="mr-1">
              <XCircleIcon />
            </span>
            {error}
          </p>
        )}
        {!error && info && (
          <p className="mt-2 text-neutral-text-tertiary fs-400-12 flex items-center">
            <span className="mr-1">
              <InfoIcon />
            </span>
            {info}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
