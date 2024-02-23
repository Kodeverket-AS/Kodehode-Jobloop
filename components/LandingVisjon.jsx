"use client";

import Link from "next/link";
import Image from "next/image";
import headwaykuttet from "../public/headwaykuttet.jpeg";
import Navbar from "./navigation/Navbar";
import danialigdery from "../public/danialigdery.jpg";
import visjonlanding2 from "../public/visjonlanding2.jpeg";
import { ContactBtn } from "./ContactBtn";
import { SeMerBtn } from "./SeMerBtn";
import { LinkButton } from "./Buttons";
import { PortableText } from "@portabletext/react";

export default function LandingVisjon() {
  return (
    <>
      <div className="flex flex-col justify-center gap-10 px-8 py-20 md:flex-row lg:px-24">
        <div className="w-full md:w-1/2">
          <Image src={visjonlanding2} width={500} height={300} className="rounded" />
        </div>
        <div className="flex flex-col gap-4 md:w-1/2">
          <h2>Inkludering lønner seg.</h2>
          <p>
            Andelen unge i utenforskap med interesse for gaming og IT i Norge
            øker, det samme gjør behovet for IT-talent og utvikler i fremtiden.
            Vår visjon er å skape verdi for samfunn og næringsliv ved å redusere
            utenforskap gjennom lønnsom opplæring, rekruttering, matchmaking og
            onboarding innen IT-faget. Vi kjemper for et mer inkluderende
            samfunn, og å skinne lys på at inkludering ikke behøver å være en
            utgift, men en verdi for bedrifter såvel som samfunnet som helhet.
          </p>
          <div className="pt-5 mx-auto md:mx-0">
            <LinkButton Path={"/visjon"} Text={"Se mer"} />
          </div>
        </div>
      </div>
    </>
  );
}
