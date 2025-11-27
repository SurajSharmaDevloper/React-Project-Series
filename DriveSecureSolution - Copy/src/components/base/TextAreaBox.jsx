import React, { useState } from "react";

const TextAreaBox = ({
    label = "Enter Description",
    placeholder = "Type something...",
    required = false,
    rows = 3,
    className = "",
    onChange,
    ...rest
}) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    const handleBlur = () => {
        if (required && value.trim() === "") {
            setError(true);
        } else {
            setError(false);
        }
    };

    const handleChange = (e) => {
        const val = e.target.value;
        setValue(val);

        if (val && val.trim() !== "") setError(false);

        onChange && onChange(val); // send value to parent if needed
    };

    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {/* Label */}
            <label className="text-sm ms-1 font-medium text-gray-700">
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            {/* Text Area */}
            <textarea
                rows={rows}
                className={`border rounded-lg text-sm px-3 py-2.5 w-full bg-surface resize-none
          ${error
                        ? "border-red-500 bg-red-50 text-red-600 placeholder:text-red-400"
                        : "border-gray-300 hover:border-blue-400"
                    }
          focus:outline-none focus:ring-2 focus:ring-blue-500
        `}
                placeholder={error ? "This field is required" : placeholder}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                {...rest}
            />
        </div>
    );
};

export default TextAreaBox;
