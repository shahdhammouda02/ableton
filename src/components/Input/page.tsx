import React, { forwardRef } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  className?: string;
  error?: boolean;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      className = "",
      placeholder,
      type = "text",
      error = false,
      disabled = false,
      label,
      fullWidth = true,
      ...rest
    },
    ref
  ) => {
    const inputClasses = `px-4 py-2 bg-gray-200 text-base focus:outline-none focus:ring-1 focus:ring-blue-500 ${
      fullWidth ? "w-full" : ""
    } ${className}`;

    return (
      <div className={fullWidth ? "w-full" : ""}>
        {label && (
          <label
            htmlFor={id}
            className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
          >
            {label}
          </label>
        )}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          ref={ref}
          disabled={disabled}
          {...rest}
          className={inputClasses}
        />
      </div>
    );
  }
);

export default Input;
