import React from 'react';
import CopyRight from '../common/CopyRight';
import Link from 'next/link';
import Instagram from '../icons/footer/Instagram';
import Envelope from '../icons/footer/Envelope';
import Whatsapp from '../icons/footer/Whatsapp';
import LinkedIn from '../icons/footer/LinkedIn';

export default function Footer() {
  return (
    <div className="flex h-screen snap-center flex-col justify-around bg-[#3D5656] font-barlow">
      <div className="mt-16 grid grid-cols-1 gap-5 px-10 py-5 md:mt-0 md:grid-cols-2 md:gap-10 md:px-28 md:py-0 md:pt-20 backdrop:md:flex-row">
        <div className="flex flex-col space-y-1">
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
              href={'/our-team'}
              className="max-w-fit text-base font-normal text-white hover:text-[#CCE8BB]"
            >
              Our Team
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:gap-4">
          <div className="h-[25px] text-justify text-xl font-medium text-[#FEED9D]">
            About Landa Academy
          </div>
          <div className="text-justify font-barlow text-xl font-normal leading-9 text-white">
            In Landa Academy, individuals will be trained based on their
            interests and capabilities. Necessary actions are taken at the Landa
            Acceleration Center to accelerate their unique abilities. Then,
            investment is made based on the investment priorities of developing
            the nurtured capabilities of individuals.
          </div>
        </div>
        <div className="col-span-1 flex flex-col">
          <div className="h-[30px] text-justify text-xl font-medium text-[#FEED9D]">
            Contact
          </div>
          <div className="flex w-[330px] flex-col gap-2 divide-y-2 divide-[#CCE8BB]">
            <div>
              <div className="text-justify text-base font-normal text-white">
                Young street, Toronto, Canada
              </div>
              <div className="text-justify text-base font-normal text-white">
                +1 (416) 557-7622
              </div>
            </div>
            <div>
              <div className="text-base font-normal text-white">
                Gholam Jafari St, Tehran Province, Tajrish, Iran
              </div>
              <div className="text-justify text-base font-normal text-white">
                021-880-301-67
              </div>
            </div>
            <div>
              <div className="text-justify text-base font-normal text-white">
                Saadat Abad Ave, Isfahan, Iran
              </div>
              <div className="text-justify text-base font-normal text-white">
                031-313-119-14
              </div>
            </div>
            <div className="flex h-[22px] w-[330px] flex-row items-center gap-6 pt-4 text-white">
              <Link
                aria-label="Instagram"
                href={
                  'https://instagram.com/landa_holding?igshid=YTQwZjQ0NmI0OA=='
                }
                className="hover:text-[#CCE8BB]"
                target="_blank"
              >
                <Instagram />
              </Link>
              <Link
                aria-label="Email"
                href={'mailto:info@landaholding.com'}
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
                href={'https://www.linkedin.com/company/landa-startup-inc'}
                className="hover:text-[#CCE8BB]"
                target="_blank"
              >
                <LinkedIn />
              </Link>
            </div>
          </div>
        </div>
        <iframe
          className="hidden md:block"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d210.02430568667313!2d51.66838252946836!3d32.622465703123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc37235b31d7c9%3A0x100c725fb8a86761!2sIrimmigration.ca!5e0!3m2!1sen!2sfi!4v1701586760612!5m2!1sen!2sfi"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <CopyRight />
    </div>
  );
}
