import React from "react";
import CustomInputField from "./CustomInputFeild";
import CustomButton from "./CustomButton";
import starImage from "../assets/trustedComp/img6.png";
import starImage2 from "../assets/trustedComp/img6.png";
import TrustedCompany from "./TrustedCompany";

const HeroSection = () => {
  return (
    <section className="flex flex-col h-auto md:h-screen p-4 md:p-6 lg:p-8 bg-headerImg bg-cover bg-center">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-cblack">
        {/* Left Side */}
        <div className="flex flex-col justify-center w-full md:w-1/2 p-6 md:p-10 lg:p-15">
          <h4 className="mb-2 text-lg font-semibold">No 1 Digital Marketing Agency</h4>
          <h1 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-cblack">
            Expert Domestic Staffing Agency
          </h1>
          <p className="mb-6 text-base md:text-lg lg:text-xl leading-relaxed text-cblack">
            At GenzoAlpha Consulting Group, we are dedicated to delivering
            unparalleled recruitment services by leveraging our extensive
            industry expertise and cutting-edge technology to connect top-tier
            talent with the most dynamic and forward-thinking organizations,
            ensuring a perfect match between candidate skills and company needs.
          </p>

          {/* Star Rating Section */}
          <div className="flex flex-col md:flex-row items-center mt-4">
            <div className="flex flex-col items-center mb-6 md:mb-0 md:mr-6">
              {/* Star Ratings */}
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={starImage}
                    alt={`Star Rating ${i + 1}`}
                    className="h-6 md:h-8 mr-1"
                  />
                ))}
              </div>
              <div className="text-center md:text-left">
                <div className="text-xl md:text-3xl lg:text-4xl font-semibold">4.8</div>
                <div className="text-sm md:text-base">Average Rating</div>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={starImage2}
                alt="Star Rating"
                className="h-16 md:h-20 lg:h-24 mr-2"
              />
              <div className="text-center md:text-left">
                <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold">24K</h1>
                <h4 className="text-sm md:text-base">Happy Customers</h4>
              </div>
            </div>
          </div>
          {/* End of Star Rating Section */}
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center w-full md:w-1/3 p-6 md:p-10 lg:p-15">
          <CustomInputField label="Name" placeholder="Enter your name" />
          <CustomInputField label="Email" placeholder="Enter your email" />
          <CustomInputField label="Phone Number" placeholder="Enter your phone number" />
          <CustomButton text="Let's Connect" className="mt-4" />
        </div>
      </div>

      {/* Trusted Companies Section */}
      <TrustedCompany />
    </section>
  );
};

export default HeroSection;
