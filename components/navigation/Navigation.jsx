"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar, { NavbarAlt } from "./Navbar";
import MyPathname from "./MyPathname";

// Definer URL endpoints.
const landing = "/";
const oppdragsgiver = "/oppdragsgiver";
const bedrift = "/bedrift";
const deltaker = "/deltaker";
const techstack = "/techstack";
const about = "/about";
const visjon = "/visjon";
const faq = "/FAQ";
const kontakt = "/contact";


export default function Navigation() {
  const pathname = usePathname();
  let navbar;

  if (pathname === techstack) {
    navbar = <NavbarAlt />;
  } else if (pathname === about) {
    navbar = <NavbarAlt />;
  } else if (pathname === oppdragsgiver) {
    navbar = (
      <>
        <div className="block md:hidden">
          <Navbar />
        </div>
        <div className="hidden md:block">
          <NavbarAlt subpage="Oppdragsgiver" />
        </div>
      </>
    );
  } else if (pathname === bedrift) {
    navbar = (
      <>
        <div className="block md:hidden">
          <Navbar />
        </div>
        <div className="hidden md:block">
          <NavbarAlt subpage="Bedrift" />
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
    navbar = <NavbarAlt />;
  } else if (pathname === faq) {
    navbar = (
      <>
        <div className="block md:hidden">
          <Navbar />
        </div>
        <div className="hidden md:block">
          <NavbarAlt />
        </div>
      </>
    );
  } else {
    navbar = <Navbar />;
  }

  return (
    <div>
      {/* 
      1. Over i denne komponenten har vi en if-setning som sjekker om vi er på en av 
      de to sidene vi ønsker å ha en annen navbar på. Fordel er at vi kan legge til flere
      sider her hvis vi ønsker det og legge til flere else if-setninger.
      2. Hvis vi er på en av disse sidene, og vi har en skjerm som er mindre eller lik 1024px, 
      så vil vi rendere NavbarAlt.
      3. Ellers vil vi rendere Navbar.
      4. navbar er en variabel som vi bruker til å rendere den riktige navbar-komponenten.
        */}
      {navbar}
      {/* Les om dette komponentet i komponentfilen */}
      {/*<MyPathname />*/}
    </div>
  );
}
