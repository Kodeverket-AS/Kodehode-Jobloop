"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar, { NavbarAlt } from "./Navbar";
import MyPathname from "./MyPathname";

// Definer URL endpoints.
const navigationUrl1 = "/techstack";
const navigationUrl2 = "/about";

// Definerer en konstant som sjekker om vinduet er mindre eller lik 768px
// 768px er bredde for tailwind md: .
// const minWindowWidth = window.innerWidth < 768;

const Navigation = () => {
  const pathname = usePathname();

  let minWindowWidth;
  if (typeof window !== "undefined") {
    minWindowWidth = window.innerWidth < 768;
  }

  // Sjekker om URL matcher med preDefinert URL og at minWindowWidth matcher gitt verdig over.
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

      {/* Les om dette komponentet i komponentfilen */}
      <MyPathname />
    </div>
  );
};

export default Navigation;
