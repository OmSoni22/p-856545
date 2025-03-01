import React from "react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface NewsletterSignupProps {
  className?: string;
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ className }) => {
  return (
    <div className={cn("bg-[rgba(255,222,87,0.2)] rounded-[53px] p-6 sm:p-8 md:p-10 flex flex-col items-stretch", className)}>
      <h3 className="text-2xl sm:text-3xl font-semibold text-center text-[rgba(41,39,40,1)] mb-4 fade-in">
        Stay up to date
      </h3>
      <p className="text-base text-center text-[rgba(119,117,120,1)] font-medium leading-relaxed mb-6 fade-in" style={{animationDelay: "0.1s"}}>
        Subscribe to our newsletter and never miss the latest news, articles,
        and resources
      </p>
      <div className="flex flex-col sm:flex-row items-stretch gap-4 fade-in" style={{animationDelay: "0.2s"}}>
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-white rounded-[33px] py-3 px-6 text-base text-[rgba(119,117,120,1)] font-normal flex-grow"
        />
        <Button variant="secondary" className="hover-scale">Subscribe</Button>
      </div>
    </div>
  );
};

export default NewsletterSignup;

