import { tv } from "tailwind-variants";

const button = tv({
  base: "px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
  variants: {
    variant: {
      primary:
        "bg-indigo-500 text-white hover:bg-indigo-600 focus:ring-indigo-400",
      secondary:
        "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
      outline:
        "border border-neutral-100 text-neutral-100 font-thin hover:bg-neutral-200 hover:text-neutral-600 focus:ring-neutral-400",
      ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
    },
    size: {
      sm: "px-2 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export default function Button({ variant, size, children, ...props }) {
  return (
    <button className={button({ variant, size })} {...props}>
      {children}
    </button>
  );
}
