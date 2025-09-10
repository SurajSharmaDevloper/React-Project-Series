import React from "react";
import { tv } from "tailwind-variants";

const input = tv({
  base: "w-full bg-neutral-100 rounded-md border transition-colors focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed",
  variants: {
    background: {
      default: "border-gray-300 focus:border-blue-500 focus:ring-blue-500",
      outline: "border-2 border-gray-400 focus:border-blue-600 focus:ring-blue-600",
      error: "border-red-500 focus:border-red-600 focus:ring-red-500",
      ghost: "border-transparent bg-transparent focus:border-gray-300 focus:ring-gray-400",
    },
    size: {
      sm: "px-2 py-1 text-sm",
      md: "px-2 py-2 text-base",
      lg: "px-4 py-3 text-lg",
    },
  },
});

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  background?: "default" | "outline" | "error" | "ghost";
  size?: "sm" | "md" | "lg";
};

// ✅ forwardRef allows parent components to use `ref`
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ background, size, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={input({ background, size, className })}
        {...props}
      />
    );
  }
);

Input.displayName = "Input"; 
export default Input;
