import React, { useState } from "react";
import { FiAlignJustify, FiSearch } from "react-icons/fi";
import logo from "../../assets/logo.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full px-6 py-3 font-medium text-black bg-white shadow-md lg:px-14 ">

      <div className="container flex items-center justify-between mx-auto">
        <div className="text-lg font-bold h-[80px] w-[80px] ">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="bg-cover h-[80px] w-[80px]"
            />
          </a>
        </div>

        <nav className="hidden space-x-20 font-bold md:flex">
          <a href="/" className="hover:text-gray-300">
            Services
          </a>
          <a href="/mylearning" className="hover:text-gray-300">
            Pricing
          </a>
          <a href="/about" className="hover:text-gray-300">
            About Us
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact Us
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiAlignJustify /> : <FiAlignJustify />}
          </button>
        </div>
        {/* Search Icon */}
        <div className="hidden pt-2 pb-2 pl-8 pr-8 font-bold text-white bg-blue-500 rounded-lg md:block">
          <nav>
            <a href="/getstarted" className="hover:text-gray-300">
              Get Started
            </a>
          </nav>
        </div>
      </div>
      {isOpen && (
        <nav className="font-bold bg-white shadow-md md:hidden">
          <a href="/" className="block px-4 py-2 hover:bg-gray-200">
            Services 
            
          </a>
          <a href="/mylearning" className="block px-4 py-2 hover:bg-gray-200">
            Pricing
          </a>
          <a href="/about" className="block px-4 py-2 hover:bg-gray-200">
            About Us
          </a>
          <a href="/contact" className="block px-4 py-2 hover:bg-gray-200">
            Contact Us
          </a>

          <a href="/getstarted" className="block px-4 py-2 hover:bg-gray-200">
            Get Started
          </a>

        </nav>
      )}
    </header>
  );
};

export default Header;
