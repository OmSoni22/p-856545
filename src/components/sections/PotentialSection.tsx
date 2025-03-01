import React from "react";
import Button from "../ui/Button";

const PotentialSection: React.FC = () => {
  return (
    <section className="bg-white flex w-full flex-col items-center justify-center px-[70px] py-[118px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <div className="w-full max-w-[1198px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[44%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch text-xl font-semibold leading-[1.2] mt-32 max-md:max-w-full max-md:mt-10">
              <h2 className="text-[rgba(31,29,31,1)] text-[54px] leading-[62px] max-md:max-w-full max-md:text-[40px] max-md:leading-[51px] max-md:mr-2.5">
                Unlocking the Full Potential of AI and Python for Your Business
              </h2>
              <p className="text-[rgba(109,108,111,1)] font-medium leading-[31px] mt-6 max-md:max-w-full">
                As an AI Python Backend Developer, you possess the unique
                ability to harness the power of cutting-edge technologies to
                revolutionize the way businesses operate
              </p>
              <div className="text-[rgba(121,120,122,1)] text-[19px] font-medium mt-12 max-md:mt-10">
                Discover More
              </div>
              <Button
                variant="secondary"
                className="mt-[55px] pt-[11px] pb-[26px] px-[37px] rounded-[5px] max-md:mt-10 max-md:px-5"
              >
                Join Now
              </Button>
            </div>
          </div>
          <div className="w-[56%] ml-5 max-md:w-full max-md:ml-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8670b6fb02d3340c6707e7cafab4398fbcec17036cdcb3c0e3d1d5e61bc17bb6?placeholderIfAbsent=true"
              alt="AI and Python Potential"
              className="aspect-[0.93] object-contain w-full grow max-md:max-w-full max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PotentialSection;
