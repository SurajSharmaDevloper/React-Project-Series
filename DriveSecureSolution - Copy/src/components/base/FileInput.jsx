import React, { useState } from "react";

const FileInput = ({
  label = "Upload File",
  required = false,
  className = "",
  onChange,
  ...rest
}) => {
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
      setError("");
      onChange && onChange(e);
    } else {
      setFileName("");
      if (required) setError("Please upload a file");
    }
  };

  const handleBlur = () => {
    if (required && !fileName) {
      setError("This field is required");
    } else {
      setError("");
    }
  };

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {/* Label */}
      <label className="text-sm ms-1 font-medium text-gray-700">{label}</label>

      {/* File input (hidden) */}
      <input
        type="file"
        id="fileInput"
        className="hidden"
        onChange={handleFileChange}
        onBlur={handleBlur}
        {...rest}
      />

      {/* Custom file upload UI */}
      <label
        htmlFor="fileInput"
        className={`flex items-center justify-between cursor-pointer border rounded-lg w-full text-sm
          ${error ? "border-red-500 bg-red-50" : "border-gray-300 bg-surface hover:border-blue-400 bg-surface"}
        `}
      >
        <span className={`${fileName ? "text-gray-800" : "text-gray-400"} px-3`}>
          {fileName || "Choose a file..."}
        </span>
        <span className="bg-secondary text-white  px-3 py-2.5 rounded-r-md text-md">
          Browse
        </span>
      </label>

      {/* Error message */}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default FileInput;
