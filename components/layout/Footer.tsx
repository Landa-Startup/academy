import React from "react";
import CopyRight from "../common/CopyRight";
import Image from "next/image";
import Link from "next/link";
import Instagram from "../icons/footer/Instagram";
import Envelope from "../icons/footer/Envelope";
import Whatsapp from "../icons/footer/Whatsapp";
import LinkedIn from "../icons/footer/LinkedIn";

export default function Footer() {
  function GetYear() {
    var currentYear = new Date().getFullYear();
    return currentYear;
  }
  return (
    <div className="flex flex-col p-8 bg-[#3D5656] font-barlow">
      <div className="flex flex-col justify-between space-y-5 md:flex-row md:p-20">
        <div className="flex flex-col md:w-[344px] gap-4">
          <div className="h-[25px] text-justify text-[#FEED9D] text-xl font-medium">
            About Landa
            <br />
          </div>
          <div className="mt-1 text-base font-normal text-justify text-white">
            In Landa Academy, individuals will be trained based on their
            interests and capabilities. Necessary actions are taken at the Landa
            Acceleration Center to accelerate their unique abilities. Then,
            investment is made based on the investment priorities of developing
            the nurtured capabilities of individuals.
            <br />
          </div>
        </div>
        <div className="flex flex-col col-span-1 space-y-1">
          <div className="text-xl font-medium text-justify text-[#FEED9D]">
            Explore
            <br />
          </div>
          <div className="flex flex-col gap-1">
            <Link
              href={"/"}
              className="text-base font-normal text-white hover:text-yellow-400 max-w-fit"
            >
              Home
            </Link>
            <Link
              href={"/"}
              className="text-base font-normal text-white hover:text-yellow-400 max-w-fit"
            >
              Blog
            </Link>
            <Link
              href={"/about"}
              className="text-base font-normal text-white hover:text-yellow-400 max-w-fit"
            >
              About
            </Link>
            <Link
              href={"/contact"}
              className="text-base font-normal text-white hover:text-yellow-400 max-w-fit"
            >
              Contact
            </Link>
            <Link
              href={"/"}
              className="text-base font-normal text-white hover:text-yellow-400 max-w-fit"
            >
              Our Team
            </Link>
            <Link
              href={"/"}
              className="text-base font-normal text-white hover:text-yellow-400 max-w-fit"
            >
              Verification
            </Link>
          </div>
        </div>

        <div className="flex flex-col col-span-1 space-y-1">
          <div className="w-[93px] h-[30px] text-justify text-[#FEED9D] text-xl font-medium">
            Contact
            <br />
          </div>
          <div className="flex flex-col divide-y-2 w-[225px] divide-green-200 gap-2">
            <div>
              <div className="text-base font-normal text-justify text-white">
                Young street, Toronto, Canada
              </div>
              <div className="text-base font-normal text-justify text-white">
                +1 (416) 557-7622
              </div>
            </div>
            <div>
              <div className="text-base font-normal text-white">
                Gholam Jafari St, Tehran Province, Tajrish, Iran
              </div>
              <div className="text-base font-normal text-justify text-white">
                02188030167
              </div>
            </div>
            <div>
              <div className="text-base font-normal text-justify text-white">
                Saadat Abad Ave, Isfahan, Iran
              </div>
              <div className="text-base font-normal text-justify text-white">
                03131311914
              </div>
            </div>
            <div className="w-[226px] h-[22px] flex flex-row justify-between items-center pt-4 text-white">
              <Link
                aria-label="Instagram"
                href={
                  "https://instagram.com/landa_holding?igshid=YTQwZjQ0NmI0OA=="
                }
                className="hover:text-yellow-400"
                target="_blank"
              >
                <Instagram />
              </Link>
              <Link
                aria-label="Email"
                href={"mailto:info@landaholding.com"}
                className="hover:text-yellow-400"
              >
                <Envelope />
              </Link>
              <Link
                aria-label="Whatsapp"
                href={"https://wa.me/989120539563"}
                className="hover:text-yellow-400"
                target="_blank"
              >
                <Whatsapp />
              </Link>
              <Link
                aria-label="Linkedin"
                href={"https://www.linkedin.com/company/landa-startup-inc"}
                className="hover:text-yellow-400"
                target="_blank"
              >
                <LinkedIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch pt-4 text-center text-green-200 border-t border-green-200">
        © Copyright {GetYear()} by{" "}
        <Link href={"/"} className="text-primary text-green-200">
          LandaHolding
        </Link>
      </div>
    </div>
  );
}
