
import React from "react";
import Button from "../ui/Button";

const PotentialSection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[rgba(31,29,31,1)] leading-tight slide-in-left">
                Unlocking the Full Potential of AI and Python for Your Business
              </h2>
              <p className="text-lg md:text-xl text-[rgba(109,108,111,1)] font-medium leading-relaxed slide-in-left" style={{animationDelay: "0.1s"}}>
                As an AI Python Backend Developer, you possess the unique
                ability to harness the power of cutting-edge technologies to
                revolutionize the way businesses operate
              </p>
              <div className="text-xl text-[rgba(121,120,122,1)] font-medium slide-in-left" style={{animationDelay: "0.2s"}}>
                Discover More
              </div>
              <Button 
                variant="secondary" 
                className="hover-scale slide-in-bottom"
                style={{animationDelay: "0.3s"}}>
                Join Now
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8670b6fb02d3340c6707e7cafab4398fbcec17036cdcb3c0e3d1d5e61bc17bb6?placeholderIfAbsent=true"
              alt="AI and Python Potential"
              className="w-full h-auto object-contain rounded scale-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PotentialSection;
