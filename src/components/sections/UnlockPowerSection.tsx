
import React from "react";

const UnlockPowerSection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 w-full text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-[rgba(32,30,32,1)] mb-10 fade-in">
          Unlock the Power of AI
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6 text-lg text-[rgba(121,120,123,1)] font-medium">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/69ddb75665e8ed62f7dc1bc1b193ed4b5b70eeb472f98f2f031027857733bf3c?placeholderIfAbsent=true"
            alt="AI Icon"
            className="w-16 h-16 object-contain pop-in"
            style={{animationDelay: "0.3s"}}
          />
          <p className="leading-relaxed slide-in-right" style={{animationDelay: "0.2s"}}>
            Discover how our AI-driven Python backend solutions can streamline
            your development process, enhance application performance, and
            unlock new opportunities for your business
          </p>
        </div>
      </div>
    </section>
  );
};

export default UnlockPowerSection;
