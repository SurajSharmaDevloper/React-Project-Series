import React, { useState } from "react";

const InputBox = ({
  label = "Enter Text",
  placeholder = "Type something...",
  required = false,
  className = "",
  onChange,
  value,
  ...rest
}) => {
  const [error, setError] = useState(false);

  const handleBlur = () => {
    if (required && !value) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {/* Label */}
      <label className="text-sm ms-1 font-medium text-gray-700">{label}</label>

      {/* Input box with inline error */}
      <input
        type="text"
        className={`border rounded-lg bg-surface  text-sm px-3 py-2.5 w-full
          ${
            error
              ? "border-red-500 bg-red-50 text-red-600 placeholder:text-red-400"
              : "border-gray-300 bg-surface hover:border-blue-400"
          }
          focus:outline-none focus:ring-2 focus:ring-blue-500
        `}
        placeholder={error ? "This field is required" : placeholder}
        value={value}
        onChange={(e) => {
          onChange && onChange(e);
          if (required && e.target.value) setError(false);
        }}
        onBlur={handleBlur}
        {...rest}
      />
    </div>
  );
};

export default InputBox;
