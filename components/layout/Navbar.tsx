"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import Logo from "../common/Logo";
import { usePathname } from "next/navigation";
import Instagram from "../icons/footer/Instagram";
import Envelope from "../icons/footer/Envelope";
import Whatsapp from "../icons/footer/Whatsapp";
import LinkedIn from "../icons/footer/LinkedIn";

export default function Navbar({ children }: { children: React.ReactNode }) {
  const drawerRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDetailsElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const router = usePathname();

  const menuItems = [
    { label: "HOME", href: "/" },
    { label: "COURSES", href: "/courses" },
    { label: "CONTACT", href: "/contact" },
    { label: "ABOUT", href: "/about" },
    { label: "OUR TEAM", href: "/our-team" },
    { label: "VERIFICATION", href: "/verification" },
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
    <div className="top-0 drawer">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        aria-label="Menu Toggle"
        ref={drawerRef}
      />
      <div className="relative flex flex-col drawer-content md:px-32 md:pt-5">
        <div className="flex items-center justify-between w-full text-black bg-transparent navbar">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              className="-mt-5 btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
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
          <div className="justify-start hidden ml-32 xl:flex-1 xl:flex">
            <ul className="flex justify-center space-x-10 text-xl menu menu-horizontal font-condensed">
              {menuItems.map((item) => (
                <li className="text-2xl h-9" key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:bg-black hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {/* <li className="h-9">
                <details className="mb-32 dropdown">
                  <summary
                    className="text-2xl hover:text-primary hover:bg-base-200"
                    onClick={() => setIsMenuOpen(true)}
                  >
                    FORMS
                  </summary>
                  <ul
                    className={`p-2 space-y-1 shadow menu dropdown-content z-[1] bg-stone-100 rounded-box w-64 ${
                      isMenuOpen ? '' : 'hidden'
                    }`}
                  >
                    {submenuItems.map((item) => (
                      <li
                        className="text-xl max-h-fit"
                        key={item.label}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Link
                          href={item.href}
                          className="p-5 font-bold text-black border hover:text-primary hover:bg-base-200"
                        >
                          {item.label}{' '}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="children">{children}</div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <div className="flex flex-col h-full text-xl menu w-80 bg-[#CFFDE1] justify-between">
          <div className="p-4">
            <div className="flex justify-center items-center pt-3 pb-7 border-b-2 border-[#3D5656] mb-4">
              <span className="font-barlow font-bold text-xl tracking-[1px] text-[#3D5656]">
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
          <div className="flex justify-center text-white gap-5 p-4 bg-[#3D5656]">
            <Instagram />
            <Envelope />
            <Whatsapp />
            <LinkedIn />
          </div>
        </div>
      </div>
      <style jsx>{`
        .children {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
        }
      `}</style>
    </div>
  );
}
