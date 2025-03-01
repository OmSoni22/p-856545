import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white flex w-full gap-[40px_100px] text-base text-[rgba(135,132,134,1)] font-normal justify-center flex-wrap pt-[120px] pb-20 px-[100px] max-md:max-w-full max-md:pt-[100px] max-md:px-5">
      <div className="leading-4">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/937f1d6725c283fe2cea402c73e734441f43ffd3d7df03702cc114dcbe3dd52d?placeholderIfAbsent=true"
          alt="Pythoneer Logo"
          className="aspect-[1] object-contain w-24"
        />
        <div className="mt-10">
          © 2025 Pythoneer, Inc.
          <br />
          All rights reserved.
        </div>
      </div>
      <div className="flex min-w-60 items-center gap-[30px] whitespace-nowrap leading-none flex-wrap flex-1 shrink basis-[0%] max-md:max-w-full">
        <div className="self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto">
          <div className="text-[15px] font-semibold">Company</div>
          <Link
            to="/"
            className="block mt-5 hover:text-black transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block mt-5 hover:text-black transition-colors"
          >
            About
          </Link>
          <Link
            to="/products"
            className="block mt-5 hover:text-black transition-colors"
          >
            Products
          </Link>
          <Link
            to="/contact"
            className="block mt-5 hover:text-black transition-colors"
          >
            Contact
          </Link>
        </div>
        <div className="self-stretch min-w-60 flex-1 shrink basis-[0%] my-auto">
          <div className="text-[15px] font-semibold">Resources</div>
          <Link
            to="/tutorials"
            className="block mt-5 hover:text-black transition-colors"
          >
            Tutorials
          </Link>
          <Link
            to="/guides"
            className="block mt-5 hover:text-black transition-colors"
          >
            Guides
          </Link>
          <Link
            to="/webinars"
            className="block mt-5 hover:text-black transition-colors"
          >
            Webinars
          </Link>
          <Link
            to="/blog"
            className="block mt-5 hover:text-black transition-colors"
          >
            Blog
          </Link>
        </div>
        <div className="self-stretch min-w-60 text-[15px] font-semibold flex-1 shrink basis-[0%] my-auto">
          <div className="mb-5">Connect</div>
          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:opacity-80 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              className="hover:opacity-80 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://github.com"
              aria-label="GitHub"
              className="hover:opacity-80 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
