"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar, { NavbarAlt } from "./Navbar";

const Navigation = () => {
  const pathname = usePathname();
  return (
    <div>
      <div>{pathname === "/techstack" ? <NavbarAlt /> : <Navbar />}</div>
      {/* Løsningen under kan brukes hvor somhelst for å vise hvilken side
        brukeren befinner seg på. 
        Importer usePathname fra next/navigation og bruk den i en div. */}
      <div>
        <p>du er på siden for: {pathname}</p>
      </div>
    </div>
  );
};

export default Navigation;
