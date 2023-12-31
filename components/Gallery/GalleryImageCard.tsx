'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import PhotoModal from './PhotoModal';

export default function GalleryImageCard({
  src,
  title
}: {
  src: string;
  title: string;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

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
          <span className="font-barlow text-xl font-medium">{title}</span>
          <span className="font-barlow text-sm font-medium"></span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.2)] to-transparent opacity-0 transition-all duration-500 hover:opacity-100"></div>
      </div>

      <PhotoModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imageUrl={selectedImage}
        closeModal={closeModal}
      />
      <div className="fade-in absolute bottom-7 z-10 hidden w-full flex-col border-t-2 border-white pl-24 pt-2 text-white group-hover:flex">
        <span className="font-barlow text-xl font-medium">{title}</span>
        <span className="font-barlow text-sm font-medium"></span>
      </div>
    </>
  );
}