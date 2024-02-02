"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function Results({ content }) {
    //console.log(content);
  return (
    <div className="flex w-full px-20 py-20">
      <div className="w-1/2">
        <Image src={content.image} width={500} height={500} className="p-10 rounded" />
      </div>
      <div className="flex flex-col w-1/2 pr-40">
        <h1 className="pt-10 pb-5">Kodehode gir resultater</h1>
        <PortableText value={content.content} />
        <p className="py-5">{content.person}</p>
        <a href={content.link} target="blank" rel="noopener noreferrer" aria-label="lenke til artikkelen" className="underline text-jobloop-primary-green">Les mer på Kode24</a>
      </div>
    </div>
  );
}
