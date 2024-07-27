import React from 'react';
import HeroSection from '../../components/HeroSection';
import TestimonialsCarousel from '../../components/TestimonialsCarousel';
import { testimonials } from './TestimonialsData';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <section className="services-section bg-gray-100 py-12">
        {/* Render your services here */}
      </section>
      <section className="testimonials-section bg-white py-12">
        <div className="container mx-auto px-4">
         
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
