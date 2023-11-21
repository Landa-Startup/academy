import React from "react";
import ContactUsForm from "@/components/common/form/ContactUsForm";
import ContactUsDescription from "@/components/common/ContactUsDescription";
import Banner from "@/components/common/Banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Landa Academy | Contact",
  description:
    "Contact Landa Academy to get in touch with our dedicated team. Whether you have questions, inquiries, or partnership opportunities, we are here to assist you. Reach out to us today.",
};

export default function ContactUsPage() {
  // Renamed the component for better naming
  return (
    <div>
      {/* Banner Component */}
      <Banner
        image="/static/images/Academy/Contact/banner.jpg"
        title="Contact Us"
      />

      {/* Main Content Grid */}
      <div className="container mx-auto grid grid-cols-1 gap-6 bg-[#FAFAFA] px-5 py-28 text-black md:grid-cols-2 lg:px-28">
        {/* ContactUsDescription Component */}
        <ContactUsDescription />

        {/* ContactUsForm Component */}
        <ContactUsForm />
      </div>
    </div>
  );
}
