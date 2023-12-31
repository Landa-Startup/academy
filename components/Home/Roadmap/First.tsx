import Image from 'next/image';
import React from 'react';
import ScrollButton from './ScrollButton';

export default function Second() {
  return (
    <div
      className="relative flex h-screen snap-start flex-col bg-[#FFFBE6]"
      id="Roadmap-1"
    >
      <div className="z-10 flex flex-col justify-evenly px-10 pb-10 pt-16 md:flex-row-reverse">
        <Image
          loading="lazy"
          alt="Landa academy"
          src={'static/images/Academy/Roadmap/Seminar-amico (1) 1.svg'}
          width={500}
          height={500}
        />
        <div className="flex flex-col justify-evenly">
          <div className="mt-8 font-barlow text-2xl leading-snug tracking-wider text-gray-600  md:w-[500px] md:text-4xl">
            Registration and Participation in Optional Courses
          </div>
          <div className="inline-flex items-start justify-start gap-2">
            <div className="mt-[23px] h-5 w-5 rounded-full bg-yellow-400" />
            <div className="mt-4 w-[349px] font-barlow text-base font-normal leading-[32px] text-gray-600  md:w-[500px] md:text-2xl">
              Embark on your adventurous journey at Landa Academy by
              participating in our tailored crash courses designed by mentors
              from the Landa Holding.
            </div>
          </div>
          <div className="inline-flex items-start justify-start gap-2 ">
            <div className="mt-[2px] h-5 w-5 rounded-full bg-yellow-400 lg:mt-2.5" />
            <div className="font-barlow text-base font-normal text-gray-600 md:w-[500px] md:text-2xl  ">
              Obtain a valid certificate of achievement
            </div>
          </div>
        </div>
      </div>
      <ScrollButton scrollTo="Roadmap-2" addedClass="mx-auto md:ml-28 lg:ml-[134px] mb-[100px]  md:ml-28 mt-[21px] md:mt-0 " />
      <svg
        className="absolute bottom-0 right-[345px] hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        width="328"
        height="493"
        viewBox="0 0 328 493"
        fill="none"
      >
        <path
          d="M243.963 2C245.618 16.791 251.817 31.6754 256.156 46.2502C269.026 89.4737 280.453 132.582 294.949 175.506C305.228 205.942 313 243 323.5 274.5C333.166 336.302 309.908 387.86 276.5 422C208 492 10.5 494 1.49999 542.5"
          stroke="#3D5656"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />
      </svg>
    </div>
  );
}
