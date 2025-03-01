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
  const baseStyles = "text-center font-semibold";

  const variantStyles = {
    primary: "bg-[#FFDE57] text-[#6A4D26] px-9 py-3 rounded",
    secondary: "bg-[#FFD315] text-[#695220] px-9 py-3 rounded-[5px]",
    yellow: "bg-[#FEC42D] text-[#543C1D] px-9 py-3 rounded-[56px]",
    black: "bg-[#1C1C1C] text-[#D8D6D7] px-9 py-3 rounded-[51px]",
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
