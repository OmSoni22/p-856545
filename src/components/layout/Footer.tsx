
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white w-full pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12 md:pb-16 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-6 fade-in">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/937f1d6725c283fe2cea402c73e734441f43ffd3d7df03702cc114dcbe3dd52d?placeholderIfAbsent=true"
            alt="Pythoneer Logo"
            className="w-20 h-20 object-contain"
          />
          <div className="text-[rgba(135,132,134,1)]">
            © 2025 Pythoneer, Inc.
            <br />
            All rights reserved.
          </div>
        </div>
        
        <div className="fade-in" style={{animationDelay: "0.1s"}}>
          <h3 className="text-base font-semibold mb-4">Company</h3>
          <div className="space-y-3 text-[rgba(135,132,134,1)]">
            <Link to="/" className="block hover:text-black transition-colors">
              Home
            </Link>
            <Link to="/about" className="block hover:text-black transition-colors">
              About
            </Link>
            <Link to="/products" className="block hover:text-black transition-colors">
              Products
            </Link>
            <Link to="/contact" className="block hover:text-black transition-colors">
              Contact
            </Link>
          </div>
        </div>
        
        <div className="fade-in" style={{animationDelay: "0.2s"}}>
          <h3 className="text-base font-semibold mb-4">Resources</h3>
          <div className="space-y-3 text-[rgba(135,132,134,1)]">
            <Link to="/tutorials" className="block hover:text-black transition-colors">
              Tutorials
            </Link>
            <Link to="/guides" className="block hover:text-black transition-colors">
              Guides
            </Link>
            <Link to="/webinars" className="block hover:text-black transition-colors">
              Webinars
            </Link>
            <Link to="/blog" className="block hover:text-black transition-colors">
              Blog
            </Link>
          </div>
        </div>
        
        <div className="fade-in" style={{animationDelay: "0.3s"}}>
          <h3 className="text-base font-semibold mb-4">Connect</h3>
          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="hover:opacity-80 transition-opacity hover-scale"
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
              className="hover:opacity-80 transition-opacity hover-scale"
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
              className="hover:opacity-80 transition-opacity hover-scale"
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
