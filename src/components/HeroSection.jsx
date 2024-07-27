import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero bg-gradient-to-r from-blue-500 to-blue-700 text-white">
      <div className="hero-content max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to GenzoAlpha Consulting Group</h1>
        <p className="text-lg mb-4">"Where Transformation Inspires Excellent Results"</p>
        <p className="text-lg mb-8">To revolutionize the global workforce by seamlessly connecting talent and opportunity, fostering a culture of innovation, inclusivity, and unparalleled growth for businesses and professionals alike.</p>
        <button className="bg-white text-blue-500 hover:bg-blue-100 text-lg font-semibold py-2 px-4 rounded-full shadow-md transition duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
