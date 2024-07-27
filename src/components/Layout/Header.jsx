import React, { useState } from "react";
import { FiAlignJustify, FiSearch } from "react-icons/fi";
// import logo from "../../assets/logo.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white w-full top-0 fixed shadow-md px-6 py-3 text-black font-medium lg:px-14 z-50 ">
      {/* // <header className="fixed top-0 w-full bg-white shadow-md p-6 text-black font-medium lg:px-14 z-50"> */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold h-[80px] w-[80px] rounded-[40px] border border-black">
          <a href="/">
            {/* <img
              src={logo}
              alt="Logo"
              className="bg-cover h-[80px] w-[80px] rounded-[40px] border border-black-700"
            /> */}
            Logo
          </a>
        </div>

        <nav className="hidden md:flex space-x-4 font-bold">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/mylearning" className="hover:text-gray-300">
            My Learning
          </a>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
          <a href="/contact" className="hover:text-gray-300">
            Contact
          </a>

          <a href="/search" className="hover:text-gray-300">
            <FiSearch className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FiAlignJustify /> : <FiAlignJustify />}
          </button>
        </div>
        {/* Search Icon */}
        <div className="hidden md:block bg-[#F68B33] font-bold rounded-lg p-3 text-white">
          {/* <FiSearch className="w-6 h-6 cursor-pointer hover:text-gray-300" /> */}
          <nav>
            <a href="/login" className="hover:text-gray-300  ">
              Login /
            </a>
            <a href="/register" className="hover:text-gray-300">
              Registration
            </a>
          </nav>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md font-bold">
          <a href="/" className="block px-4 py-2 hover:bg-gray-200">
            Home
          </a>
          <a href="/mylearning" className="block px-4 py-2 hover:bg-gray-200">
            My Learning
          </a>
          <a href="/about" className="block px-4 py-2 hover:bg-gray-200">
            About
          </a>
          <a href="/contact" className="block px-4 py-2 hover:bg-gray-200">
            Contact
          </a>
          <a href="/login" className="block px-4 py-2 hover:bg-gray-200">
            Login
          </a>
          <a href="/register" className="block px-4 py-2 hover:bg-gray-200">
            Registration
          </a>
          <a href="/search" className="block px-4 py-2 hover:bg-gray-200">
            <FiSearch className="w-6 h-6 cursor-pointer hover:text-gray-300" />
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
