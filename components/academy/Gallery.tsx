import Image from 'next/image';
import React from 'react';
import Button from '../common/Button';

export default function Gallery() {
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
          <Image
            loading="lazy"
            width={389}
            height={243}
            quality={100}
            alt="Gallery Photo"
            className="h-[155px] w-[173px] object-cover md:h-[243px] md:w-[389px]"
            src="/static/images/Academy/gallery/1.png"
          />
          <Image
            loading="lazy"
            width={291}
            height={243}
            quality={100}
            alt="Gallery Photo"
            className="h-[155px] w-[173px] object-cover md:h-[243px] md:w-[389px]"
            src="/static/images/Academy/gallery/2.png"
          />
          <Image
            loading="lazy"
            width={493}
            height={243}
            quality={100}
            alt="Gallery Photo"
            className="h-[155px] w-[173px] object-cover md:h-[243px] md:w-[389px]"
            src="/static/images/Academy/gallery/3.png"
          />
          <Image
            loading="lazy"
            width={489}
            height={243}
            quality={100}
            alt="Gallery Photo"
            className="h-[155px] w-[173px] object-cover md:h-[243px] md:w-[389px]"
            src="/static/images/Academy/gallery/4.png"
          />
          <Image
            loading="lazy"
            width={389}
            height={243}
            quality={100}
            alt="Gallery Photo"
            className="h-[155px] w-[173px] md:h-[243px] md:w-[389px]"
            src="/static/images/Academy/gallery/5.png"
          />
          <Image
            loading="lazy"
            width={287}
            height={243}
            quality={100}
            alt="Gallery Photo"
            className="h-[155px] w-[173px] object-cover md:h-[243px] md:w-[389px]"
            src="/static/images/Academy/gallery/6.png"
          />
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
