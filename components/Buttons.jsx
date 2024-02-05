"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll til toppen"
      className={` z-50 p-4 fixed md:bottom-8 bottom-4 md:right-8 right-4 transition-all duration-200  bg-jobloop-primary-green text-white rounded-full hover:scale-[0.90] border shadow ${
        isVisible ? "opacity-100 " : "opacity-0 cursor-default"
      }`}
    >
      <FaArrowUp className="w-6 h-6 " strokeWidth={1.5} />
    </button>
  );
}

export function ContactBtn() {
  return (
    <Link href="/contact">
      <button className="w-32 h-10 transition-all bg-transparent border-2 border-black border-solid rounded-3xl lg:w-52 lg:h-12 duration-600 hover:bg-jobloop-orange hover:border-none hover:text-white">
        Kontakt oss
      </button>
    </Link>
  );
}

export function SeMerBtn() {
  return (
    <button className="w-20 text-sm transition-all bg-transparent border-2 border-black border-solid rounded-3xl lg:w-32 h-7 lg:h-10 duration-600 hover:bg-alt-purple hover:border-none hover:text-white">
      Se Mer
    </button>
  );
} 

export function LinkButton({ Path, Text }) {
  return (
    <Link
      href={Path}
      className="px-8 py-2 transition-all bg-white border-2 border-black border-solid rounded-3xl hover:bg-jobloop-primary-orange hover:border-none hover:text-white"
    >
      {Text}
    </Link>
  );
}

export function LinkButtonColour({ Path, Text }) {
  return (
    <Link
      href={Path}
      className={`md:px-8 py-2 text-white transition-all border-2 border-white rounded-3xl hover:bg-white hover:border-none hover:text-black px-6`}
    >
      {Text}
    </Link>
  );
}