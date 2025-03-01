
import React from "react";

const OptimizeSection: React.FC = () => {
  return (
    <section className="bg-white flex w-full flex-col items-center px-20 py-[120px] max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="text-[rgba(94,95,96,1)] text-xl font-medium leading-[1.2] text-center fade-in">
        Optimize
      </div>
      <div className="text-[rgba(144,142,143,1)] text-[19px] font-medium leading-[1.2] text-center mt-[18px] fade-in" style={{animationDelay: "0.1s"}}>
        Innovate
      </div>
      <div className="self-stretch mb-[-29px] w-full mt-[47px] max-md:max-w-full max-md:mt-10 max-md:mb-2.5">
        <div className="gap-6 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[33%] max-md:w-full max-md:ml-0">
            <div className="bg-white border flex grow gap-7 font-medium whitespace-nowrap leading-[1.2] w-full px-[65px] py-[60px] rounded-[11px] border-[rgba(84,84,86,1)] border-solid max-md:mt-[39px] max-md:px-5 hover-lift scale-in" style={{animationDelay: "0.1s"}}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4cf138e40e909b50c1632a2a9fbf0d5790b568b135917108f38d401c97677b1?placeholderIfAbsent=true"
                alt="Streamline Icon"
                className="aspect-[0.98] object-contain w-[52px] shrink-0 mt-[7px] pop-in"
              />
              <div className="flex flex-col items-stretch">
                <div className="text-[rgba(84,84,86,1)] text-[21px] slide-in-right">
                  Streamline
                </div>
                <div className="text-[rgba(158,156,159,1)] text-[19px] mt-[26px] slide-in-right" style={{animationDelay: "0.1s"}}>
                  Automate
                </div>
              </div>
            </div>
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-white border flex grow flex-col items-center font-medium whitespace-nowrap leading-[1.2] justify-center w-full px-[79px] py-[62px] rounded-[13px] border-[rgba(67,66,66,1)] border-solid max-md:mt-[39px] max-md:px-5 hover-lift scale-in" style={{animationDelay: "0.2s"}}>
              <div className="flex w-24 flex-col items-stretch">
                <div className="text-[rgba(67,66,66,1)] text-[23px] slide-in-bottom">
                  Empower
                </div>
                <div className="text-[rgba(173,172,173,1)] text-[19px] mt-[22px] slide-in-bottom" style={{animationDelay: "0.1s"}}>
                  Transform
                </div>
              </div>
            </div>
          </div>
          <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-white border flex grow items-stretch gap-5 leading-[1.2] w-full px-16 py-[54px] rounded-[10px] border-[rgba(68,66,67,1)] border-solid max-md:mt-[39px] max-md:px-5 hover-lift scale-in" style={{animationDelay: "0.3s"}}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f80442c9e89974fbdccf60ee6cb7625695738ffe5422be2736a9948a32e4a03?placeholderIfAbsent=true"
                alt="Elevate Icon"
                className="aspect-[1.03] object-contain w-[75px] shrink-0 pop-in"
              />
              <div className="flex flex-col items-stretch mt-1">
                <div className="text-[rgba(68,66,67,1)] text-xl font-medium slide-in-right">
                  Elevate
                </div>
                <div className="text-[rgba(175,173,175,1)] text-[15px] font-normal mt-[27px] slide-in-right" style={{animationDelay: "0.1s"}}>
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
