import Link from 'next/link';
import React from 'react';

export default function CopyRight() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex w-full justify-center self-stretch border-t border-[#CCE8BB] pt-4 text-center font-barlow text-xs font-normal text-[#CCE8BB] md:text-base">
      Copyright © {currentYear}
      <Link href={'/'} className="mx-2 text-yellow-400">
        Landa Academy
      </Link>
      ® , All Rights Reserved.
    </div>
  );
}
