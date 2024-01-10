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
        */}
      <div>{pathname === "/techstack" ? <NavbarAlt /> : <Navbar />}</div>
      <MyPathname />
    </div>
  );
};

export default Navigation;
