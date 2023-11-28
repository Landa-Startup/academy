import React from 'react';
import RoadmapContainer from '@/components/academy/Roadmap/RoadmapContainer';
// import PromoteCourse from '@/components/academy/PromoteCourse';
import Gallery from '@/components/academy/Gallery';
import ContactUs from '@/components/academy/ContactUs';
import { Metadata } from 'next';
import Hero from '@/components/academy/Hero';
// import Video from '@/components/academy/Video';
import Footer from '@/components/layout/Footer';
import SliderMenu from '@/components/academy/SliderMenu';

export const metadata: Metadata = {
  title: 'Landa Academy',
  description: ''
};

export default function page() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-auto scroll-smooth bg-[#F1F8EC]">
      {/* Hero Section */}
      <Hero
        title="Landa Business Academy"
        subTitle="Landa Academy was founded with the mission of fostering the potential of individuals, especially young minds. We believe that investing in adolescents guarantees a bright future and a better tomorrow."
      />

      {/* Roadmap Section */}
      <RoadmapContainer />

      {/* <ScrollMenu /> */}
      <SliderMenu />

      <Gallery />

      <ContactUs />
      <Footer />
    </div>
  );
}
