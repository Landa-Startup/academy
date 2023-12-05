import Image from 'next/image';
import React from 'react';

export default function CertificateNew() {
  return (
    <div className="px-4 md:px-0 relative md:flex h-[600px] w-full md:items-center md:justify-around border-[6px] border-[#80C555] text-xl">
      <div className="flex h-full md:h-[30rem] flex-col md:justify-between">
        <div className="flex h-[18rem] my-10 md:w-[30rem] flex-col justify-between">
          <p className="text-lg">Aug 30.2023</p>
          <p className="font-gilda text-2xl md:text-3xl font-semibold">
            Ali Khavari
          </p>
          <p className="text-xl md:text-2xl">has successfully completed </p>
          <p className="font-gilda md:text-2xl text-3xl font-semibold">
            SEO Course
          </p>
          <p className="text-xl md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            minus, corporis facilis omnis quaerat aliquam cum commodi
            perferendis.
          </p>
        </div>
        <div className="flex w-[10rem] flex-col items-center text-xs md:text-sm">
          <p className="border-b-2">RASOUL MORADIMEHR</p>
          <p>Managing Director</p>
        </div>
      </div>
      <div className="w-[50rem]">
        <div className="absolute right-9 md:right-32 top-0 flex h-24 md:h-48 md:w-44 flex-col items-center justify-end bg-[#CCE8BB] pb-4">
          <p className="text-sm md:text-3xl">CERTIFICATE</p>
          <p className="text-xs md:text-base">OF PARTICIPATION</p>
        </div>
        {/* logo */}
        <div>
          <Image
            loading="lazy"
            className="absolute bottom-0 right-0 md:right-3"
            src={`/static/images/Academy/Logo.svg`}
            alt="Landa"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
