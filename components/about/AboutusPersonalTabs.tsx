import React from 'react';
import Link from 'next/link';
import IconLinkedin from '../icons/IconLinkedin';
import IconRoundedEmail from '../icons/IconRoundedEmail';
import IconRoundedInstagram from '../icons/IconInstagramRounded';
import IconWeb from '../icons/IconWeb';

export default function AboutusPersonalTabs({
  image,
  name,
  position,
  linkedIn,
  email,
  website,
  instagram,
}: {
  image: string;
  name: string;
  position: string;
  linkedIn: string;
  email: string;
  website: string;
  instagram: string;
}) {
  return (
    <div
      className="flex h-[300px] w-[300px] flex-col items-center rounded-sm border border-primary  md:ml-12 md:w-[270px] lg:mt-20"
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col self-start  p-2">
        <Link
          href={linkedIn}
          target="_blank"
          className="rounded-full bg-[#222] p-2 text-white opacity-75"
        >
          <IconLinkedin />
        </Link>
      </div>

      <div className=" self-start pb-2 pl-2">
        <a href={email}>
          <IconRoundedEmail />
        </a>
      </div>
      <div className=" self-start pb-2 pl-2">
        <Link href={website} target="_blank">
          <IconWeb />
        </Link>
      </div>
      <div className=" self-start pl-2 opacity-75  ">
        <Link href={instagram} target="_blank">
          <IconRoundedInstagram />
        </Link>
      </div>
      <div className="lg:mt44 mt-40 flex flex-col items-center px-4 pb-4  ">
        <span className="text-lg font-normal text-black">{name}</span>
        <div className="flex w-full items-center justify-center font-light  ">
          <span className="border-t-3 font-light ">{position}</span>
        </div>
      </div>
    </div>
  );
}
