import React, { FC } from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <div className="w-4 h-4 mr-2 relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div
          className={`absolute top-0 left-0 w-4 h-4 border rounded-sm flex items-center justify-center ${
            checked
              ? "bg-brand-primary border-brand-primary"
              : "border-neutral-border"
          }`}
        >
          {checked && (
            <svg
              className="fill-current text-white w-2.5 h-2.5"
              viewBox="0 0 20 20"
            >
              <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
          )}
        </div>
      </div>
      <span className="fs-400-14-18 text-neutral-black">{label}</span>
    </div>
  );
};

export default Checkbox;
