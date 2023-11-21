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
        className="group relative h-[100px] w-[170px] cursor-pointer md:h-[416px] md:w-[555px]"
        onClick={() => openModal(src)}
      >
        <Image
          className="rounded-sm object-cover"
          src={src}
          alt="Landa Academy Image"
          layout="fill"
        />
        <div className="fade-in absolute bottom-7 z-10 hidden w-full flex-col border-t-2 border-white pl-24 pt-2 text-white group-hover:flex">
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
