import React from "react";

const starImage2 =
  "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row w-full h-auto p-8 bg-black">
        {/* Image Section */}
        <div className="flex items-center justify-center w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={starImage2}
            alt="Star Rating"
            className="object-cover border border-gray-300 rounded-full shadow-lg w-80 h-80 md:w-96 md:h-96"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <div className="mb-8 text-center md:text-left">
            <span className="block mb-1 text-sm font-semibold tracking-wider text-gray-500 uppercase">
              About Us
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              Transforming the Staffing Industry with Innovative Solutions
            </h1>
          </div>

          <div className="max-w-md mx-auto md:mx-0">
            <div className="mb-6">
              <h4 className="mb-2 text-xl font-semibold text-gray-300">
                Expert Recruitment Services
              </h4>
              <div className="w-full bg-gray-800 rounded-full">
                <div
                  className="h-3 bg-blue-600 rounded-full"
                  style={{ width: "10%" }}
                ></div>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="mb-2 text-xl font-semibold text-gray-300">
                Reliable Solutions
              </h4>
              <div className="w-full bg-gray-800 rounded-full">
                <div
                  className="h-3 bg-blue-600 rounded-full"
                  style={{ width: "20%" }}
                ></div>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="mb-2 text-xl font-semibold text-gray-300">
                Efficient Processes
              </h4>
              <div className="w-full bg-gray-800 rounded-full">
                <div
                  className="h-3 bg-blue-600 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="mb-2 text-xl font-semibold text-gray-300">
                Outstanding Support
              </h4>
              <div className="w-full bg-gray-800 rounded-full">
                <div
                  className="h-3 bg-blue-600 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row w-full p-8 bg-gray-50">
        {/* Vision Section */}
        <div className="flex-1 mb-8 md:mb-0 md:pr-8">
          <h1 className="mb-4 text-2xl md:text-3xl font-bold text-gray-800">
            Our Vision
          </h1>
          <p className="text-base md:text-lg text-gray-600">
            Our mission is to revolutionize the staffing industry through
            innovative solutions, creating a world where every organization can
            seamlessly find and manage the talent they need to thrive.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col items-center md:items-start flex-1">
          <h1 className="mb-4 text-2xl md:text-3xl font-bold text-gray-800">
            Our Mission
          </h1>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {Array(5)
              .fill()
              .map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center md:items-start w-36"
                >
                  <img
                    src={starImage2}
                    alt="Mission Icon"
                    className="object-cover w-16 h-16 md:w-20 md:h-20 mb-4 border border-gray-300 rounded-full shadow-lg"
                  />
                  <h3 className="text-lg md:text-xl font-semibold text-gray-700 text-center md:text-left">
                    Meeting all your staffing requirements
                  </h3>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
