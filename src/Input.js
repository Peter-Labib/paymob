import React from "react";

const Input = ({
  prop,
  action,
  value,
  placeholder,
  label,
  className,
  type = "text",
  general,
}) => {
  return (
    <div>
      {label && <div className="mb-2 text-slate-500 font-semibold text-left">{label}</div>}
      <input
        className={`bg-gray-100 focus:outline-none p-4 w-full ${
          className ? className : ""
        }`}
        style={{backgroundColor: "#EEEEEE"}}
        placeholder={placeholder}
        type={type}
        dir="auto"
      />
    </div>
  );
};

export default Input;
