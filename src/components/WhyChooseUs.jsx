import React from "react";

const WhyChooseUs = () => {
  return (
    <>
      {/* Title Section */}
      <section className="py-16 bg-white">
        <div className="container px-6 mx-auto text-center">
          <h4 className="mb-2 text-sm text-gray-600 uppercase">Why Choose Us</h4>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Your Trusted Staffing Partner
          </h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="flex flex-col md:flex-row p-6 md:p-10 lg:p-16 bg-white">
        {/* Image and Statistics */}
        <div className="md:w-1/2 flex flex-col items-center justify-center text-center mb-8 md:mb-0">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
            alt="Profile"
            className="object-cover mb-6 border border-gray-300 rounded-full shadow-lg w-80 h-80 md:w-96 md:h-96"
          />
          <div className="flex flex-wrap justify-center gap-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="p-4 border border-gray-200 rounded-lg bg-gray-50 flex flex-col items-center">
                <h1 className="mb-2 text-2xl md:text-3xl font-bold text-gray-800">15</h1>
                <p className="text-gray-600">Years of Experience</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="md:w-1/2 flex flex-col gap-6">
          {['Proven Recruitment Strategies', 'Proven Recruitment Strategies', 'Proven Recruitment Strategies', 'Proven Recruitment Strategies'].map((feature, index) => (
            <div key={index} className="bg-white p-5 border border-gray-300 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature}</h3>
              <p className="text-gray-600">
                We rely on proven recruitment strategies to source the best talent for your organization.
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;
