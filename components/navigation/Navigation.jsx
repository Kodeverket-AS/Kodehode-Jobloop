"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar, { NavbarAlt } from "./Navbar";

const Navigation = () => {
  const pathname = usePathname();
  return <div>{pathname === "/techstack" ? <NavbarAlt /> : <Navbar />}</div>;
};

export default Navigation;
