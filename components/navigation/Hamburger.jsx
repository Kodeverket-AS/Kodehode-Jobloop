"use client";

import React, { useEffect, useState, useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const PagesArray = [
  {
    name: "Vår Visjon",
    href: "/visjon",
    label: "Les om vår visjon",
  },
  {
    name: "FAQ",
    href: "/FAQ",
    label: "Få svar på ofte stilte spørsmål",
  },
  {
    name: "Om Oss",
    href: "/om-oss",
    label: "Les mer om oss",
  },
  {
    name: "Kodespråk",
    href: "/kodesprak",
    label: "Les mer om kodespråkene våre",
  },
  {
    name: "Kontakt Oss",
    href: "/kontakt",
    label: "Kontakte oss",
  },
];

const HamburgerMenu = ({ hamFill }) => {
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
        <GiHamburgerMenu
          className={`w-20 h-20 ${
            hamFill == "white" ? "fill-kv-white" : "fill-jobloop-primary-green"
          }`}
        />
      </button>
      <div
        className={`fixed top-0 z-40 right-0 w-full bg-kv-white text-kv-black h-screen transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        ref={menuRef}>
        <nav className="relative flex justify-center items-center text-center  h-full">
          <button
            className="absolute flex items-center justify-center w-10 h-10 transition rounded-md top-4 right-4 "
            onClick={handleMenuToggle}
            aria-label="Lukke navigasjonsmeny">
            {" "}
            <IoCloseSharp
              className={` ${
                isOpen ? "block" : "hidden"
              } text-kv-black rounded-full transition duration-500 z-50 w-12 h-12`}
            />
          </button>

          <div className="flex flex-col gap-8">
            {PagesArray.map((page) =>
              page.href === "/kontakt" ? (
                <Link
                  key={page.name}
                  href={page.href}
                  aria-label={page.label}
                  className="py-2 px-4 rounded-md border border-jobloop-primary-green bg-jobloop-primary-green/10 font-medium"
                  onClick={(event) => {
                    setIsOpen(false);
                  }}>
                  {page.name}
                </Link>
              ) : (
                <Link
                  key={page.name}
                  href={page.href}
                  aria-label={page.label}
                  className="px-4 text-xl font-bold transition-all"
                  onClick={(event) => {
                    setIsOpen(false);
                  }}>
                  {page.name}
                </Link>
              )
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
