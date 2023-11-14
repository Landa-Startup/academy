"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "../common/Button";
import ArrowDown from "../icons/hero/ArrowDown";

export default function Hero({
  showLanda,
  title,
  subTitle,
  buttonBg,
  backgroundImage,
  leftImage,
  showButton,
}: {
  showLanda: boolean;
  title: string;
  subTitle: string;
  buttonBg?: string;
  backgroundImage: string;
  leftImage: string;
  showButton?: boolean;
}) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between pt-24 md:pt-36 bg-white relative overflow-hidden h-screen snap-start">
      <Image
        loading="lazy"
        className="object-cover md:object-contain absolute md:static w-full md:w-[461px] h-full md:h-[600px] blur-sm opacity-40 md:opacity-100 md:blur-none"
        src={"/static/images/Academy/Hero/Hero.png"}
        width={481}
        height={501}
        alt="Hero Illustration"
      />
      <div className="flex flex-col justify-between items-center md:ml-6 md:w-2/3 h-full z-10 md:z-0">
        <div className="flex flex-col gap-1 mx-5">
          <div className="font-gilda w-[365px] md:w-[724px] text-3xl md:text-6xl text-black text-center md:text-start">
            {title}
          </div>
          <div className="w-[330px] md:w-[800px] md:ml-2 ml-5 text-justify font-condensed text-black text-opacity-95 text-xl md:text-2xl font-normal md:font-semibold leading-normal md:leading-10 tracking-[2px] ">
            {subTitle}
          </div>
        </div>
        <Image
          loading="lazy"
          className="h-[400px] md:h-[560px] self-end -mr-20 md:mr-0"
          src={`/static/images/Academy/Logo.svg`}
          alt="Landa"
          width={344}
          height={467}
        />
        <Link
          aria-label="Scroll To Next Section"
          className="absolute flex items-center justify-center w-10 h-10 md:w-12 md:h-12 border border-white rounded-full animate-bounce left-7 md:left-10 bottom-4"
          href={"#Roadmap-1"}
        >
          <ArrowDown />
        </Link>
      </div>
    </div>
  );
}
