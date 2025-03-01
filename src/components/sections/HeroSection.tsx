
import React from "react";
import Button from "../ui/Button";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white flex mt-[-70px] w-full max-w-[1373px] flex-col items-stretch justify-center px-[116px] py-[100px] max-md:max-w-full max-md:px-5">
      <div className="w-full max-md:max-w-full">
        <div className="gap-8 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex flex-col self-stretch items-stretch font-semibold my-auto max-md:max-w-full max-md:mt-10">
              <h1 className="text-[rgba(22,21,23,1)] text-[71px] leading-[86px] max-md:max-w-full max-md:text-[40px] max-md:leading-[54px] slide-in-left">
                Building a Successful AI-Powered Python Backend
              </h1>
              <p className="text-[rgba(156,163,171,1)] text-xl font-medium leading-[35px] mr-6 mt-[31px] max-md:max-w-full max-md:mr-2.5 slide-in-left" style={{animationDelay: "0.2s"}}>
                As an AI Python Backend Developer, you have the unique
                opportunity to harness the power of cutting-edge technologies to
                revolutionize the way applications are built and deployed
              </p>
              <Button
                variant="primary"
                className="mt-[63px] pt-3.5 pb-[26px] px-9 max-md:mt-10 max-md:px-5 slide-in-bottom hover-scale"
                style={{animationDelay: "0.4s"}}
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3600cd9dc09d7dd9621367c455b311cd99ccee5d6b11f0cd4632b76c7de19737?placeholderIfAbsent=true"
              alt="AI Python Backend Development"
              className="aspect-[0.86] object-contain w-full grow max-md:max-w-full max-md:mt-[26px] scale-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
