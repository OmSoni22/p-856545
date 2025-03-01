import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="z-10 flex min-h-[70px] w-full items-center gap-[40px_100px] whitespace-nowrap leading-none justify-between flex-wrap px-[100px] max-md:max-w-full max-md:px-5">
      <div className="self-stretch flex items-center gap-1 text-2xl text-black font-bold my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/66bb4c62ec1ad0fef66c7a415a091e8df75d3f60a5ea3856a41b87be49db3422?placeholderIfAbsent=true"
          alt="Pythoneer Logo"
          className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto"
        />
        <div className="self-stretch my-auto">Pythoneer</div>
      </div>
      <div className="self-stretch flex min-w-60 items-center gap-[30px] text-base text-[rgba(115,111,116,1)] font-normal my-auto">
        <Link
          to="/"
          className="self-stretch my-auto hover:text-black transition-colors"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="self-stretch my-auto hover:text-black transition-colors"
        >
          About
        </Link>
        <Link
          to="/products"
          className="self-stretch my-auto hover:text-black transition-colors"
        >
          Products
        </Link>
        <Link
          to="/contact"
          className="self-stretch my-auto hover:text-black transition-colors"
        >
          Contact
        </Link>
        <Link
          to="/faq"
          className="self-stretch bg-[rgba(9,9,10,1)] min-h-10 text-[rgba(208,208,210,1)] font-semibold text-center my-auto px-5 hover:bg-black transition-colors"
        >
          FAQ
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
