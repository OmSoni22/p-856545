
import React from "react";

const OptimizeSection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xl font-medium text-[rgba(94,95,96,1)] fade-in">
            Optimize
          </div>
          <div className="text-xl font-medium text-[rgba(144,142,143,1)] mt-4 fade-in" style={{animationDelay: "0.1s"}}>
            Innovate
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="hover-lift scale-in" style={{animationDelay: "0.1s"}}>
            <div className="border border-[rgba(84,84,86,1)] rounded-xl p-6 md:p-8 h-full flex items-start gap-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4cf138e40e909b50c1632a2a9fbf0d5790b568b135917108f38d401c97677b1?placeholderIfAbsent=true"
                alt="Streamline Icon"
                className="w-12 h-12 object-contain flex-shrink-0 pop-in"
              />
              <div className="space-y-4">
                <div className="text-xl font-medium text-[rgba(84,84,86,1)] slide-in-right">
                  Streamline
                </div>
                <div className="text-lg text-[rgba(158,156,159,1)] slide-in-right" style={{animationDelay: "0.1s"}}>
                  Automate
                </div>
              </div>
            </div>
          </div>

          <div className="hover-lift scale-in" style={{animationDelay: "0.2s"}}>
            <div className="border border-[rgba(67,66,66,1)] rounded-xl p-6 md:p-8 h-full flex flex-col items-center justify-center text-center">
              <div className="space-y-4">
                <div className="text-xl font-medium text-[rgba(67,66,66,1)] slide-in-bottom">
                  Empower
                </div>
                <div className="text-lg text-[rgba(173,172,173,1)] slide-in-bottom" style={{animationDelay: "0.1s"}}>
                  Transform
                </div>
              </div>
            </div>
          </div>

          <div className="hover-lift scale-in" style={{animationDelay: "0.3s"}}>
            <div className="border border-[rgba(68,66,67,1)] rounded-xl p-6 md:p-8 h-full flex items-start gap-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f80442c9e89974fbdccf60ee6cb7625695738ffe5422be2736a9948a32e4a03?placeholderIfAbsent=true"
                alt="Elevate Icon"
                className="w-14 h-14 object-contain flex-shrink-0 pop-in"
              />
              <div className="space-y-4">
                <div className="text-xl font-medium text-[rgba(68,66,67,1)] slide-in-right">
                  Elevate
                </div>
                <div className="text-base text-[rgba(175,173,175,1)] slide-in-right" style={{animationDelay: "0.1s"}}>
                  Explore the Possibilities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptimizeSection;
