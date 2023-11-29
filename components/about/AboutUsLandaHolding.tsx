import React from 'react';
import Image from 'next/image';

export default function AboutUsLandaHolding() {
  return (
    <div className="flex flex-row items-center justify-evenly bg-[#FAFAFA] pt-5 md:py-32 lg:flex lg:flex-row">
      <div className="space-y-2 p-3 text-black">
        <p className="text-center font-gilda text-3xl font-semibold">
          About Landa Holding
        </p>
        <p className="mb-20  ml-0  mt-4 text-justify font-barlow text-xl font-normal tracking-wide md:mx-10 md:mt-8 lg:w-[687px]">
          Landa Holding is distinctive and distinguished from others in the same
          market and what makes us unique is our extensive charitable activities
          and world-class transaction flow, which facilitate the process of
          private business development. Landa Holding aims to attract reliable
          investors from all over the world and recommend the best investment
          opportunities for startup businesses, and to establish the right
          environment and connections between the idea holders and providers of
          services for this matter.
        </p>
      </div>
      <Image
        className="brightness-95 contrast-[1.15] drop-shadow-md"
        loading="lazy"
        src="/static/images/About/team.jpg"
        width={661}
        height={404}
        quality={100}
        alt="Landa Team"
        objectFit="cover"
      />
    </div>
  );
}
