"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NavbarWhite, NavbarColor } from "./Navbar";

const samarbeidspartner = "/samarbeidspartner";
const arbeidsgiver = "/arbeidsgiver";
const deltaker = "/deltaker";
const techstack = "/kodesprak";
const about = "/om-oss";
const visjon = "/visjon";
const faq = "/FAQ";
const kontakt = "/kontakt";

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  let navbar;
  if (pathname === techstack) {
    navbar = <NavbarColor pathname={pathname} />;
  } else if (pathname === about) {
    navbar = <NavbarColor pathname={pathname} />;
  } else if (pathname === kontakt) {
    navbar = <NavbarWhite pathname={pathname} />;
  } else if (pathname === samarbeidspartner) {
    navbar = <NavbarColor subpage="Samarbeidspartner" pathname={pathname} />;
  } else if (pathname === arbeidsgiver) {
    navbar = <NavbarColor subpage="Arbeidsgiver" pathname={pathname} />;
  } else if (pathname === deltaker) {
    navbar = <NavbarColor subpage="Deltaker" pathname={pathname} />;
  } else if (pathname === visjon) {
    navbar = <NavbarColor pathname={pathname} />;
  } else if (pathname === faq) {
    navbar = <NavbarColor pathname={pathname} />;
  } else {
    navbar = <NavbarWhite pathname={pathname} />;
  }

  const isLanding = pathname === "/";
  return (
    <div
      className={`w-full z-50 transition-all duration-300 ${
        isLanding
          ? "absolute top-0 left-0 right-0"
          : `sticky top-0 ${scrolled ? "bg-kv-white/95 backdrop-blur-md shadow-sm" : ""}`
      }`}
    >
      {React.cloneElement(navbar, { scrolled: isLanding ? false : scrolled })}
    </div>
  );
}
