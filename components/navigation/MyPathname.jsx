"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

/**
 * Denne komponenten viser hvilken URL vi er på
 * Den setter basically en breadcrumb hvor du alltid kan gå tilbake til home.
 * Kanksje den er overflødig, men den er fin å ha om den skulle trenges.
 * Kan selvfølgelig styles som du vil og brukes hvor du vil.
 * Men den gir mest mening i Navigeringen
 */

const MyPathname = () => {
  const pathname = usePathname();
  return (
    <div>
      MyPathname component is rendering this:{" "}
      <Link
        href="./"
        className="font-bold hover:underline">
        Home
      </Link>{" "}
      {pathname}
    </div>
  );
};

export default MyPathname;
