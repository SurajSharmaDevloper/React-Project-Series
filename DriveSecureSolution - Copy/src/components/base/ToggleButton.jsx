import React from "react";

/**
 * ToggleButton (stateless)
 *
 * Props:
 * - checked: boolean | undefined  (controlled mode)
 * - defaultChecked: boolean       (uncontrolled mode)
 * - onChange: (checked:boolean) => void
 * - size: "sm" | "md" | "lg"
 * - disabled: boolean
 */
const ToggleButton = ({
  checked,
  defaultChecked,
  onChange,
  size = "md",
  disabled = false,
  ariaLabel = "toggle",
}) => {
  const sizes = {
    sm: {
      track: "w-8 h-4",
      thumb: "w-3 h-3 peer-checked:translate-x-4",
    },
    md: {
      track: "w-10 h-5",
      thumb: "w-4 h-4 peer-checked:translate-x-5",
    },
    lg: {
      track: "w-12 h-6",
      thumb: "w-5 h-5 peer-checked:translate-x-6",
    },
  };

  const s = sizes[size] || sizes.md;

  // Avoid controlled/uncontrolled warning: only pass 'checked' when explicitly provided
  const checkedProp = typeof checked === "boolean" ? { checked } : {};

  return (
    <label className={`relative inline-flex items-center cursor-pointer ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}>
      <input
        type="checkbox"
        className="sr-only peer"
        {...checkedProp}
        defaultChecked={defaultChecked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
        aria-label={ariaLabel}
      />

      {/* Track */}
      <div
        className={`${s.track} rounded-full bg-gray-300 peer-checked:bg-green-500 transition-colors`}
      />

      {/* Thumb */}
      <div
        className={`
          absolute top-0.5 left-0.5 bg-white rounded-full shadow transform transition-transform
          ${s.thumb} 
        `}
      />
    </label>
  );
};

export default ToggleButton;
