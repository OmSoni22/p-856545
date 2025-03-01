
import React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "yellow" | "black";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className,
  ...props
}) => {
  const baseStyles = "text-center font-semibold transition-all duration-300 relative overflow-hidden";

  const variantStyles = {
    primary: "bg-[#FFDE57] text-[#6A4D26] px-9 py-3 rounded hover:bg-[#FFD315] shadow-sm hover:shadow-md",
    secondary: "bg-[#FFD315] text-[#695220] px-9 py-3 rounded-[5px] hover:bg-[#FFDE57] shadow-sm hover:shadow-md",
    yellow: "bg-[#FEC42D] text-[#543C1D] px-9 py-3 rounded-[56px] hover:bg-[#FFDE57] shadow-sm hover:shadow-md",
    black: "bg-[#1C1C1C] text-[#D8D6D7] px-9 py-3 rounded-[51px] hover:bg-[#363636] shadow-sm hover:shadow-md",
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
