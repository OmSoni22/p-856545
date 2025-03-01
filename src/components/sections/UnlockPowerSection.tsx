
import React from "react";

const UnlockPowerSection: React.FC = () => {
  return (
    <section className="bg-white flex w-full flex-col items-center text-center mt-[41px] pt-[99px] pb-[58px] px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex w-[794px] max-w-full flex-col items-stretch">
        <h2 className="text-[rgba(32,30,32,1)] text-[57px] font-semibold leading-[1.2] mr-[29px] max-md:max-w-full max-md:text-[40px] max-md:mr-2.5 fade-in">
          Unlock the Power of AI
        </h2>
        <div className="flex items-start gap-[40px_100px] text-lg text-[rgba(121,120,123,1)] font-medium leading-8 flex-wrap max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/69ddb75665e8ed62f7dc1bc1b193ed4b5b70eeb472f98f2f031027857733bf3c?placeholderIfAbsent=true"
            alt="AI Icon"
            className="aspect-[1.12] object-contain w-9 shrink-0 pop-in"
            style={{animationDelay: "0.3s"}}
          />
          <p className="grow shrink w-[630px] mt-[26px] max-md:max-w-full slide-in-right" style={{animationDelay: "0.2s"}}>
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
