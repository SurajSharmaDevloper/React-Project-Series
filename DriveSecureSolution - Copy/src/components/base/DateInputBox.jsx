import React, { useState, useRef } from "react";
import { Calendar } from "lucide-react";

const DateInputBox = ({
  label = "Date of Birth",
  required = false,
  placeholder = "Select a date...",
  className = "",
  value,
  onChange,
  ...rest
}) => {
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  const handleBlur = () => {
    if (required && !value) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleCalendarClick = () => {
    if (inputRef.current) inputRef.current.showPicker?.();
  };

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {/* Label */}
      <label className="text-sm ms-1 font-medium text-gray-700">{label}</label>

      {/* Input + Calendar icon */}
      <div className="relative flex items-center">
        <input
          ref={inputRef}
          type="date"
          className={`border rounded-lg bg-light text-sm px-3 py-2.5 w-full pr-10 cursor-pointer
            ${
              error
                ? "border-red-500 bg-red-50 text-red-600 placeholder:text-red-400"
                : "border-gray-300 bg-surface hover:border-blue-400"
            }
            focus:outline-none focus:ring-2 focus:ring-blue-500 transition
            [&::-webkit-calendar-picker-indicator]:opacity-0
            [&::-webkit-inner-spin-button]:appearance-none
            [&::-webkit-clear-button]:hidden
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

        {/* Custom calendar icon (right aligned) */}
        <button
          type="button"
          onClick={handleCalendarClick}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition"
        >
          <Calendar className="w-5 h-5" strokeWidth={1.8} />
        </button>
      </div>
    </div>
  );
};

export default DateInputBox;

