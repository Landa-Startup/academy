import Image from 'next/image';
import React from 'react';
import Button from '../common/Button';
// import Loading from './../../app/loading';
import { homeGalleryImage } from '../Constant/constant';

export default function Gallery() {
  return (
    // h-screen snap-start bg-[#3D5656] py-10
    <div className="relative  h-screen snap-start flex-col justify-center items-center my-auto gap-10 bg-neutral-50/95 py-16">
      <div className="lg:mb-25 flex flex-col items-center gap-3">
        <div className="text-center font-gilda text-base font-normal tracking-[5.6px] text-lime-400  md:w-[413px] md:text-3xl md:tracking-[11.20px]">
          LANDA ACADEMY 
        </div>
        <div className="-mt-[4px] text-center font-gilda text-4xl font-normal tracking-[1.6px] text-black md:text-[64px] md:leading-[50px] md:tracking-[3.20px]">
          Our Gallery
        </div>
      </div>
      <div className='flex flex-col justify-between'>
      <div className="mx-8 grid grid-cols-2 justify-items-center gap-2 md:mx-32 md:grid-cols-3 lg:mb-[-22px]">
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
      <div className="flex items-center justify-center mt-5">
        <Button size="visit" bgColor="Yellow" text="See More" goto="/gallery" />
      </div>
      </div>
    </div>
  );
}
