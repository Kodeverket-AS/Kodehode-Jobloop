"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function HeroSub({content}) {
  return (
    <div className="flex flex-row">
      <div className="w-1/2">
        <h1 className="text-jobloop-green">{content.title}</h1>
        <PortableText value={content.content} />
      </div>
      <div className="w-1/2">
        <Image src={content.image} width={500} height={500} className=" w-72 mx-auto my-auto" />
      </div>
    </div>
  );
}
