import Link from "next/link";
import React from "react";
import Button from "../common/Button";

export default function CoursesCard({
  id,
  title,
  isActive,
  backgroundImage,
  price,
}: {
  id: number;
  title: string;
  isActive?: boolean;
  backgroundImage: string;
  price: string;
}) {
  return (
    <Link
      href={"/courses/" + (id + 1)}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="group relative flex h-[170px] w-[170px] flex-col items-center justify-center rounded-sm md:h-[486px] md:w-[556px]"
    >
      <span className="z-10 font-barlow font-medium tracking-[2.4px] text-white transition-all duration-500 group-hover:absolute group-hover:-ml-[480px] group-hover:-rotate-90 md:text-5xl">
        {title}
      </span>
      <div className="absolute h-full w-full bg-gradient-to-t from-[#FDD30A57] to-[#80C555B2]"></div>
      <div className="z-auto hidden h-[430px] w-[400px] bg-black text-white opacity-50 transition-all duration-500 group-hover:md:block">
        <ul className="flex flex-col gap-6 p-5">
          <li>
            Elevate your online impact with our SEO course at Landa Academy!
            Master search engine optimization, from keywords to cutting-edge
            strategies. Join us now and amplify your digital presence!
          </li>
          <li>
            A two-day SEO course consisting of two sessions, each lasting 9
            hours, will be conducted.
          </li>
          <li>
            A two-day SEO course consisting of two sessions, each lasting 9
            hours, will be conducted.
          </li>
          <li>{price}T</li>
        </ul>
        <Button
          size="not"
          text="Register"
          goto="/"
          bgColor="Yellow"
          addedClass="mt-0 mx-auto"
        />
      </div>
    </Link>
  );
}
