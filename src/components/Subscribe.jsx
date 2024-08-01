import React from "react";
import CustomInputField from "./CustomInputFeild";
import CustomButton from "./CustomButton";

const Subscribe = () => {
  return (
    <>
      <section className="px-6 py-16 text-white">
        <div className="container mx-auto text-center">
          <h1 className="mb-4 text-3xl font-bold text-black md:text-4xl">
            Unmatched Staffing Expertise, Exceptional Results
          </h1>
          <p className="mb-8 text-lg text-black">
            Stay updated with our latest news and insights by subscribing to our newsletter.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <CustomInputField placeholder="Email" className="w-full md:w-1/3" />
            <CustomButton text="Subscribe" />
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="container grid grid-cols-1 gap-12 mx-auto md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="mb-4 text-2xl font-bold">GenzoAlpha Consulting Group</h2>
            <h4 className="text-xl font-semibold">Our Team</h4>
            <h4 className="text-xl font-semibold">Our Process</h4>
            <h4 className="text-xl font-semibold">Pricing</h4>
          </div>

          <div className="space-y-6">
            <h1 className="mb-4 text-2xl font-bold">Operational Work Hours</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-semibold">Mon-Wed</h3>
                <h3 className="font-semibold">Thu-Fri</h3>
                <h3 className="font-semibold">Sat-Sun</h3>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">9am-10pm</h3>
                <h3 className="font-semibold">2pm-4pm</h3>
                <h3 className="font-semibold">4pm-1am</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
