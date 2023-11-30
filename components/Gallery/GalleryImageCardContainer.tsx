'use client';
import GalleryImageCard from './GalleryImageCard';
import {galleryImages} from '../Constant/constant'

export default function GalleryImageCardContainer() {

  return (
    <div className="grid grid-cols-2 justify-items-center gap-y-5 pb-7 md:mx-32 md:gap-24">
      {galleryImages.map((image, index) => (
        <GalleryImageCard key={index} src={image.src} title={image.title} />
      ))}
    </div>
  );
}
