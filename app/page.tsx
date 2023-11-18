import React from "react";
import RoadmapContainer from "@/components/academy/Roadmap/RoadmapContainer";
// import PromoteCourse from '@/components/academy/PromoteCourse';
import Gallery from "@/components/academy/Gallery";
import ContactUs from "@/components/academy/ContactUs";
import ScrollMenu from "@/components/academy/ScrollMenu";
import { Metadata } from "next";
import Hero from "@/components/academy/Hero";
<<<<<<< HEAD
// import Video from "@/components/academy/Video";
=======
import Video from "@/components/academy/Video";
import Footer from "@/components/layout/Footer";
>>>>>>> cb9c9722207470bcb5a9f2e7e9ab3516ee9abc67

export const metadata: Metadata = {
  title: "Landa Academy",
  description: "",
};

export default function page() {
  return (
    <div className="bg-[#F1F8EC] scroll-smooth overflow-auto snap-y snap-mandatory h-screen">
      {/* Hero Section */}
      <Hero
        title="Landa Business Academy"
        subTitle="Landa Academy was founded with the mission of fostering the potential of individuals, especially young minds. We believe that investing in adolescents guarantees a bright future and a better tomorrow."

      />

      {/* Roadmap Section */}
      <RoadmapContainer />

      <ScrollMenu />

      <Gallery />

      <ContactUs />
      <Footer/>
    </div>
  );
}
