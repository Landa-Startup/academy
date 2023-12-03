import React from 'react';
import RoadmapContainer from '@/components/Home/Roadmap/RoadmapContainer';
// import PromoteCourse from '@/components/academy/PromoteCourse';
import Gallery from '@/components/Home/HomeGallery';
import ContactUs from '@/components/Home/ContactUs';
import { Metadata } from 'next';
import Hero from '@/components/Home/Hero';
// import Video from '@/components/academy/Video';
import Footer from '@/components/layout/Footer';
import SliderMenu from '@/components/Home/HomeSliderMenu';

export const metadata: Metadata = {
  title: 'Landa Academy',
  description: ''
};

export default function page() {
  return (
    // Main page container with full height, smooth scrolling and specific background color
    <div className="h-screen snap-y snap-mandatory overflow-auto scroll-smooth bg-[#F1F8EC]">
      {/* Hero Section - Displays the main title and subtitle of the page */}
      <Hero
        title="Landa Business Academy"
        subTitle="Landa Academy was founded with the mission of fostering the potential of individuals, especially young minds. We believe that investing in adolescents guarantees a bright future and a better tomorrow."
      />

      {/* Roadmap Section - Displays the roadmap or timeline */}
      <RoadmapContainer />

      {/* Slider Menu - Displays a horizontal scrolling menu */}
      <SliderMenu />

      {/* Gallery - Displays a collection of images or items */}
      <Gallery />

      {/* Contact Us - Section for users to contact or reach out */}
      <ContactUs />

      {/* Footer - Displays the footer of the page */}
      <Footer />
    </div>
  );
}
