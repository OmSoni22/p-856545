
import React from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon?: string;
  title: string;
  description: string;
  className?: string;
  bordered?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className,
  bordered = false,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center p-6 md:p-8 h-full transition-all duration-300 hover-lift scale-in",
        bordered && "border border-solid rounded-[46px] shadow-sm",
        className,
      )}
    >
      {icon && (
        <img
          src={icon}
          alt={title}
          className="w-16 sm:w-20 aspect-square object-contain mb-6 pop-in"
        />
      )}
      <h3 className="text-xl sm:text-2xl md:text-[27px] font-semibold leading-tight text-[rgba(53,52,53,1)] mb-4 slide-in-bottom">
        {title}
      </h3>
      <p 
        className="text-base md:text-lg text-[rgba(119,116,120,1)] font-normal leading-relaxed slide-in-bottom" 
        style={{animationDelay: "0.1s"}}
      >
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
