import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#000000] py-8 px-10 sm:px-14 text-gray-600">
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-4">
        <div>
          <h3 className="mb-2 font-semibold">About Us</h3>
          <p className="text-gray-400">
            We are committed to providing the best learning management system.
          </p>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Resources</h3>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:underline">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Contact Us</h3>
          <ul>
            <li className="text-gray-400">Email: support@lmsapp.com</li>
            <li className="text-gray-400">Phone: +123 456 7890</li>
            <li className="text-gray-400">
              Address: 123 LMS St, Education City
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 Magnite Learning Management Center</p>
      </div>
    </footer>
  );
};

export default Footer;
