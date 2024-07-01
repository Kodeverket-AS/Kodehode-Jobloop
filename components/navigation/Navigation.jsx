"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar, { NavbarAlt } from "./Navbar";
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
    navbar = <NavbarAlt />;
  } else if (pathname === about) {
    navbar = <NavbarAlt />;
  } else if (pathname === kontakt) {
    navbar = <NavbarAlt />;
  } else if (pathname === samarbeidspartner) {
    navbar = <NavbarAlt subpage="Samarbeidspartner" />;
  } else if (pathname === arbeidsgiver) {
    navbar = <NavbarAlt subpage="Arbeidsgiver" />;
  } else if (pathname === deltaker) {
    navbar = <NavbarAlt subpage="Deltaker" />;
  } else if (pathname === visjon) {
    navbar = <NavbarAlt />;
  } else if (pathname === faq) {
    navbar = <NavbarAlt />;
  } else {
    navbar = <Navbar />;
  }

  return <div className="absolute w-full z-50">{navbar}</div>;
}
