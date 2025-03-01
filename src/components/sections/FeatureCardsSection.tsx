
import React from "react";
import FeatureCard from "../ui/FeatureCard";

const FeatureCardsSection: React.FC = () => {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="w-full">
            <FeatureCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/14c11ff23b1afc431fed24deaa1e8d30ab2c59c39397a95f4d23c78ff3f50503?placeholderIfAbsent=true"
              title="Elevating the Dining Experience"
              description="From elegant table settings to innovative culinary creations, our team of designers and chefs work tirelessly to curate a dining experience that captivates the senses and leaves a lasting impression on our guests"
            />
          </div>
          <div className="w-full">
            <FeatureCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b41f42db159e31d808eb6eb012be5c0f10cb255e1473ca71fbf8582e0947d2c5?placeholderIfAbsent=true"
              title="Crafting a Legacy"
              description="At the heart of our company lies a steadfast commitment to quality, innovation, and a passion for excellence"
            />
          </div>
          <div className="w-full lg:col-span-1 md:col-span-2 lg:max-w-none md:max-w-md md:mx-auto">
            <FeatureCard
              icon="https://cdn.builder.io/api/v1/image/assets/TEMP/5cccf47750a9175e00794386dfe9cc4ccfbc9894d721f2cad735fcf0d2e78f54?placeholderIfAbsent=true"
              title="Artistry in Every Dish"
              description="Our culinary masterpieces are a symphony of flavors, textures, and visual artistry, expertly crafted to delight the palate and ignite the imagination of our discerning clientele"
              bordered
              className="border-[rgba(54,52,54,1)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;
