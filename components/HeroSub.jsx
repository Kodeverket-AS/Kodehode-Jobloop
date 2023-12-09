"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import NavbarFarge from "./navigation/NavbarFarge";

export default function HeroSub({content}) {
  return (
    <div className="w-full">
      <div>
          <NavbarFarge></NavbarFarge>
      </div>
      <h1>{content.title}</h1>
      <PortableText value={content.content} />
    </div>
  );
}
