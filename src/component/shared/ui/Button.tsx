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
  const baseClasses =
    "font-jakarta cursor-pointer select-none transition-all duration-300 flex items-center justify-center gap-2";

  const variantClasses: Record<string, string> = {
    primary: "bg-purple-400 text-white hover:bg-purple-600",
    secondary: "bg-black text-white hover:bg-gray-300",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
    textOnly: "bg-transparent text-purple-500 text-[16px]",
    accent: "bg-purple-400 text-black hover:bg-amber-500",
  };

  const sizeClasses: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-4 py-3 md:px-7 md:py-[10px] text-sm sm:text-[15px]",
    lg: "px-9 py-4 text-lg sm:text-xl",
  };

  const hasRoundedClass = /rounded(-\w+)?/.test(className);
  const roundedClass = hasRoundedClass ? "" : "rounded-full";

  // ✅ Final classes
  const finalClasses = [
    baseClasses,
    variantClasses[variant],
    variant !== "textOnly" && sizeClasses[size],
    roundedClass,
    className, // className last → override default variant
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button {...props} className={finalClasses}>
      {children}
    </button>
  );
}
