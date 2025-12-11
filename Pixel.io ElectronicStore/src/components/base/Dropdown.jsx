import { useState, useRef, useEffect } from "react";

export default function Dropdown({
  options = [],
  placeholder = "Select...",
  onChange,
  style = {}
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const selectItem = (option) => {
    setSelected(option);
    setOpen(false);
    onChange?.(option);
  };

  return (
    <div
      ref={ref}
      className="relative cursor-pointer "
      style={{ width: "150px", ...style }}
    >
      {/* Trigger */}
      <div
        className="flex items-center justify-between py-1 px-2 bg-transparent"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm text-gray-700">
          {selected || placeholder}
        </span>

        <span className={`text-xs transition-all ${open ? "rotate-180" : ""}`}>
          ▼
        </span>
      </div>

      {/* Dropdown list */}
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-md w-full z-50">
          {options.map((opt, i) => (
            <div
              key={i}
              className="px-3 py-1 text-sm hover:bg-gray-100"
              onClick={() => selectItem(opt)}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
