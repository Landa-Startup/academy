import Link from "next/link";
import React from "react";

export default function CourseCard({
  title,
  image,
  active,
  date,
}: {
  title: string;
  image: string;
  active?: boolean;
  date: string;
}) {
  return (
    <Link
      href={"/academy/" + title}
      style={{
        backgroundImage: `url('${image}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className={`courses-overlay transition-in group relative flex h-[350px] w-[175px] shrink-0 flex-col items-center justify-center bg-gray-300 p-4 duration-500 md:h-[486px] md:hover:h-[486px] md:hover:w-[384px]${
        active ? " border-2 border-yellow-400" : ""
      }`}
    >
      <div className="absolute left-[65px] top-[350px] hidden origin-top-left -rotate-90 text-4xl font-medium leading-[50px] tracking-widest text-white transition-colors duration-500 md:block md:w-[396px] md:group-hover:static md:group-hover:max-w-fit md:group-hover:rotate-0">
        {title}
      </div>
      <div className="z-10 hidden text-xl font-medium leading-[50px] tracking-wide text-yellow-50 md:group-hover:block">
        {date}
      </div>
      <div className="left-[45px] top-[80px] z-10 origin-top-left text-xl font-medium leading-[50px] tracking-widest text-white md:hidden md:w-[396px] md:group-hover:animate-spin md:group-hover:transition-all md:group-hover:duration-500">
        {title}
      </div>
      {active ? (
        <div className="absolute bottom-0 left-0 flex h-[45px] w-full items-center justify-center bg-yellow-400 text-center font-medium text-emerald-800 md:group-hover:hidden">
          <span className="text-xl tracking-[1px] md:text-xl md:tracking-wide">
            Register Now
          </span>
        </div>
      ) : (
        <></>
      )}
      {/* <button className="w-44 h-14 px-16 py-3.5 mt-11 bg-yellow-400 justify-center items-center gap-2.5 hidden md:group-hover:transition-opacity md:group-hover:duration-500 md:group-hover:inline-flex z-10">
        <div className="text-center text-white text-2xl font-normal">
          Check Now
        </div>
      </button> */}
    </Link>
  );
}
