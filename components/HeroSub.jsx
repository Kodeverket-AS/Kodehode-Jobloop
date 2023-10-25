"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function HeroSub({content}) {
  return (
    <div>
      <h1>{content.title}</h1>
      <PortableText value={content.content} />
    </div>
  );
}
