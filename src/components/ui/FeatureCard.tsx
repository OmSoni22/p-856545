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
        "flex flex-col items-center text-center",
        bordered && "border border-solid rounded-[46px] pb-[38px] px-[39px]",
        className,
      )}
    >
      {icon && (
        <img
          src={icon}
          alt={title}
          className="aspect-square object-contain w-[81px]"
        />
      )}
      <h3 className="text-[rgba(53,52,53,1)] text-[27px] font-semibold leading-[34px] mt-11">
        {title}
      </h3>
      <p className="text-[rgba(119,116,120,1)] text-[17px] font-normal leading-[27px] self-stretch mt-[19px]">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
