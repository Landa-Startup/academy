import React from 'react';
import Phone from '../icons/IconPhone';
import Email from '../icons/IconEmail';
import Location from '../icons/IconLocation';
import Link from 'next/link';
import IconInstagram from '../icons/IconInstagram';
import IconWhatApp from '../icons/IconWhatsApp';
import IconLinkedinB from '../icons/IconLinkedinB';
import IconEmailB from '../icons/IconEmailB';
export default function ContactUsDescription() {
  return (
    <div>
      <div className="mb-5 mt-10 flex flex-col md:my-0 md:w-[464px] md:items-start">
        <h1 className="font-gilda text-4xl font-light md:text-5xl">
          Landa Holding
        </h1>
        <p className="my-5 text-justify text-base">
          In Landa academy, individuals will be trained based on their interests
          and capabilities. Necessary actions are taken at the Landa
          Acceleration Center to accelerate their unique abilities. Then,
          investment is made based on the investment priorities of developing
          the nurtured capabilities of individuals.
        </p>
      </div>
      <div className="flex flex-row space-x-3">
        <Link href={'https://www.instagram.com/landaacademy/'} target="_blank">
          <IconInstagram />
        </Link>
        <Link href={'https://wa.me/989120539563'} target="_blank">
          <IconWhatApp />
        </Link>
        <Link href={'mailto:academy@landaholding.com'}>
          <IconEmailB />
        </Link>
        <Link
          href={'https://www.linkedin.com/company/landa-startup-school/'}
          target="_blank"
        >
          <IconLinkedinB />
        </Link>
      </div>
      <div className="mt-10 flex flex-col gap-4">
        <div className="flex gap-2">
          <Phone addedClass="-mt-5" />
          <div className="flex flex-col">
            <span className="font-semibold">Phone Call</span>
            <ul className="gap-1">
              <li>
                <Link href="tel:+14165577622">
                  <span className="mr-1">Toronto:</span>
                  <span className="text-yellow-400">+1 (289) 269-3933</span>
                </Link>
              </li>
              <li>
                <Link href="tel:+14165577622">
                  <span className="mr-1">Tehran:</span>
                  <span className="text-yellow-400">+98 (912) 0539563</span>
                </Link>
              </li>
              <li>
                <Link href="tel:+14165577622">
                  <span className="mr-1">Isfahan:</span>
                  <span className="text-yellow-400">+98 (313) 1311914</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-2">
          <Email />
          <ul>
            <li className="font-semibold">Email info</li>
            <li>
              <a
                className="text-yellow-400"
                href="mailto:academy@landaholding.com"
              >
                info@landaholding.com
              </a>
            </li>
          </ul>
        </div>

        <div className="flex gap-2">
          <Location />
          <div className="ml-2 flex w-11/12 flex-col">
            <span className="font-semibold">Address</span>
            <ul className="mx-4 list-disc space-y-3">
              <li>
                No. 200, 7646 Yonge Street, Thornhill, Toronto, ON L4J 1V9,
                Canada
              </li>
              <li>
                Office 41, No. 27, Gholam Jafari Street, Tajrish Square, Tehran,
                Iran
              </li>
              <li>
                Office C, 5th Floor, Tala Complex, Sa`&apos;`adat Abad Street,
                Isfahan, Iran
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
