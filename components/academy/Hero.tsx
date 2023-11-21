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
    <div className="relative flex h-screen snap-start flex-col overflow-hidden bg-white pt-24 md:flex-row md:justify-between md:pt-36">
      <Image
        loading="lazy"
        className="absolute h-full w-full object-cover opacity-40 blur-sm md:static md:h-[600px] md:w-[461px] md:object-contain md:opacity-100 md:blur-none"
        src={"/static/images/Academy/Hero/Hero.png"}
        width={481}
        height={501}
        alt="Hero Illustration"
      />
      <div className="z-10 flex h-full flex-col items-center justify-between md:z-0 md:ml-6 md:w-2/3">
        <div className="mx-5 flex flex-col gap-1">
          <div className="w-[365px] text-center font-gilda text-3xl text-black md:w-[724px] md:text-start md:text-6xl">
            {title}
          </div>
          <div className="ml-5 w-[330px] text-justify font-condensed text-xl font-normal leading-normal tracking-[2px] text-black text-opacity-95 md:ml-2 md:w-[800px] md:text-2xl md:font-semibold md:leading-10 ">
            {subTitle}
          </div>
        </div>
        <Image
          loading="lazy"
          className="-mr-20 h-[400px] self-end md:mr-0 md:h-[560px]"
          src={`/static/images/Academy/Logo.svg`}
          alt="Landa"
          width={344}
          height={467}
        />
        <Link
          aria-label="Scroll To Next Section"
          className="absolute bottom-4 left-7 flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-white md:left-10 md:h-12 md:w-12"
          href={"#Roadmap-1"}
        >
          <ArrowDown />
        </Link>
      </div>
    </div>
  );
}
