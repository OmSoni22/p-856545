import React from "react";
import FeatureCard from "../ui/FeatureCard";

const FeatureCardsSection: React.FC = () => {
  return (
    <section className="bg-white flex w-full flex-col items-center pt-[41px] pb-[147px] px-[70px] max-md:max-w-full max-md:pb-[100px] max-md:px-5">
      <div className="mb-[-29px] w-full max-w-[1145px] ml-[23px] max-md:max-w-full max-md:mb-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[31%] max-md:w-full max-md:ml-0">
            <FeatureCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/14c11ff23b1afc431fed24deaa1e8d30ab2c59c39397a95f4d23c78ff3f50503?placeholderIfAbsent=true"
              title="Elevating the Dining Experience"
              description="From elegant table settings to innovative culinary creations, our team of designers and chefs work tirelessly to curate a dining experience that captivates the senses and leaves a lasting impression on our guests"
            />
          </div>
          <div className="w-[29%] ml-5 max-md:w-full max-md:ml-0">
            <FeatureCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b41f42db159e31d808eb6eb012be5c0f10cb255e1473ca71fbf8582e0947d2c5?placeholderIfAbsent=true"
              title="Crafting a Legacy"
              description="At the heart of our company lies a steadfast commitment to quality, innovation, and a passion for excellence"
              className="max-md:mt-10"
            />
          </div>
          <div className="w-2/5 ml-5 max-md:w-full max-md:ml-0">
            <FeatureCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5cccf47750a9175e00794386dfe9cc4ccfbc9894d721f2cad735fcf0d2e78f54?placeholderIfAbsent=true"
              title="Artistry in Every Dish"
              description="Our culinary masterpieces are a symphony of flavors, textures, and visual artistry, expertly crafted to delight the palate and ignite the imagination of our discerning clientele"
              bordered
              className="border-[rgba(54,52,54,1)] max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;
