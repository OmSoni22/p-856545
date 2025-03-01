
import React from "react";

const EmpoweringSection: React.FC = () => {
  return (
    <section className="bg-white flex w-full flex-col items-center justify-center px-20 py-[147px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="flex mb-[-29px] w-full max-w-[1165px] flex-col items-stretch max-md:max-w-full max-md:mb-2.5">
        <div className="flex items-center gap-8 flex-wrap justify-between max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fb67d705bdc3987409a32f65124ab3907fdc27b4650ccf0ca77076de04295a01?placeholderIfAbsent=true"
            alt="AI Python Development"
            className="aspect-[0.9] object-contain w-[234px] self-stretch shrink-0 max-w-full rounded-[10px] shadow-md hover-scale scale-in"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f05f25bd4e7c49af778d8ef6348c2bf5ab6f1f2330b81de816fb1a42c2da69ce?placeholderIfAbsent=true"
            alt="AI Icon"
            className="aspect-[0.95] object-contain w-[72px] self-stretch shrink-0 my-auto pulse pop-in"
            style={{animationDelay: "0.3s"}}
          />
          <div className="self-stretch flex flex-col items-stretch my-auto max-md:max-w-full">
            <h2 className="text-[rgba(43,41,43,1)] text-[46px] font-semibold leading-[57px] max-md:max-w-full max-md:text-[40px] max-md:leading-[56px] slide-in-right">
              Empowering Businesses with AI-Powered Python
            </h2>
            <p className="text-[rgba(115,113,117,1)] text-lg font-medium leading-[30px] mt-[30px] max-md:max-w-full slide-in-right" style={{animationDelay: "0.2s"}}>
              As an AI Python Backend Developer, you possess the unique ability
              to harness the power of cutting-edge technologies to revolutionize
              the way businesses operate
            </p>
          </div>
        </div>
        <div className="w-[503px] max-w-full mr-14 mt-[81px] max-md:mr-2.5 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
            <div className="w-[34%] max-md:w-full max-md:ml-0">
              <div className="flex flex-col whitespace-nowrap leading-[1.2] max-md:mt-10">
                <div className="text-[rgba(57,54,56,1)] text-2xl font-semibold self-stretch slide-in-bottom">
                  Streamline
                </div>
                <div className="text-[rgba(120,118,122,1)] text-[17px] font-normal mt-7 slide-in-bottom" style={{animationDelay: "0.1s"}}>
                  Automate
                </div>
                <div className="text-[rgba(128,126,129,1)] text-[19px] font-medium mt-[26px] slide-in-bottom" style={{animationDelay: "0.2s"}}>
                  Innovate
                </div>
              </div>
            </div>
            <div className="w-[66%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col items-stretch font-medium max-md:mt-10">
                <div className="text-[rgba(37,37,41,1)] text-[23px] leading-[1.2] slide-in-left">
                  Optimize
                </div>
                <div className="text-[rgba(118,116,120,1)] text-[19px] leading-[41px] mt-[23px] slide-in-left" style={{animationDelay: "0.1s"}}>
                  Elevate Your Business with AI-Powered Python
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmpoweringSection;
