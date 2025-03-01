import React from "react";
import Button from "@/components/ui/Button";

const JourneySection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[rgba(41,39,40,1)] leading-tight slide-in-left">
                Embark on a Journey of Innovation
              </h2>
              <p className="text-lg text-[rgba(119,117,120,1)] font-medium leading-relaxed slide-in-left" style={{animationDelay: "0.1s"}}>
                At the heart of our company lies a steadfast commitment to
                quality, innovation, and a passion for excellence. Through our
                AI-powered Python backend solutions, we strive to create a
                lasting impact and leave an indelible mark on the industry,
                empowering businesses to unlock new frontiers of growth and
                success
              </p>
              <div className="text-base text-[rgba(130,127,129,1)] slide-in-left" style={{animationDelay: "0.2s"}}>
                Explore
              </div>
              <div className="text-lg font-medium text-[rgba(130,128,131,1)] slide-in-left" style={{animationDelay: "0.3s"}}>
                Discover the Transformative Power of AI and Python
              </div>
              <Button 
                variant="black" 
                className="hover-scale slide-in-bottom" 
                style={{animationDelay: "0.4s"}}>
                Join Now
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1027d31895c4d9e4d4534d08e7a93c4bdc97417d25718f198537874baca85e8?placeholderIfAbsent=true"
              alt="Journey of Innovation"
              className="w-full h-auto object-contain rounded-3xl shadow-md scale-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
