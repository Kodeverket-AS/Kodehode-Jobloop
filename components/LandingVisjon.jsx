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
      <div className="flex justify-center w-5/6 gap-10 mb-20">
        <div className="w-3/6">
          <Image src={visjonlanding2} width={500} height={300} />
        </div>
        <div className="flex flex-col gap-4">
          <h2>Inkludering lønner seg.</h2>
          <p>Tekst om visjon kommer her.</p>
          <div>
            <LinkButton Path={"/visjon"} Text={"Se mer"} />
          </div>
        </div>
      </div>
    </>
  );
}
