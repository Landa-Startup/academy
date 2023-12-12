import Image from 'next/image';
import React from 'react';

export default function CertificateNew() {
  return (
    <div className="relative h-[600px] w-full border-[6px] border-[#80C555] px-4 text-xl md:flex md:items-center md:justify-around md:px-0">
      <div className="flex h-full flex-col md:h-[30rem] md:justify-between">
        <div className="my-10 flex h-[18rem] flex-col justify-between md:w-[30rem]">
          <p className="text-lg">Aug 30.2023</p>
          <p className="font-gilda text-2xl font-semibold md:text-3xl">
            Ali Khavari
          </p>
          <p className="text-xl md:text-2xl">has successfully completed </p>
          <p className="font-gilda text-3xl font-semibold md:text-2xl">
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
        <div className="absolute right-9 top-0 flex h-24 flex-col items-center justify-end bg-[#CCE8BB] pb-4 md:right-32 md:h-48 md:w-44">
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
