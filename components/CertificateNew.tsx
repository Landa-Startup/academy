import Image from 'next/image';
import React from 'react';

export default function CertificateNew() {
  return (
    <div className="text-xl relative border-[6px] w-full h-[600px] border-[#80C555] flex items-center justify-around">
      <div className="flex justify-between flex-col h-[30rem]">
        <div className="w-[30rem] h-[18rem] flex flex-col justify-between">
          <p className="text-lg">Aug 30.2023</p>
          <p className="text-3xl font-semibold font-gilda">Ali Khavari</p>
          <p className="text-2xl">has successfully completed </p>
          <p className="text-3xl font-semibold font-gilda">SEO Course</p>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            minus, corporis facilis omnis quaerat aliquam cum commodi
            perferendis.
          </p>
        </div>
        <div className="w-[10rem] flex flex-col items-center text-sm">
          <p className="border-b-2">RASOUL MORADIMEHR</p>
          <p>Managing Director</p>
        </div>
      </div>
      <div className="w-[50rem]">
        <div className="w-44 h-48 flex items-center justify-end pb-4 flex-col bg-[#CCE8BB] absolute top-0 right-32">
          <p className="text-3xl">CERTIFICATE</p>
          <p className="text-base">OF PARTICIPATION</p>
        </div>
        {/* logo */}
        <div>
          <Image
            loading="lazy"
            className="absolute right-3 bottom-0"
            src={`/static/images/Academy/Logo.svg`}
            alt="Landa"
            width={344}
            height={467}
          />
        </div>
      </div>
    </div>
  );
}
