"use client";
import Image from "next/image";
import React, { useState } from "react";
import PhotoModal from "../PhotoModal";

export default function GalleryImageCard({ src }: { src: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (imageUrl: any) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="relative w-[170px] md:w-[555px] h-[100px] md:h-[416px] group cursor-pointer"
        onClick={() => openModal(src)}
      >
        <Image
          className="object-cover rounded-sm"
          src={src}
          alt="Landa Academy Image"
          layout="fill"
        />
        <div className="flex-col text-white border-t-2 border-white absolute bottom-7 pl-24 pt-2 z-10 w-full hidden group-hover:flex fade-in">
          <span className="font-barlow text-xl font-medium">Desert Tour</span>
          <span className="font-barlow text-sm font-medium">20 Jan 2023</span>
        </div>
      </div>

      <PhotoModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImage}
        closeModal={closeModal}
      />
    </>
  );
}
