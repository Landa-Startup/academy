import Link from 'next/link';
import React from 'react';

export default function ScrollButton({
  scrollTo,
  color,
  addedClass,
}: {
  scrollTo: string;
  color?: 'white' | 'black';
  addedClass?: string;
}) {
  return (
    <Link
      href={'#' + scrollTo}
      className={ `btn btn-circle btn-outline   mx-auto mb-[101px] ml-[189px]  mr-[181px]    lg:right-[-70px] lg:mb-8      ${
        color === 'white'
          ? 'border-white text-white'
          : 'border-black text-black'
      } ${addedClass ? addedClass : ''}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-arrow-down"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
        />
      </svg>
    </Link>
  );
}
