import React from "react";
import CustomInputField from "./CustomInputFeild";
import CustomButton from "./CustomButton";
import img1 from '../assets/trustedComp/img1.png'
import img2 from '../assets/trustedComp/img2.jpg'
import img3 from '../assets/trustedComp/img3.png'
import img4 from '../assets/trustedComp/img4.png'
import img5 from '../assets/trustedComp/img5.jpg'
import img6 from '../assets/trustedComp/img6.png'

// Placeholder star image URL
const starImage =
  "data:image/png;base64,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"; // Replace with actual star image URL

const starImage2 =
"https://designimages.appypie.com/profilepicture/profilepicture-1-head-person.jpg"
  const HeroSection = () => {
  return (
    <>
      {" "}
      <section className="flex w-full h-[80vh] text-cblack">
        {/* Left Side */}
        <div className="flex flex-col justify-center w-1/2 p-20">
          <h4 className="mb-2 text-sm font-semibold ">
            No 1 Digital Marketing Agency
          </h4>
          <h1 className="mb-4 text-6xl font-bold text-cblack">
            Expert Domestic Staffing Agency
          </h1>
          <p className="mb-6 text-lg leading-relaxed text-cblack">
            At GenzoAlpha Consulting Group, we are dedicated to delivering
            unparalleled recruitment services by leveraging our extensive
            industry expertise and cutting-edge technology to connect top-tier
            talent with the most dynamic and forward-thinking organizations,
            ensuring a perfect match between candidate skills and company needs.
          </p>

          {/* Star Rating Section */}
          <div className="flex items-center mt-4">
            <div className="flex flex-col items-center mr-6">
              {/* Star Ratings */}
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <img
                    key={i}
                    src={starImage}
                    alt={`Star Rating ${i + 1}`}
                    className="h-6 mr-1"
                  />
                ))}
              </div>
              <div>
                <div className="text-2xl font-semibold">4.8</div>
                <div className="text-sm">Average Rating</div>
              </div>
            </div>
            <div className="flex items-center">
              <img src={starImage2} alt="Star Rating" className="h-20 mr-2" />
              <div>
                <h1 className="text-2xl font-semibold">24K</h1>
                <h4 className="text-sm">Happy Customers</h4>
              </div>
            </div>
          </div>
          {/* End of Star Rating Section */}
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center w-1/2 p-10 pr-28 pl-28 ">
          <CustomInputField label="Name" placeholder="Enter your name" />
          <CustomInputField label="Email" placeholder="Enter your email" />
          <CustomInputField
            label="Phone Number"
            placeholder="Enter your phone number"
          />
          <CustomButton text="Let's Connect" className="mt-4" />
        </div>
      </section>
      <section className="flex flex-col items-center py-8">
  <div className="mb-8">
    <h2 className="text-2xl font-semibold">Trusted by Global Companies</h2>
  </div>
  <div className="flex justify-center space-x-5">
    <div className="flex items-center justify-center w-48 p-4 border">
      <img src={img1} alt="Star Rating" className="h-20" />
    </div>
    <div className="flex items-center justify-center w-48 p-4 border">
      <img src={img2} alt="Star Rating" className="h-20" />
    </div>
    <div className="flex items-center justify-center w-48 p-4 border">
      <img src={img3} alt="Star Rating" className="h-20" />
    </div>
    <div className="flex items-center justify-center w-48 p-4 border">
      <img src={img4} alt="Star Rating" className="h-20" />
    </div>
    <div className="flex items-center justify-center w-48 p-4 border">
      <img src={img5} alt="Star Rating" className="h-20" />
    </div>
    <div className="flex items-center justify-center w-48 p-4 border">
      <img src={img6} alt="Star Rating" className="h-20" />
    </div>
  </div>
</section>

    </>
  );
};

export default HeroSection;
