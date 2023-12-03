import Image from 'next/image';
import React from 'react';
import ScrollButton from './ScrollButton';

export default function Fourth() {
  return (
    <div
      className="relative flex h-screen snap-start flex-col bg-[#3d5656] text-white"
      id="Roadmap-3"
    >
      <div className="pyb-8 z-10 flex flex-col justify-evenly space-y-5 px-10 pt-16 md:flex-row-reverse">
        <Image
          loading="lazy"
          alt="Landa academy"
          src={'static/images/Academy/Roadmap/Office work-amico 1.svg'}
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-evenly">
          <div className="text-2xl font-normal leading-snug tracking-wider md:w-[480px] md:text-4xl">
            Employment opportunities
          </div>
          <div className="inline-flex items-start justify-start gap-2">
            <div className="mt-7 h-4 w-6  rounded-full bg-[#80C555] md:h-5 md:w-5 " />
            <div className="mt-5 w-[454px] font-barlow font-normal leading-7 md:text-2xl">
              After completing the intensive 6-month academy program, you will
              have the opportunity to officially work alongside experienced
              mentors on startups and international projects to gain valuable
              work experience.
            </div>
          </div>
        </div>
      </div>
      <ScrollButton
        scrollTo="Roadmap-4"
        color="white"
        addedClass="mx-auto md:ml-28 mt-32 md:mt-0  lg:ml-[177px]"
      />
      <svg
        className="absolute left-[550px] top-0 hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        width="358"
        height="492"
        viewBox="0 0 358 492"
        fill="none"
      >
        <path
          d="M355.602 490.491C355.602 444.422 348.184 397.858 344.122 352.017C342.37 332.248 340.75 316.251 335.512 297.919C333.338 290.308 328.606 283.614 327.189 275.82C317.603 223.097 287.294 183.693 243.387 153.561C228.756 143.52 214.108 132.78 199.765 122.279C177.681 106.11 151.156 98.7284 127.155 86.1176C82.0459 62.4161 35.7405 37.8231 1.61621 1.5"
          stroke="#F1F8EC"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />
      </svg>
      <svg
        className="absolute bottom-0 left-[672px] hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        width="237"
        height="346"
        viewBox="0 0 237 346"
        fill="none"
      >
        <path
          d="M234.934 1.82227C233.014 22.9377 203.414 37.9531 195.999 57.5C183.537 90.3543 171.609 104.382 175.999 139.5C180.5 175.5 177.98 211.673 139.5 224.5C130.5 227.5 143 228.683 63 228.683C-1.23571 228.683 -12.5016 315 18.9999 350.5"
          stroke="#F1F8EC"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />
      </svg>
    </div>
  );
}
