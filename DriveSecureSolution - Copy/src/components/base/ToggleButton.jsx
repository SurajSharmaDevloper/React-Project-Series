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
const ToggleButton = ({ label, ...rest }) => {

  return (
    <div className="flex flex-col-reverse gap-1 justify-between items-center ">
      <label class="inline-flex  items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" {...rest} />
        <div class="relative w-9 h-5 bg-neutral-300 peer-focus:outline-none border-0 peer-focus:ring-brand-soft dark:peer-focus:ring-brand-soft rounded-full peer peer-checked:bg-[#e36e53] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-0.5 after:start-0.5 after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
      </label>
      <label htmlFor="">{label}</label>
    </div>
  );
};

export default ToggleButton;
