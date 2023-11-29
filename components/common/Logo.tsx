"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div className="m-2 flex h-full items-center justify-start px-2 text-left">
      <Link href={"/"}>
        <div className="flex flex-col items-end md:flex-row">
          <Image
            loading="lazy"
            className="h-10 w-10 md:h-14 md:w-12"
            src={"/static/images/Academy/Logo.svg"}
            alt="Logo"
            width={125}
            height={106}
          />
          <span
            className={
              "text-[12px] font-bold tracking-[0.375px] text-lime-400 md:text-xl"
            }
          ></span>
        </div>
      </Link>
    </div>
  );
}
