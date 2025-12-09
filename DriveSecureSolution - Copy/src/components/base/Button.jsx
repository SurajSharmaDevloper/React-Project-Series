import React from "react";

const Button = ({
  children,
  size = "medium",
  variant = "primary",
  className = "",
  disabled = false,
  loading = false,
  ...rest
}) => {
  // size variants
  const sizes = {
    small: "px-3 py-1 text-sm",
    medium: "px-5 py-2 text-base text-md",
    large: "px-6 py-2.5 text-lg",
  };

  // color / style variants
  const variants = {
    primary:
      "bg-[#e36e53] hover:bg-[#d85c3f] active:bg-[#c44e33] focus:ring-2 focus:ring-[#f1a390] text-white",
    secondary:
      "bg-gray-700 text-gray-100 hover:bg-gray-300 focus:ring-gray-200",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-300",
  };

  return (
    <button
      disabled={disabled || loading}
      className={`rounded-lg font-medium focus:outline-none focus:ring-2 transition-all duration-200
        ${sizes[size]} ${variants[variant]} 
        ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      {...rest}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <svg
            className="animate-spin h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            ></path>
          </svg>
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
