"use client";

import React, { useEffect, useState, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
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
        className="flex items-center justify-center w-10 h-10 transition duration-500 rounded-md top-4 right-4"
        onClick={handleMenuToggle}
        aria-label="Åpne navigasjonsmeny">
        <GiHamburgerMenu className="w-20 h-20 fill-white" />
      </button>

      <div
        className={`fixed top-0 z-40 right-0 w-64 bg-white h-screen transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        ref={menuRef}>
        <nav className="relative flex justify-center">
          <button
            className="absolute flex items-center justify-center w-10 h-10 transition rounded-md top-4 right-4 "
            onClick={handleMenuToggle}
            aria-label="Lukke navigasjonsmeny">
            {" "}
            <IoCloseSharp
              className={` ${
                isOpen ? "block" : "hidden"
              } text-black rounded-full transition duration-500 z-50 w-12 h-12`}
            />
          </button>

          <ul className="grid gap-8 mt-20">
            <Link
              href="/visjon"
              aria-label="gå til underside og les om vår visjon"
              className="text-xl text-black font-bold px-8 transition-all group w-fit"
              onClick={(event) => {
                setIsOpen(false);
              }}>
              Vår Visjon
            </Link>
            <Link
              href="/FAQ"
              aria-label="gå til underside og få svar på typiske spørsmål"
              className="text-xl text-black font-bold px-8 transition-all group w-fit"
              onClick={(event) => {
                setIsOpen(false);
              }}>
              FAQ
            </Link>
            <Link
              href="/about"
              aria-label="gå til underside og les mer om oss"
              className="text-xl text-black font-bold px-8 transition-all group w-fit"
              onClick={(event) => {
                setIsOpen(false);
              }}>
              Om Oss
            </Link>
            <Link
              href="/techstack"
              aria-label="gå til underside og les mer om kodespråkene våre"
              className="text-xl text-black font-bold px-8 transition-all group w-fit"
              onClick={(event) => {
                setIsOpen(false);
              }}>
              Kodespråk
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
