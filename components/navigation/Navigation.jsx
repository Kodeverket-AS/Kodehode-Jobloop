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
    navbar = <NavbarAlt textWhite="yes" />;
  } else if (pathname === about) {
    navbar = <NavbarAlt />;
  } else if (pathname === kontakt) {
    navbar = <NavbarAlt />;
  } else if (pathname === samarbeidspartner) {
    navbar = (
      <>
        <div className="block md:hidden">
          <Navbar />
        </div>
        <div className="hidden md:block">
          <NavbarAlt subpage="Samarbeidspartner" />
        </div>
      </>
    );
  } else if (pathname === arbeidsgiver) {
    navbar = (
      <>
        <div className="block md:hidden">
          <Navbar />
        </div>
        <div className="hidden md:block">
          <NavbarAlt subpage="Arbeidsgiver" />
        </div>
      </>
    );
  } else if (pathname === deltaker) {
    navbar = (
      <>
        <div className="block md:hidden">
          <Navbar />
        </div>
        <div className="hidden md:block">
          <NavbarAlt subpage="Deltaker" />
        </div>
      </>
    );
  } else if (pathname === visjon) {
    navbar = (
      <>
        {/* <div className="block md:hidden">
          <Navbar />
        </div> */}
        <div>
          <NavbarAlt />
        </div>
      </>
    );
  } else if (pathname === faq) {
    navbar = <NavbarAlt />;
  } else {
    navbar = <Navbar />;
  }

  return <div className="absolute w-full z-50">{navbar}</div>;
}
