import Image from 'next/image';
import React from 'react';
import Button from '../common/Button';
// import Loading from './../../app/loading';
import { homeGalleryImage } from '../Constant/constant';

export default function Gallery() {
  return (
    <div className="relative flex h-screen snap-start flex-col justify-center my-auto gap-10 bg-neutral-50/95 py-5">
      <div className="lg:mb-25 flex flex-col items-center gap-3">
        <div className="text-center font-gilda text-base font-normal tracking-[5.6px] text-lime-400  md:w-[413px]   md:text-3xl md:tracking-[11.20px]">
          LANDA ACADEMY 
        </div>
        <div className="-mt-[4px] text-center font-gilda text-4xl font-normal tracking-[1.6px] text-black md:text-[64px] md:leading-[50px] md:tracking-[3.20px]">
          Our Gallery
        </div>
      </div>
      <div className="m mx-8  mb-[184px] grid grid-cols-2 justify-items-center gap-2 md:mx-32 md:grid-cols-3 lg:mb-[-22px]">
        {homeGalleryImage.map((image, index) => (
          <Image
            key={index}
            loading="lazy"
            width={image.width}
            height={200}
            alt="Gallery Photo"
            quality={100}
            className="h-[155px] w-[173px] object-cover md:h-[200px] md:w-[389px]  "
            src={image.src}
          />
        ))}
      </div>
      <div className="mx-auto ">
        <Button size="visit" bgColor="Yellow" text="See More" goto="/gallery" />
      </div>
    </div>
  );
}
