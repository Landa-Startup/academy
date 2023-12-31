'use client';
import Link from 'next/link';
import React, { useRef } from 'react';
import Logo from '../common/Logo';
import Instagram from '../icons/footer/Instagram';
import Envelope from '../icons/footer/Envelope';
import Whatsapp from '../icons/footer/Whatsapp';
import LinkedIn from '../icons/footer/LinkedIn';
import './Navbar.css';
// import Image from 'next/image';
// import CaretDown from '../icons/CaretDown';

export default function Navbar({ children }: { children: React.ReactNode }) {
  const drawerRef = useRef<HTMLInputElement>(null);

  const menuItems = [
    { label: 'HOME', href: '/' },
    // { label: 'Blog', href: '/blog' },
    // { label: 'COURSES', href: '/courses' },
    { label: 'GALLERY', href: '/gallery' },
    { label: 'CONTACT', href: '/contact' },
    // { label: 'ABOUT', href: '/about' },
    { label: 'OUR TEAM', href: '/our-team' }
  ];

  const handleLinkClick = () => {
    // setIsMenuOpen(false);
    if (!drawerRef.current) {
      console.log(drawerRef);
      return;
    }
    drawerRef.current.click();
  };
  // const handleClickOutside = (event: Event) => {
  //   if (menuRef.current && !menuRef.current.contains(event.target)) {
  //     setIsMenuOpen(false);
  //   }
  // };
  // useEffect(() => {
  //   document.addEventListener('click', handleClickOutside);
  // }, []);
  return (
    <div className="drawer top-0">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        aria-label="Menu Toggle"
        ref={drawerRef}
      />
      <div className="drawer-content relative flex flex-col ">
        <div className="navbar flex w-full flex-row items-center justify-between  bg-[#26323880] px-12 text-black backdrop-blur-sm">
          <div className="flex-none lg:hidden ">
            <label
              htmlFor="my-drawer-3"
              className="btn btn-square btn-ghost -mt-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Logo />
          <div className="hidden xl:flex xl:justify-self-center">
            <ul className="menu menu-horizontal flex justify-center font-condensed text-xl text-white">
              {menuItems.map((item) => (
                <li className="mx-2 text-2xl" key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:bg-white hover:text-black"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="flex gap-2">
            <Image
              alt="us"
              src={'/static/images/Academy/usFlag.png'}
              width={45}
              height={34}
            />
            <CaretDown />
          </div> */}
          <div className="w-1/7"></div>
        </div>
        <div className="children">{children}</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <div className="menu flex h-full w-80 flex-col justify-between bg-[#CFFDE1] p-0 text-xl">
          <div>
            <div className="flex items-center justify-center border-b-2 border-[#3D5656] py-6">
              <span className="font-barlow text-3xl font-bold tracking-[1px] text-[#3D5656]">
                Landa Academy
              </span>
            </div>
            <ul className="m-8 flex flex-col gap-10">
              {menuItems.map((item) => (
                <li
                  className="first:text-[#80C555]"
                  key={item.label}
                  onClick={() => handleLinkClick()}
                >
                  <Link href={item.href} className="text-2xl font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center gap-5 bg-[#3D5656] p-4 text-white">
            <Instagram />
            <Envelope />
            <Whatsapp />
            <LinkedIn />
          </div>
        </div>
      </div>
    </div>
  );
}
