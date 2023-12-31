'use client';
import Image from 'next/image';
import React from 'react';
import ScrollButton from './ScrollButton';
import Button from '@/components/common/Button';

export default function Fifth() {
  return (
    <div
      className="relative flex h-screen snap-start flex-col items-center bg-[#FFFBE6] p-10"
      id="Roadmap-4"
      
    >
      <div className="self-start order-2 mt-20  font-barlow text-2xl font-normal leading-snug text-black md:absolute md:w-[420px] md:text-4xl">
        Work experience at the Canadian company
      </div>
      <Image
        loading="lazy"
        className="z-10 order-1 mt-3"
        alt="Landa academy"
        src={'static/images/Academy/Roadmap/Selecting team-cuate (1) 1.svg'}
        width={645}
        height={430}
      />
      <div className="order-3 inline-flex items-start justify-start">
        <div className="mb-4 ml-[-1.5rem] mr-[-8px] mt-[38px] h-5 w-5 shrink-0 rounded-full bg-yellow-400 md:mt-[7px]" />
        <div className="letter-spacing: 0.8px; m-[32px] ml-[13.5px] mr-[0] font-barlow  font-medium leading-7 text-black md:mt-0 md:w-[500px] md:text-2xl ">
          Following a year of active participation within Landa, you will
          receive a credible and verifiable
          <span className="mx-1 font-semibold ">Canadian work experience
          certificate from us.</span>
        </div>
      </div>
      <div className="order-4">
        <Button goto="/survey" size="not" text="Register" />
      </div>
      <ScrollButton scrollTo="Courses" addedClass="absolute bottom-3   " />
      <svg
        className="absolute -top-0 left-[684px] hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        width="47"
        height="178"
        viewBox="0 0 47 178"
        fill="none"
      >
        <path
          d="M1.5007 -4.50009C10.0788 10.4421 18.7399 36.2214 18.8044 49.7387C19.0199 94.863 1.61819 125.126 33.2157 140.199C54.8047 155.221 40.0143 158.95 42.8714 175.725"
          stroke="#FDD30A"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="6 6"
        />
      </svg>
    </div>
  );
}
