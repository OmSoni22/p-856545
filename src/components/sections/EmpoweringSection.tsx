
import React from "react";

const EmpoweringSection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 mb-16">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb67d705bdc3987409a32f65124ab3907fdc27b4650ccf0ca77076de04295a01?placeholderIfAbsent=true"
            alt="AI Python Development"
            className="w-full max-w-xs object-contain rounded-lg shadow-md scale-in"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f05f25bd4e7c49af778d8ef6348c2bf5ab6f1f2330b81de816fb1a42c2da69ce?placeholderIfAbsent=true"
            alt="AI Icon"
            className="w-16 h-16 object-contain hidden lg:block pulse pop-in"
            style={{animationDelay: "0.3s"}}
          />
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[rgba(43,41,43,1)] mb-6 slide-in-right">
              Empowering Businesses with AI-Powered Python
            </h2>
            <p className="text-lg text-[rgba(115,113,117,1)] font-medium leading-relaxed slide-in-right" style={{animationDelay: "0.2s"}}>
              As an AI Python Backend Developer, you possess the unique ability
              to harness the power of cutting-edge technologies to revolutionize
              the way businesses operate
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <div className="space-y-6">
            <div className="font-semibold text-2xl text-[rgba(57,54,56,1)] slide-in-bottom">
              Streamline
            </div>
            <div className="text-lg text-[rgba(120,118,122,1)] slide-in-bottom" style={{animationDelay: "0.1s"}}>
              Automate
            </div>
            <div className="text-xl font-medium text-[rgba(128,126,129,1)] slide-in-bottom" style={{animationDelay: "0.2s"}}>
              Innovate
            </div>
          </div>
          <div className="space-y-6">
            <div className="text-2xl font-medium text-[rgba(37,37,41,1)] slide-in-left">
              Optimize
            </div>
            <div className="text-xl text-[rgba(118,116,120,1)] leading-relaxed slide-in-left" style={{animationDelay: "0.1s"}}>
              Elevate Your Business with AI-Powered Python
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpoweringSection;
