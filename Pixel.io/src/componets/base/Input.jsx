import React from "react";

const Input = ({ placeholder, value, onChange, type = "text" }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        w-full
        max-w-100
        px-4
        py-2
        rounded-lg
        border
        border-gray-300
        bg-white
        text-gray-900
        placeholder-gray-400
        focus:outline-none
        focus:ring-2
        focus:ring-indigo-500
        focus:border-indigo-500
        transition
        duration-300
        dark:bg-gray-800
        dark:border-gray-600
        dark:text-gray-100
        dark:placeholder-gray-400
        dark:focus:ring-blue-400
        dark:focus:border-blue-400
      "
    />
  );
};

export default Input;
