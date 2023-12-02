'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <div className="flex h-full items-center justify-start px-2 text-left">
      <Link href={'/'}>
        <div className="flex h-16 w-16 flex-col items-end md:h-24 md:w-24 md:flex-row">
          <Image
            loading="lazy"
            className="object-cover"
            src={'/static/images/Academy/Logo.svg'}
            alt="Logo"
            width={800}
            height={800}
          />
          <span
            className={
              'text-[12px] font-bold tracking-[0.375px] text-lime-400 md:text-xl'
            }
          ></span>
        </div>
      </Link>
    </div>
  );
}
