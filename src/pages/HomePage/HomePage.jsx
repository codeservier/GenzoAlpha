import React from 'react';
import HeroSection from '../../components/HeroSection';
import TestimonialsCarousel from '../../components/TestimonialsCarousel';
import { testimonials } from './TestimonialsData';
import AboutUs from '../../components/AboutUs';
import Specilization from '../../components/Specilization';
import OurServices from '../../components/OurServices';
import WhyChooseUs from '../../components/WhyChooseUs';
import FAQ from '../../components/FAQ';
import LetsGetstarted from '../../components/LetsGetstarted';
import Subscribe from '../../components/Subscribe';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection/>
      <AboutUs />
      <Specilization/> 
      <OurServices/>
      <WhyChooseUs/>
    
      <section className="py-12 bg-gray-100 services-section">
      </section>
      <section className="py-12 bg-white testimonials-section">
        <div className="container px-4 mx-auto">
         
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>
      <FAQ/>
      <LetsGetstarted/>
      <Subscribe/>
    </div>
  );
};

export default HomePage;
