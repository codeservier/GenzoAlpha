import React, { useState, useEffect } from 'react';

const TestimonialsCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide interval
  const slideInterval = 5000; // 5 seconds

  useEffect(() => {
    // Auto slide effect
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % testimonials.length;
      setCurrentIndex(nextIndex);
    }, slideInterval);

    // Clean up interval on component unmount or when testimonials change
    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length]);

  const nextSlide = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="relative">
      <div className=" mx-auto ">
        <h2 className="text-4xl font-bold text-center text-gray-800">Client Testimonials</h2>
        <div className="relative overflow-hidden rounded-lg shadow-xl">
         
          <div className="relative flex transition-transform duration-300 ease-in-out transform" style={{ width: `${testimonials.length * 100}%`, transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`w-full  px-4`}>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <p className="text-lg text-gray-800 mb-4">{testimonial.quote}</p>
                  <p className="text-gray-600">{testimonial.author}, {testimonial.title}</p>
                  <p className="text-gray-600">{testimonial.description}</p>
                  <div className="mt-4 flex items-center justify-center">
                    <img src={testimonial.image} alt={testimonial.author} className="rounded-full w-16 h-16 object-cover" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
