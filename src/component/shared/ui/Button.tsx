import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" |  "textOnly" | 'accent' ;
}

export default function Button({
  className = "",
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  // Variant styles
  const variantClasses = {
    primary: "bg-purple-500 text-white hover:bg-purple-600",
    secondary: "bg-black text-white hover:bg-gray-300",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
       textOnly: "bg-transparent text-black hover:text-purple-500 border-none",
         accent: "bg-purple-400 text-black hover:bg-amber-500",
  };

  // Rounded default
  const hasRoundedClass = /rounded(-\w+)?/.test(className);
  const roundedClass = hasRoundedClass ? "" : "rounded-full";

  // Responsive text + padding
  const responsiveClasses =
    "px-7 py-3 text-sm sm:text-base md:text-lg  transition-all duration-300 flex items-center justify-center gap-2";

  const finalClasses = [
    "font-jakarta  cursor-pointer select-none",
    responsiveClasses,
    variantClasses[variant],
    roundedClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" className={finalClasses} {...props}>
      {children}
    </button>
  );
}
