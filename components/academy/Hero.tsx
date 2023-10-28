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
    <div className="flex h-[calc(100vh-144px)] justify-between mt-36 pb-20 bg-white">
      <Image
        loading="lazy"
        className="hidden md:block w-1/3 object-contain"
        src={"/static/images/Academy/Hero/Hero.png"}
        width={481}
        height={501}
        alt="Hero Illustration"
      />
      <Image
        loading="lazy"
        className="md:hidden"
        src={"/static/images/Academy/Hero/leadership-amico 1.svg"}
        width={214}
        height={214}
        alt="Hero Illustration"
      />
      <div className="flex flex-col ml-6 w-2/3">
        <div className="flex flex-col">
          <div className="font-gilda text-4xl md:text-6xl text-black">
            {title}
          </div>
          <div className="w-[800px] font-condensed text-black text-opacity-95 text-xl md:text-2xl font-semibold leading-normal md:leading-10 tracking-[2px] ">
            {subTitle}
          </div>
        </div>
        <Image
          loading="lazy"
          className="h-[400px] md:h-[560px] self-end"
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
