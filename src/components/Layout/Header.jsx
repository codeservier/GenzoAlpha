import React, { useState } from "react";
import { FiAlignJustify, FiSearch } from "react-icons/fi";
import logo from "../../assets/logo.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white w-full top-0 fixed shadow-md px-6 py-3 text-black font-medium lg:px-14 z-50 ">
    
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold h-[80px] w-[80px] rounded-[40px] border border-black">
          <a href="/">
            <img
              src={logo}
              alt="Logo"
              className="bg-cover h-[80px] w-[80px] rounded-[40px] border border-black-700"
            />
          </a>
        </div>

        <nav className="hidden md:flex space-x-20 font-bold">
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
        <div className="hidden md:block bg-blue-500 font-bold rounded-lg pl-8 pr-8 pt-2 pb-2 text-white">
          <nav>
            <a href="/getstarted" className="hover:text-gray-300">
              Get Started
            </a>
          </nav>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md font-bold">
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
