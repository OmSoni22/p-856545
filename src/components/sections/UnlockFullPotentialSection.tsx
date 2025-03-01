import React from "react";
import Button from "@/components/ui/Button";

const UnlockFullPotentialSection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a7984ea8aae4ea4433d5e81e9f1b540d6e85f11f93575108925ca736f043f8d?placeholderIfAbsent=true"
              alt="Python Development"
              className="w-full h-auto object-contain rounded-xl shadow-md scale-in"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/017ce3d37a268f8d7dbd7a22e6426ad4891f7bd2f2354a5e2e40eec45307b4e9?placeholderIfAbsent=true"
              alt="AI Icon"
              className="w-16 h-16 object-contain absolute bottom-8 left-8 pop-in"
              style={{animationDelay: "0.3s"}}
            />
          </div>
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[rgba(42,40,42,1)] leading-tight slide-in-right">
              Unlock the Full Potential of AI-Powered Python for Your Business
            </h2>
            <p className="text-lg md:text-xl text-[rgba(110,109,112,1)] font-medium leading-relaxed slide-in-right" style={{animationDelay: "0.1s"}}>
              As an AI Python Backend Developer, you possess the unique
              ability to harness the power of cutting-edge technologies to
              revolutionize the way businesses operate
            </p>
            <div className="text-lg text-[rgba(91,89,91,1)] slide-in-right" style={{animationDelay: "0.2s"}}>
              Get Started
            </div>
            <Button 
              variant="yellow" 
              className="hover-scale slide-in-bottom"
              style={{animationDelay: "0.3s"}}>
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnlockFullPotentialSection;
