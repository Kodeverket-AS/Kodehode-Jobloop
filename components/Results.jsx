"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function Results({ content }) {
    //console.log(content);
  return (
    <div className="flex flex-row w-full py-20">
      <div className="w-1/2 mr-0">
        <Image src={content.image} width={500} height={500} className="mr-0 rounded" />
      </div>
      <div className="flex flex-col w-1/2 pl-5">
        <h1>Kodehode gir resultater</h1>
        <PortableText value={content.content} />
        <p>{content.person}</p>
        <a href={content.link} target="blank" rel="noopener noreferrer" aria-label="lenke til artikkelen" className="underline text-jobloop-primary-green">Les mer på Kode24</a>
      </div>
    </div>
  );
}
