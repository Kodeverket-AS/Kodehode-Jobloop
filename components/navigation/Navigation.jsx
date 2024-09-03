"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { NavbarWhite, NavbarColor } from "./Navbar";
import MyPathname from "./MyPathname";

// Definer URL endpoints.
const landing = "/";
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
  let navbar;

  if (pathname === techstack) {
    navbar = <NavbarColor />;
  } else if (pathname === about) {
    navbar = <NavbarColor />;
  } else if (pathname === kontakt) {
    navbar = <NavbarWhite />;
  } else if (pathname === samarbeidspartner) {
    navbar = <NavbarColor subpage="Samarbeidspartner" />;
  } else if (pathname === arbeidsgiver) {
    navbar = <NavbarColor subpage="Arbeidsgiver" />;
  } else if (pathname === deltaker) {
    navbar = <NavbarColor subpage="Deltaker" />;
  } else if (pathname === visjon) {
    navbar = <NavbarColor />;
  } else if (pathname === faq) {
    navbar = <NavbarColor />;
  } else {
    navbar = <NavbarWhite />;
  }

  return <div className="absolute w-full z-50">{navbar}</div>;
}
