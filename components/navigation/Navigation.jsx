"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar, { NavbarAlt } from "./Navbar";
import MyPathname from "./MyPathname";

// Definer URL endpoints
const navigationUrl1 = "/techstack";
const navigationUrl2 = "/about";

// Definerer en konstant som sjekker om vinduet er mindre eller lik 1024px
const minWindowWidth = window.innerWidth <= 1024;

const Navigation = () => {
  // Henter ut pathname til siden vi er på aka URL-endpointet
  // pathname kan også brukes til å vise foreksempel subpage prop fra NavbarAlt
  const pathname = usePathname();

  // Sjekker om vi er på en av de to sidene vi ønsker å ha en annen navbar på
  let navbar;
  if (pathname === navigationUrl1 && minWindowWidth) {
    navbar = <NavbarAlt />;
  } else if (pathname === navigationUrl2 && minWindowWidth) {
    navbar = <NavbarAlt />;
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

      {/* Her rendrer vi en komponent som viser hvilken URL vi er på. */}
      <MyPathname />
    </div>
  );
};

export default Navigation;
