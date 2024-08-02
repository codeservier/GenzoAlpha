import React, { useState, useEffect } from 'react';

const TestimonialsCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 5000; // 5 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % testimonials.length;
      setCurrentIndex(nextIndex);
    }, slideInterval);

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
    <div className="carousel-container relative mx-auto px-4 md:px-8 py-8 max-w-sm">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">Client Testimonials</h2>

      <div className="overflow-hidden">
        <div className="carousel-inner flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-container flex-shrink-0 px-2 w-full">
              <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                <p className="text-base md:text-lg text-gray-800 mb-3 text-center">{testimonial.quote}</p>
                <p className="text-gray-600 font-semibold">{testimonial.author}, {testimonial.title}</p>
                <p className="text-gray-600 text-center">{testimonial.description}</p>
                <div className="mt-3 flex items-center justify-center">
                  <img src={testimonial.image} alt={testimonial.author} className="rounded-full w-12 h-12 object-cover border-2 border-gray-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Prev/Next Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          &#10095;
        </button>
      </div>

      {/* Scroll Indicators */}
      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`mx-1 w-2 h-2 rounded-full ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-300'} focus:outline-none`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Inline CSS */}
      <style>{`
        .carousel-container {
          position: relative;
          overflow: hidden;
        }

        .carousel-inner {
          display: flex;
          transition: transform 0.5s ease-in-out;
        }

        .card-container {
          flex: 0 0 100%;
        }

        button {
          background: none;
          border: none;
          cursor: pointer;
        }

        button:focus {
          outline: none;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsCarousel;
