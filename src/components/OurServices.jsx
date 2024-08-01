import React from "react";
import CustomButton from "./CustomButton";

const OurServices = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container px-6 mx-auto">
        <h4 className="mb-4 text-sm text-center text-gray-600 uppercase">
          Our Services
        </h4>
        <h1 className="mb-12 text-4xl font-bold text-center text-gray-800">
          Customized staffing solutions tailored to your unique requirements
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Executive Recruitment
            </h2>
            <p className="mb-6 text-gray-600">
              Our recruitment service is one of the best in the world. If you
              want to learn more about our services, feel free to contact us.
            </p>
            <h1 className="mb-6 text-3xl font-bold text-gray-800">$323/month</h1>
            <CustomButton text="Get Started" />
          </div>
          
          {/* Card 2 */}
          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Executive Recruitment
            </h2>
            <p className="mb-6 text-gray-600">
              Our recruitment service is one of the best in the world. If you
              want to learn more about our services, feel free to contact us.
            </p>
            <h1 className="mb-6 text-3xl font-bold text-gray-800">$323/month</h1>
            <CustomButton text="Get Started" />
          </div>
          
          {/* Card 3 */}
          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Executive Recruitment
            </h2>
            <p className="mb-6 text-gray-600">
              Our recruitment service is one of the best in the world. If you
              want to learn more about our services, feel free to contact us.
            </p>
            <h1 className="mb-6 text-3xl font-bold text-gray-800">$323/month</h1>
            <CustomButton text="Get Started" />
          </div>
          
          {/* Card 4 */}
          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Executive Recruitment
            </h2>
            <p className="mb-6 text-gray-600">
              Our recruitment service is one of the best in the world. If you
              want to learn more about our services, feel free to contact us.
            </p>
            <h1 className="mb-6 text-3xl font-bold text-gray-800">$323/month</h1>
            <CustomButton text="Get Started" />
          </div>

                    {/* Card 5 */}

          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Executive Recruitment
            </h2>
            <p className="mb-6 text-gray-600">
              Our recruitment service is one of the best in the world. If you
              want to learn more about our services, feel free to contact us.
            </p>
            <h1 className="mb-6 text-3xl font-bold text-gray-800">$323/month</h1>
            <CustomButton text="Get Started" />
          </div>

                    {/* Card 5 */}

          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Executive Recruitment
            </h2>
            <p className="mb-6 text-gray-600">
              Our recruitment service is one of the best in the world. If you
              want to learn more about our services, feel free to contact us.
            </p>
            <h1 className="mb-6 text-3xl font-bold text-gray-800">$323/month</h1>
            <CustomButton text="Get Started" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
