import Link from "next/link";
import React from "react";
import Button from "../common/Button";

export default function CoursesCard({
  id,
  title,
  isActive,
  backgroundImage,
}: {
  id: number;
  title: string;
  isActive?: boolean;
  backgroundImage: string;
}) {
  return (
    <Link
      href={"/courses/" + (id + 1)}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className={`relative flex flex-col justify-center items-center w-[170px] md:w-[556px] h-[170px] md:h-[486px] rounded-sm group ${
        isActive ? "border-2 border-[#FDD30A9E]" : ""
      }`}
    >
      <span className="font-barlow md:text-5xl font-medium tracking-[2.4px] text-white z-10 group-hover:-rotate-90 group-hover:absolute group-hover:-ml-[480px] transition-all duration-500">
        {title}
      </span>
      <div
        className={`${
          isActive ? "" : "hidden"
        } absolute btn border-none w-full rounded-none text-black bg-[#FDD30A9E] bottom-0 group-hover:text-white group-hover:bg-[#222] transition-all duration-500`}
      >
        Register Now
      </div>
      <div className="absolute w-full h-full bg-gradient-to-t from-[#FDD30A57] to-[#80C555B2]"></div>
      <div className="w-[400px] h-[430px] bg-black opacity-50 z-auto text-white hidden group-hover:md:block transition-all duration-500">
        <ul className="flex flex-col p-5 gap-6">
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
          <li>3،900،000T</li>
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
