"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaqDeltager } from "./FAQcomp";
import { FaqBedrift } from "./FAQcomp";
import { FaqVirk } from "./FAQcomp";
import { FaArrowUp } from "react-icons/fa";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 300);
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
    <div className="fixed bottom-6 right-0 left-0 z-50 pointer-events-none">
      <div className="max-w-screen-2xl mx-auto px-4 flex justify-end">
        <button
          onClick={scrollToTop}
          aria-label="Scroll til toppen"
          className={`p-3 transition-all duration-300 bg-jobloop-primary-green text-kv-white rounded-full hover:scale-110 hover:bg-jobloop-primary-green/90 shadow-lg hover:shadow-xl cursor-pointer pointer-events-auto ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          }`}>
          <FaArrowUp className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export function LinkButton({ path, text }) {
  return (
    <Link
      href={path}
      title={`Gå til ${path}`}
      aria-label={`Lenke til underside ${path}`}
      className="text-base w-full sm:w-fit py-4 px-8 rounded-full shadow-sm border-2 border-jobloop-primary-green hover:shadow-lg bg-kv-white hover:bg-jobloop-primary-green/10 transition-all duration-300 scale-100 hover:scale-105 text-kv-black hover:text-jobloop-primary-green text-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-jobloop-primary-green focus-visible:ring-offset-2">
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
      className="text-base w-full sm:w-fit py-4 px-8 rounded-full shadow-lg hover:shadow-xl bg-jobloop-primary-green hover:bg-kv-white hover:border-2 hover:border-jobloop-primary-green hover:text-jobloop-primary-green transition-all duration-300 transform hover:scale-105 text-kv-white text-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-jobloop-primary-green focus-visible:ring-offset-2">
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
      className="text-base w-full sm:w-fit py-4 px-8 rounded-full shadow-lg hover:shadow-xl bg-jobloop-primary-orange hover:bg-jobloop-primary-orange/90 transition-all duration-300 scale-100 hover:scale-105 text-kv-white text-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-jobloop-primary-green focus-visible:ring-offset-2">
      {text}
    </a>
  );
}

export function LinkButtonColour({ path, text }) {
  return (
    <Link
      href={path}
      title={`Gå til ${path}`}
      className="transition-all duration-300 scale-100 hover:scale-105 px-8 py-4 text-sm md:text-base text-jobloop-primary-green border-2 border-jobloop-primary-green rounded-full hover:bg-jobloop-primary-green hover:border-jobloop-primary-green hover:text-kv-white focus:bg-jobloop-primary-green focus:text-kv-white w-full sm:w-fit text-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-jobloop-primary-green focus-visible:ring-offset-2">
      {text}
    </Link>
  );
}
