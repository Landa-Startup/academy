import Image from 'next/image';
import React from 'react';
import PlayButton from './PlayButton';

export default function Video() {
  return (
    <div className="relative flex h-[475px] items-start justify-center">
      <Image
        loading="lazy"
        className="object-cover blur-md"
        src={'/static/images/Academy/e8789aa2b833892200e6100e9998211b.jpg'}
        quality={100}
        alt="Landa Video"
        layout="fill"
      />
      {/* <Image loading="lazy"
        className="absolute w-[377px] h-[453px] bottom-0 -right-10"
        src={'/static/images/Academy/Vector 67.png'}
        quality={100}
        alt="Landa Video"
        width={377}
        height={453}
      /> */}
      {/* <Image loading="lazy"
        className="absolute right-0 w-[480px] h-[576px] object-contain"
        src={'/static/images/Academy/Vector 67 (2).png'}
        alt="Landa Video"
        layout="fill"
      /> */}
      <div className="relative my-auto flex flex-col items-center">
        <div className="whitespace-nowrap text-center font-condensed text-[32px] font-normal leading-[50px] tracking-[11.20px] text-yellow-300">
          LANDA ACADEMY
        </div>
        <div className="mb-14 text-center font-gilda text-[48px] font-normal leading-[normal] tracking-[2.40px] text-white">
          Promotional Video
        </div>
        <PlayButton />
      </div>
    </div>
  );
}
