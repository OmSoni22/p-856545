
import React from "react";
import Button from "../ui/Button";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white flex w-full flex-col items-stretch justify-center py-20 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 mt-0 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <div className="flex flex-col items-stretch font-semibold">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-[rgba(22,21,23,1)] mb-6 slide-in-left">
                Building a Successful AI-Powered Python Backend
              </h1>
              <p className="text-lg md:text-xl text-[rgba(156,163,171,1)] font-medium leading-relaxed mb-8 slide-in-left" style={{ animationDelay: "0.2s" }}>
                As an AI Python Backend Developer, you have the unique
                opportunity to harness the power of cutting-edge technologies to
                revolutionize the way applications are built and deployed
              </p>
              <Button 
                variant="primary" 
                className="self-start mt-4 slide-in-bottom hover-scale" 
                style={{ animationDelay: "0.4s" }}>
                Get Started
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3600cd9dc09d7dd9621367c455b311cd99ccee5d6b11f0cd4632b76c7de19737?placeholderIfAbsent=true"
              alt="AI Python Backend Development"
              className="w-full h-auto object-contain scale-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
