import React from "react";

const starImage2 =
  "https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="flex flex-col w-full h-screen p-8 bg-black md:flex-row">
        {/* Image Section */}
        <div className="flex items-center justify-center w-full mb-6 md:w-1/2 md:mb-0">
          <img
            src={starImage2}
            alt="Star Rating"
            className="object-cover border border-gray-300 rounded-full shadow-lg w-80 h-80"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <div className="mb-8 text-center md:text-left">
            <span className="block mb-1 text-sm font-semibold tracking-wider text-gray-500 uppercase">
              About Us
            </span>
            <h1 className="text-4xl font-extrabold text-white ">
              Transforming the Staffing Industry with Innovative Solutions
            </h1>
          </div>

          <div className="max-w-md mx-auto md:mx-0">
            <div className="mb-6">
              <h4 className="mb-2 text-xl font-semibold text-gray-700">
                Expert Recruitment Services
              </h4>
              <div>
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div
                    className="h-3 bg-blue-600 rounded-full"
                    style={{ width: "10%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="mb-2 text-xl font-semibold text-gray-700">
                Expert Recruitment Services
              </h4>
              <div>
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div
                    className="h-3 bg-blue-600 rounded-full"
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="mb-2 text-xl font-semibold text-gray-700">
                Expert Recruitment Services
              </h4>
              <div>
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div
                    className="h-3 bg-blue-600 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="mb-2 text-xl font-semibold text-gray-700">
                Expert Recruitment Services
              </h4>
              <div>
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div
                    className="h-3 bg-blue-600 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full p-8 md:flex-row bg-gray-50">
        {/* Vision Section */}
        <div className="flex-1 mb-8 md:mb-0 md:pr-8">
          <h1 className="mb-4 text-3xl font-bold text-gray-800">Our Vision</h1>
          <p className="text-lg text-gray-600">
            Hello, this is our mission to transform the world like a
            championship. Thank you.
            Hello, this is our mission to transform the world like a
            championship. Thank you.
            Hello, this is our mission to transform the world like a
            championship. Thank you.
            Hello, this is our mission to transform the world like a
            championship. Thank you.
          </p>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col items-center flex-1 md:items-start">
          <h1 className="mb-4 text-3xl font-bold text-gray-800">Our Mission</h1>
          <div className="flex">
            <div className="flex flex-col items-center md:items-start w-36">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                alt="Star Rating"
                className="object-cover w-20 h-20 mb-4 border border-gray-300 rounded-full shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                Meeting all your staffing requirements
              </h3>
            </div>
            <div className="flex flex-col items-center md:items-start w-36">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                alt="Star Rating"
                className="object-cover w-20 h-20 mb-4 border border-gray-300 rounded-full shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                Meeting all your staffing requirements
              </h3>
            </div>
            <div className="flex flex-col items-center md:items-start w-36">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                alt="Star Rating"
                className="object-cover w-20 h-20 mb-4 border border-gray-300 rounded-full shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                Meeting all your staffing requirements
              </h3>
            </div>
            <div className="flex flex-col items-center md:items-start w-36">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                alt="Star Rating"
                className="object-cover w-20 h-20 mb-4 border border-gray-300 rounded-full shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                Meeting all your staffing requirements
              </h3>
            </div>
            <div className="flex flex-col items-center md:items-start w-36">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                alt="Star Rating"
                className="object-cover w-20 h-20 mb-4 border border-gray-300 rounded-full shadow-lg"
              />
              <h3 className="text-xl font-semibold text-gray-700">
                Meeting all your staffing requirements
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
