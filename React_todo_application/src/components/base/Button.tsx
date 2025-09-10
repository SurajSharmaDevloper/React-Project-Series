import { tv } from 'tailwind-variants';
 
const button = tv({
  base: 'font-semibold text-white text-nowrap rounded-lg active:opacity-80 focus:ring ',
  variants: {
    color: {
      primary: 'bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 border border-neutral-200 ' ,
      secondary: 'bg-indigo-500 hover:bg-indigo-600 focus:ring-indigo-500 border border-transparent',
      success: 'bg-green-500 hover:bg-green-700',
      warning : 'bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500 border border-transparent',
      danger : 'bg-red-500 hover:bg-red-600 focus:ring-red-500 border border-transparent',

    },
    size: {
      sm: 'p-2 text-sm',
      md: 'py-2 px-4 text-md',
      lg: 'py-3 px-6 text-lg',
      minions : "px-2 py-1 text-sm flex justify-center items-center text-white rounded-lg transition w-[33.3%]"
    }
  }
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: "primary" | "secondary" | "success" | "warning"| "danger";
  size?: "sm" | "md" | "lg" | "minions";
};

export function Button({ color , size, className, ...props }: ButtonProps) {
  return <button className={button({ color , size, className })} {...props} />;
}

export default Button ;