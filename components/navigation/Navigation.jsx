"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar, { NavbarAlt } from "./Navbar";
import MyPathname from "./MyPathname";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <div>
      {/* Spesifiser hvilken URL endpoint som skal definere hvilken Navbar
        som skal rendres utifra om pathname er true eller false. 
        Vi kan også gjøre en if else statement eller switch case om vi trenger
        flere alternativer for å definere hvilken Navbar som skal rendres hvor.
        Å kjøre slug er jo også et alternativ, men foreløpig er dette en 
        ok og lett-leselig måte å gjøre det på.
        */}
      <div>{pathname === "/techstack" ? <NavbarAlt /> : <Navbar />}</div>
      <MyPathname />
    </div>
  );
};

export default Navigation;
