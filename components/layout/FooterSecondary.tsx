import React from 'react';
import CopyRight from '../common/CopyRight';
import Link from 'next/link';
import Instagram from '../icons/footer/Instagram';
import Envelope from '../icons/footer/Envelope';
import Whatsapp from '../icons/footer/Whatsapp';
import LinkedIn from '../icons/footer/LinkedIn';

export default function FooterSecondary() {
  return (
    <div className="flex h-[850px] snap-center flex-col justify-between bg-[#3D5656] py-8 font-barlow md:h-[380px]">
      <div className="flex flex-col justify-between space-y-5 px-12 py-5 md:flex-row">
        <div className="flex flex-col gap-4 md:w-[344px]">
          <div className="h-[25px] text-justify text-xl font-medium text-[#FEED9D]">
            About Landa
            <br />
          </div>
          <div className="mt-1 text-justify text-base font-normal text-white">
            In Landa Academy, individuals will be trained based on their
            interests and capabilities. Necessary actions are taken at the Landa
            Acceleration Center to accelerate their unique abilities. Then,
            investment is made based on the investment priorities of developing
            the nurtured capabilities of individuals.
            <br />
          </div>
        </div>
        <div className="col-span-1 flex flex-col space-y-1">
          <div className="text-justify text-xl font-medium text-[#FEED9D]">
            Explore
            <br />
          </div>
          <div className="flex flex-col gap-1">
            <Link
              href={'/'}
              className="max-w-fit text-base font-normal text-white hover:text-[#CCE8BB]"
            >
              Home
            </Link>
            <Link
              href={'/'}
              className="max-w-fit text-base font-normal text-white hover:text-[#CCE8BB]"
            >
              Blog
            </Link>
            <Link
              href={'/about'}
              className="max-w-fit text-base font-normal text-white hover:text-[#CCE8BB]"
            >
              About
            </Link>
            <Link
              href={'/contact'}
              className="max-w-fit text-base font-normal text-white hover:text-[#CCE8BB]"
            >
              Contact
            </Link>
            <Link
              href={'/'}
              className="max-w-fit text-base font-normal text-white hover:text-[#CCE8BB]"
            >
              Our Team
            </Link>
            <Link
              href={'/'}
              className="max-w-fit text-base font-normal text-white hover:text-[#CCE8BB]"
            >
              Verification
            </Link>
          </div>
        </div>

        <div className="col-span-1 flex flex-col space-y-1">
          <div className="h-[30px] w-[93px] text-justify text-xl font-medium text-[#FEED9D]">
            Contact
            <br />
          </div>
          <div className="flex w-[330px] flex-col gap-2 divide-y-2 divide-[#CCE8BB]">
            <div>
              <div className="text-justify text-base font-normal text-white">
              No. 200, 7646 Yonge Street, Thornhill, Toronto, ON L4J 1V9, Canada
              </div>
              <div className="text-justify text-base font-normal text-white">
              +1 (289) 269-3933
              </div>
            </div>
            <div>
              <div className="text-base font-normal text-white">
              Office 41, No. 27, Gholam Jafari Street, Tajrish Square, Tehran, Iran
              </div>
              <div className="text-justify text-base font-normal text-white">
              +98 (912) 0539563
              </div>
            </div>
            <div>
              <div className="text-justify text-base font-normal text-white">
              Office C, 5th Floor, Tala Complex, Sa'adat Abad Street, Isfahan, Iran
              </div>
              <div className="text-justify text-base font-normal text-white">
              +98 (313) 1311914
              </div>
            </div>
            <div className="flex h-[22px] w-[330px] flex-row items-center gap-6 pt-4 text-white">
              <Link
                aria-label="Instagram"
                href={
                  'https://www.instagram.com/landaacademy/'
                }
                className="hover:text-[#CCE8BB]"
                target="_blank"
              >
                <Instagram />
              </Link>
              <Link
                aria-label="Email"
                href={'mailto:academy@landaholding.com'}
                className="hover:text-[#CCE8BB]"
              >
                <Envelope />
              </Link>
              <Link
                aria-label="Whatsapp"
                href={'https://wa.me/989120539563'}
                className="hover:text-[#CCE8BB]"
                target="_blank"
              >
                <Whatsapp />
              </Link>
              <Link
                aria-label="Linkedin"
                href={'https://www.linkedin.com/company/landa-startup-school/'}
                className="hover:text-[#CCE8BB]"
                target="_blank"
              >
                <LinkedIn />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <CopyRight />
    </div>
  );
}
