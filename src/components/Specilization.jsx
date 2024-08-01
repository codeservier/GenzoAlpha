import React from "react";
import CustomButton from "./CustomButton";

const Specilization = () => {
  return (
    <>
      <section className="flex items-center justify-between bg-gray-100 pl-28 pr-28">
        <div className="max-w-2xl">
          <h3 className="mb-2 text-xl font-semibold text-gray-700">
            Specialization
          </h3>
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Domestic Staffing Expert
          </h1>

          <div className="mt-4">
            <h1 className="mb-4 text-2xl font-semibold text-gray-800">
              Our Values:
            </h1>
            <div className="flex space-y-4">
              <div className="p-4 m-4 bg-white border border-gray-300 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-800">
                  Forward Thinking Strategy
                </h4>
                <p className="text-gray-600">
                  We provide forward-thinking strategies to ensure success in
                  domestic staffing.
                </p>
              </div>
              <div className="p-4 bg-white border border-gray-300 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold text-gray-800">
                  Excellence and Transformation
                </h4>
                <p className="text-gray-600">
                  We deliver excellence and drive transformation in all aspects
                  of our services.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
            alt="Profile"
            className="object-cover w-full mb-4 border border-gray-300 rounded-full shadow-lg h-96"
          />
        </div>
      </section>
      <section className="grid grid-cols-1 gap-8 p-8 bg-gray-100 md:grid-cols-2 lg:grid-cols-3">
        {/* <!-- First Column: Three Items --> */}
        <div className="grid grid-cols-1 gap-8">
          <div className="flex items-center p-4 bg-white border border-gray-300 rounded-lg shadow-md">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              alt="Profile"
              className="object-cover w-20 h-20 border border-gray-300 rounded-full shadow-lg"
            />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">3455</h3>
              <h2 className="text-lg font-medium text-gray-600">
                Account Boosted
              </h2>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white border border-gray-300 rounded-lg shadow-md">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              alt="Profile"
              className="object-cover w-20 h-20 border border-gray-300 rounded-full shadow-lg"
            />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">3455</h3>
              <h2 className="text-lg font-medium text-gray-600">
                Account Boosted
              </h2>
            </div>
          </div>

          <div className="flex items-center p-4 bg-white border border-gray-300 rounded-lg shadow-md">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              alt="Profile"
              className="object-cover w-20 h-20 border border-gray-300 rounded-full shadow-lg"
            />
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">3455</h3>
              <h2 className="text-lg font-medium text-gray-600">
                Account Boosted
              </h2>
            </div>
          </div>
        </div>

        {/* <!-- Second Column: Centered Text and Button --> */}
        <div className="flex flex-col items-center justify-center p-4 text-center bg-white border border-gray-300 rounded-lg shadow-md">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            Providing Unstoppable Solutions for Your Domestic Needs
          </h1>
          <CustomButton />
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="flex items-center p-4 bg-white border border-gray-300 rounded-lg shadow-md">
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">3455</h3>
              <h2 className="text-lg font-medium text-gray-600">
                Account Boosted
              </h2>
            </div>
            <div className="flex-shrink-0 ml-auto">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                alt="Profile"
                className="object-cover w-20 h-20 border border-gray-300 rounded-full shadow-lg"
              />
            </div>
          </div>

          <div className="flex items-center p-4 bg-white border border-gray-300 rounded-lg shadow-md">
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">3455</h3>
              <h2 className="text-lg font-medium text-gray-600">
                Account Boosted
              </h2>
            </div>
            <div className="flex-shrink-0 ml-auto">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                alt="Profile"
                className="object-cover w-20 h-20 border border-gray-300 rounded-full shadow-lg"
              />
            </div>
          </div>

          <div className="flex items-center p-4 bg-white border border-gray-300 rounded-lg shadow-md">
            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-800">3455</h3>
              <h2 className="text-lg font-medium text-gray-600">
                Account Boosted
              </h2>
            </div>
            <div className="flex-shrink-0 ml-auto">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
                alt="Profile"
                className="object-cover w-20 h-20 border border-gray-300 rounded-full shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specilization;
