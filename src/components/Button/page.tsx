"use client"
import React from "react";

type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: ()=>void
};

export const Button = ({
  className = "",
  children,
  type = "button",
  disabled = false,
  fullWidth = false,
  onClick=()=>{}
}: ButtonProps) => {
  const buttonClasses = `px-4 py-2 bg-blue-600 text-white text-lg whitespace-nowrap focus:outline-none transition-colors ${className}`;
  return (
    <div className={fullWidth ? "w-full" : ""}>
      <button className={buttonClasses} disabled={disabled} type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
