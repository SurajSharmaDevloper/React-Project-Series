import React, { useState } from "react";

const DropdownBox = ({
  label = "Select Option",
  required = false,
  options = [],
  placeholder = "Choose an option...",
  className = "",
  onChange, // optional callback to parent
  ...rest
}) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const handleBlur = () => {
    if (required && value === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleChange = (e) => {
    const selected = e.target.value;
    setValue(selected);

    // clear error if value selected
    if (selected !== "") setError(false);

    // send value to parent only if needed
    onChange && onChange(selected);
  };

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {/* Label */}
      <label className="text-sm ms-1 font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      {/* Dropdown container */}
      <div className="relative">
        <select
          className={`border rounded-lg text-sm px-3 py-2.5 w-full appearance-none pr-10
            ${error
              ? "border-red-500 bg-red-50 text-red-600"
              : "border-gray-300 bg-surface hover:border-blue-400"
            }
            focus:outline-none focus:ring-2 focus:ring-blue-500
          `}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          {...rest}
        >
          <option
            value=""
            className={`${!error ? "text-neutral-400" : "text-neutral-800"}`}
          >
            {error ? "This field is required" : placeholder}
          </option>

          {options.map((opt, i) => (
            <option
              className="text-secondary"
              key={i}
              value={opt.value || opt}
            >
              {opt.label || opt}
            </option>
          ))}
        </select>

        {/* Custom dropdown arrow */}
        <svg
          className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-gray-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default DropdownBox;
