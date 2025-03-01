import React from "react";
import Button from "../ui/Button";
const UnlockFullPotentialSection: React.FC = () => {
  return <section className="bg-white flex w-full flex-col justify-center px-[70px] py-[126px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
      <div className="mb-[-21px] w-full max-w-[1170px] max-md:max-w-full max-md:mb-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex grow items-start gap-1 flex-wrap max-md:max-w-full max-md:mt-10">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/017ce3d37a268f8d7dbd7a22e6426ad4891f7bd2f2354a5e2e40eec45307b4e9?placeholderIfAbsent=true" alt="AI Icon" className="aspect-[0.97] object-contain w-[72px] shrink-0 mt-[522px] max-md:mt-10" />
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a7984ea8aae4ea4433d5e81e9f1b540d6e85f11f93575108925ca736f043f8d?placeholderIfAbsent=true" alt="Python Development" className="aspect-[0.85] object-contain w-fit grow shrink-0 basis-0 rounded-[13px] max-md:max-w-full" />
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col self-stretch items-stretch text-[17px] font-semibold leading-[1.2] my-auto max-md:max-w-full max-md:mt-10">
              <h2 className="text-[rgba(42,40,42,1)] text-[47px] leading-[59px] max-md:max-w-full max-md:text-[40px] max-md:leading-[56px] max-md:mr-[7px]">
                Unlock the Full Potential of AI-Powered Python for Your Business
              </h2>
              <p className="text-[rgba(110,109,112,1)] text-xl font-medium leading-[31px] mt-[39px] max-md:max-w-full">
                As an AI Python Backend Developer, you possess the unique
                ability to harness the power of cutting-edge technologies to
                revolutionize the way businesses operate
              </p>
              <div className="text-[rgba(91,89,91,1)] font-normal mt-[53px] max-md:mt-10">
                Get Started
              </div>
              <Button variant="yellow" className="mt-[62px] pt-[15px] pb-[29px] px-[45px] rounded-[56px] max-md:mt-10 max-md:px-5 py-[10px]">
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default UnlockFullPotentialSection;