import React from 'react';
import CustomButton from './CustomButton';

const LetsGetstarted = () => {
  return (
    <section className="px-6 py-16 text-white bg-black">
      <div className="container mx-auto text-center">
        <h4 className="mb-4 text-sm font-semibold uppercase">
          Let's Get Started
        </h4>
        <h1 className="mb-6 text-4xl font-bold">
          Transform Your Staffing Needs Today
        </h1>
        <p className="mb-8 text-lg">
          Let us provide innovative staffing solutions that prioritize excellence, transformation, and forward-thinking strategies.
        </p>
        <CustomButton text="Free Consultation" />
      </div>
    </section>
  );
};

export default LetsGetstarted;
