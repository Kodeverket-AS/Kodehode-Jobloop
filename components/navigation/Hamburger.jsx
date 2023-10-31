"use client";

import React, { useEffect, useState, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="block md:hidden">
      <button
        className="flex items-center justify-center w-10 h-10 transition duration-500 rounded-md top-4 right-4 hover:text-jobloop-orange"
        onClick={handleMenuToggle}
        aria-label="Åpne navigasjonsmeny"
      >
        <svg
          className={` ${isOpen ? "hidden" : "block"}`}
          width="35"
          height="20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 25 13"
          fill="none"
          stroke="currentColor"
          //  strokeWidth="1"
          // strokeLinecap="round"
          // strokeLinejoin="round"
        >
          {/* <line x1="5" y1="12" x2="28" y2="12" />
          <line x1="0" y1="6" x2="28" y2="6" />
          <line x1="0" y1="18" x2="28" y2="18" /> */}
          <path
            d="M0 13H25V11.8333H0V13ZM5 7.58333H25V6.41667H5V7.58333ZM0 0V2.16667H25V1H0Z"
            fill="#1D3458"
          />
        </svg>
      </button>

      <div
        className={`fixed top-0 z-40 right-0 w-64 bg-hawii-background h-screen transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        ref={menuRef}
      >
        <nav className="relative flex justify-center">
          <button
            className="absolute flex items-center justify-center w-10 h-10 transition rounded-md top-4 right-4 "
            onClick={handleMenuToggle}
            aria-label="Lukke navigasjonsmeny"
          >
            {" "}
            <IoCloseSharp
              className={` ${
                isOpen ? "block" : "hidden"
              } text-black rounded-full transition duration-500 hover:text-hawii-greyBlue  z-50 w-12 h-12`}
            />
          </button>

          <ul className="grid gap-8 mt-20">
            <Link
              href="/visjon"
              aria-label="gå til underside og les om vår visjon"
              className="px-8 text-xl text-black transition-all group w-fit"
              onClick={(event) => {
                setIsOpen(false);
              }}
            >
              <div className="relative">
                <li>Vår Visjon</li>
                <div className="absolute w-full h-0 transition-all group-hover:h-2" />
              </div>
            </Link>
            <Link
              href="/FAQ"
              aria-label="gå til underside og få svar på typiske spørsmål"
              className="px-8 text-xl text-black transition-all group w-fit"
              onClick={(event) => {
                setIsOpen(false);
              }}
            >
              <div className="relative">
                <li>FAQ</li>
                <div className="absolute w-full h-0 transition-all group-hover:h-2" />
              </div>
            </Link>
            <Link
              href="/about"
              aria-label="gå til underside og les mer om oss"
              className="px-8 text-xl text-black transition-all group w-fit"
              onClick={(event) => {
                setIsOpen(false);
              }}
            >
              <div className="relative">
                <li>Om Oss</li>
                <div className="absolute w-full h-0 transition-all group-hover:h-2" />
              </div>
            </Link>
            <Link
              href="/techstack"
              aria-label="gå til underside og les mer om kodespråkene våre"
              className="px-8 text-xl text-black transition-all group w-fit"
              onClick={(event) => {
                setIsOpen(false);
              }}
            >
              <div className="relative">
                <li>Kodespråk</li>
                <div className="absolute w-full h-0 transition-all group-hover:h-2" />
              </div>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;