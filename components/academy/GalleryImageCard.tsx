import Image from "next/image";
import React from "react";

export default function GalleryImageCard({ src , title }: { src: string , title: string }) {
  return (
    <div className="relative w-[170px] md:w-[555px] h-[100px] md:h-[416px] group">
      <Image
        className="object-cover rounded-sm"
        src={src}
        alt="Landa Academy Image"
        layout="fill"
      />
      <div className="flex-col text-white border-t-2 border-white absolute bottom-7 pl-24 pt-2 z-10 w-full hidden group-hover:flex fade-in">
        <span className="font-barlow text-xl font-medium">{title}</span>
        <span className="font-barlow text-sm font-medium"></span>
      </div>
    </div>
  );
}