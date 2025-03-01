
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`z-10 fixed top-0 left-0 right-0 flex min-h-[70px] w-full items-center whitespace-nowrap leading-none justify-between px-6 sm:px-10 md:px-16 lg:px-20 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-white"
      }`}
    >
      <div className="flex items-center gap-2 text-2xl text-black font-bold pop-in">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/66bb4c62ec1ad0fef66c7a415a091e8df75d3f60a5ea3856a41b87be49db3422?placeholderIfAbsent=true"
          alt="Pythoneer Logo"
          className="w-10 h-10 object-contain hover-scale"
        />
        <div>Pythoneer</div>
      </div>

      {/* Mobile menu button */}
      <button 
        className="md:hidden flex items-center"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {mobileMenuOpen ? (
            <path d="M18 6L6 18M6 6l12 12"></path>
          ) : (
            <path d="M4 12h16M4 6h16M4 18h16"></path>
          )}
        </svg>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8 text-base text-[rgba(115,111,116,1)]">
        <Link
          to="/"
          className="hover:text-black transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FFDE57] hover:after:w-full after:transition-all"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-black transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FFDE57] hover:after:w-full after:transition-all"
        >
          About
        </Link>
        <Link
          to="/products"
          className="hover:text-black transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FFDE57] hover:after:w-full after:transition-all"
        >
          Products
        </Link>
        <Link
          to="/contact"
          className="hover:text-black transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#FFDE57] hover:after:w-full after:transition-all"
        >
          Contact
        </Link>
        <Link
          to="/faq"
          className="bg-[rgba(9,9,10,1)] text-[rgba(208,208,210,1)] font-semibold text-center px-5 py-2 hover:bg-black transition-colors hover-scale"
        >
          FAQ
        </Link>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-[70px] left-0 right-0 bg-white shadow-md flex flex-col w-full md:hidden slide-in-top">
          <Link
            to="/"
            className="px-6 py-4 hover:bg-gray-50 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="px-6 py-4 hover:bg-gray-50 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/products"
            className="px-6 py-4 hover:bg-gray-50 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="px-6 py-4 hover:bg-gray-50 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/faq"
            className="mx-6 my-4 bg-[rgba(9,9,10,1)] text-[rgba(208,208,210,1)] font-semibold text-center py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            FAQ
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
