import React from "react";
import Button from "../ui/Button";
const JourneySection: React.FC = () => {
  return <section className="bg-white flex w-[1299px] max-w-full flex-col pt-[107px] pb-[174px] px-[70px] max-md:pl-5 max-md:py-[100px]">
      <div className="mb-[-35px] w-full max-w-[1176px] max-md:max-w-full max-md:mb-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="flex flex-col self-stretch font-semibold my-auto max-md:max-w-full max-md:mt-10">
              <h2 className="text-[rgba(41,39,40,1)] text-[49px] leading-[58px] max-md:text-[40px] max-md:leading-[53px]">
                Embark on a Journey of Innovation
              </h2>
              <p className="text-[rgba(119,117,120,1)] text-[19px] font-medium leading-[30px] self-stretch mt-[21px] max-md:max-w-full">
                At the heart of our company lies a steadfast commitment to
                quality, innovation, and a passion for excellence. Through our
                AI-powered Python backend solutions, we strive to create a
                lasting impact and leave an indelible mark on the industry,
                empowering businesses to unlock new frontiers of growth and
                success
              </p>
              <div className="text-[rgba(130,127,129,1)] text-[17px] font-normal leading-[1.2] mt-[37px]">
                Explore
              </div>
              <div className="text-[rgba(130,128,131,1)] text-lg font-medium leading-10 mt-[30px]">
                Discover the Transformative Power of AI and Python
              </div>
              <Button variant="black" className="mt-[66px] pt-3 pb-[25px] px-[38px] rounded-[51px] max-md:mt-10 max-md:px-5 py-[10px]">
                Join Now
              </Button>
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1027d31895c4d9e4d4534d08e7a93c4bdc97417d25718f198537874baca85e8?placeholderIfAbsent=true" alt="Journey of Innovation" className="aspect-[0.84] object-contain w-full grow rounded-[51px] max-md:max-w-full max-md:mt-10" />
          </div>
        </div>
      </div>
    </section>;
};
export default JourneySection;