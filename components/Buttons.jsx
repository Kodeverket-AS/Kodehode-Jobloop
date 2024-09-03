"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaqDeltager } from "./FAQcomp";
import { FaqBedrift } from "./FAQcomp";
import { FaqVirk } from "./FAQcomp";

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
      className={`z-50 p-4 fixed md:bottom-8 bottom-4 md:right-8 right-4 transition-all duration-200  bg-kv-black text-kv-white rounded-full hover:scale-[0.90] border border-kv-white shadow ${
        isVisible ? "opacity-100 " : "opacity-0 cursor-default"
      }`}>
      <FaArrowUp
        className="w-6 h-6 "
        strokeWidth={1.5}
      />
    </button>
  );
}

export function LinkButton({ path, text }) {
  return (
    <Link
      href={path}
      title={`Gå til ${path}`}
      aria-label={`Lenke til underside ${path}`}
      className="text-base w-fit py-4 px-8 rounded-full shadow-sm border border-kv-black hover:shadow-lg bg-kv-white transition-all scale-100 hover:scale-105 text-kv-black">
      {text}
    </Link>
  );
}
export function LinkButtonContained({ path, text }) {
  return (
    <Link
      href={path}
      title={`Gå til ${path}`}
      aria-label={`Lenke til underside ${path}`}
      className="text-base w-fit py-4 px-8 rounded-full shadow-sm hover:shadow-lg bg-kv-black hover:bg-kv-black/95 transition-all scale-100 hover:scale-105 text-kv-white">
      {text}
    </Link>
  );
}

export function ExternalLinkButton({ path, text, ariaLabel }) {
  return (
    <a
      href={path}
      title={`Gå til ${path}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-base w-fit py-4 px-8 rounded-md shadow-sm shadow-jobloop-primary-green hover:shadow-lg bg-kv-black hover:bg-kv-black/95 transition-all scale-100 hover:scale-105 text-kv-white">
      {text}
    </a>
  );
}

export function LinkButtonColour({ path, text }) {
  return (
    <Link
      href={path}
      title={`Gå til ${path}`}
      className="transition-all scale-100 hover:scale-105 px-8 py-4 text-sm md:text-base text-neutral-900 border-neutral-900 rounded-full hover:bg-neutral-900 hover:border-none hover:text-kv-white focus:bg-neutral-900 focus:text-kv-white">
      {text}
    </Link>
  );
}
