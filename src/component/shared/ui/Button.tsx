import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "textOnly" | "accent";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  className = "",
  children,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const baseClasses = "font-jakarta cursor-pointer select-none transition-all duration-300 flex items-center justify-center gap-2";

  const variantClasses: Record<string, string> = {
    primary: "bg-purple-500 text-white hover:bg-purple-600",
    secondary: "bg-black text-white hover:bg-gray-300",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
    textOnly: "bg-transparent text-black hover:text-purple-500 border-none px-0 py-0",
    accent: "bg-purple-400 text-black hover:bg-amber-500",
  };

  // ✅ Size styles (responsive padding + font sizes)
  const sizeClasses: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-7 py-3 text-base sm:text-lg",
    lg: "px-9 py-4 text-lg sm:text-xl",
  };

  // ✅ Handle rounded classes
  const hasRoundedClass = /rounded(-\w+)?/.test(className);
  const roundedClass = hasRoundedClass ? "" : "rounded-full";

  // ✅ Final merged classes
  const finalClasses = [
    baseClasses,
    variantClasses[variant],
    variant !== "textOnly" && sizeClasses[size], // textOnly me px/py nahi
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
