'use client';
import Link from 'next/link';
import React, { useRef } from 'react';
import Logo from '../common/Logo';
import Instagram from '../icons/footer/Instagram';
import Envelope from '../icons/footer/Envelope';
import Whatsapp from '../icons/footer/Whatsapp';
import LinkedIn from '../icons/footer/LinkedIn';
import './Navbar.css';

export default function Navbar({ children }: { children: React.ReactNode }) {
  const drawerRef = useRef<HTMLInputElement>(null);

  const menuItems = [
    { label: 'HOME', href: '/' },
    { label: "GALLERY", href: "/gallery" },
    { label: 'CONTACT', href: '/contact' },
    // { label: "ABOUT", href: "/about" },
    { label: 'OUR TEAM', href: '/our-team' }
    // { label: "VERIFICATION", href: "/verification" },
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
      <div className="drawer-content relative flex flex-col md:px-32 md:pt-5">
        <div className="navbar flex w-full items-center justify-between bg-transparent text-black">
          <div className="flex-none lg:hidden">
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
          <div className="hidden xl:flex">
            <ul className="menu menu-horizontal flex justify-center space-x-10 font-condensed text-xl">
              {menuItems.map((item) => (
                <li className="h-9 text-2xl" key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:bg-black hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="children">{children}</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <div className="menu flex h-full w-80 flex-col justify-between bg-[#CFFDE1] text-xl">
          <div className="p-4">
            <div className="mb-4 flex items-center justify-center border-b-2 border-[#3D5656] pb-7 pt-3">
              <span className="font-barlow text-xl font-bold tracking-[1px] text-[#3D5656]">
                Landa Academy
              </span>
            </div>
            <ul>
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
