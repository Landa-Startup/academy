import React from 'react';

export default function Banner({
  image,
  title
}: {
  image: string;
  title: string;
}) {
  return (
    <div className="relative">
      {/* Background Image with Blur and Overlay */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
        className="absolute inset-0 h-[250px] blur-[2px] lg:h-[512px]"
      ></div>

      <div
        className="relative flex h-[250px] items-center justify-center lg:h-[512px]"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} // Adding overlay with transparency
      >
        {/* Content Overlay */}
        <div className="relative flex h-[250px] items-stretch justify-center lg:h-[512px] lg:justify-start">
          <div className="flex flex-col items-center justify-center text-center md:m-auto lg:m-auto">
            {/* Text Content */}
            <p className="font-condensed text-base font-normal tracking-[5.60px] text-neutral-50">
              LANDA HOLDING
            </p>
            <p className="font-gilda text-[32px] font-normal text-neutral-50 md:text-[50px] lg:text-[74px] xl:text-[84px]">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
