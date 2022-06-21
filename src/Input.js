import React from "react";

const Input = ({
  prop,
  action,
  value,
  placeholder,
  label,
  children,
  className,
  type = "text",
  hasIcon,
  general,
}) => {
  return (
    <div>
      {label && (
        <div
          className="mb-2 text-left text-xs font-semibold"
          style={{ color: "#7A869A" }}
        >
          {label}
        </div>
      )}
      <div className="relative">

      <input
        className={`bg-gray-100 focus:outline-none p-4 w-full ${
          className ? className : ""
        }`}
        style={{ backgroundColor: "#EEEEEE" }}
        placeholder={placeholder}
        type={type}
        dir="auto"
      />
      {hasIcon && (
        <div className="absolute inset-y-0 ltr:right-1 rtl:left-1">
          {children}
        </div>
      )}
      </div>
    </div>
  );
};

export default Input;
