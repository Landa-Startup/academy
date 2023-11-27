import Image from 'next/image';
import React from 'react';
import Button from '../common/Button';
// import Loading from './../../app/loading';

export default function Gallery() {
  const imagesGallery = [
    {
      src: '/static/images/Academy/gallery/1.png',
      width: 389
    },
    {
      src: '/static/images/Academy/gallery/2.png',
      width: 291
    },
    {
      src: '/static/images/Academy/gallery/3.png',
      width: 493
    },
    {
      src: '/static/images/Academy/gallery/4.png',
      width: 489
    },
    {
      src: '/static/images/Academy/gallery/5.png',
      width: 389
    },
    {
      src: '/static/images/Academy/gallery/6.png',
      width: 287
    }
  ];
  return (
    <div className="relative h-screen snap-start bg-neutral-50/95 py-5">
      <div className="flex flex-col">
        <div className="text-center text-base font-normal leading-[50px] tracking-[5.6px] text-lime-400 md:text-[32px] md:tracking-[11.20px]">
          LANDA ACADEMY
        </div>
        <div className="text-center text-3xl font-normal leading-[50px] tracking-[1.6px] text-black md:text-[64px] md:tracking-[3.20px]">
          Our Gallery
        </div>
        <div className="mx-8 mb-1 mt-6 grid grid-cols-2 justify-items-center gap-2 md:mx-32 md:grid-cols-3">
          {imagesGallery.map((image, index) => (
            <Image
              key={index}
              loading="lazy"
              width={image.width}
              height={243}
              alt="Gallery Photo"
              quality={100}
              className="h-[155px] w-[173px] object-cover md:h-[243px] md:w-[389px]"
              src={image.src}
            />
          ))}
        </div>
        <div className="mx-auto">
          <Button
            size="visit"
            bgColor="Yellow"
            text="See More"
            goto="/gallery"
          />
        </div>
      </div>
    </div>
  );
}
