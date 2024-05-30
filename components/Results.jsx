"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function Results({ content }) {
  //console.log(content);
  return (
    <div className="flex flex-col w-full px-8 py-20 sm:px-10 md:px-12 lg:px-24 sm:flex-row 2xl:max-w-[1600px]">
      <div className="w-full sm:w-1/2">
        <Image
          src={content.image}
          width={500}
          height={500}
          alt={content.alt}
          className="pt-0 pr-0 rounded sm:pr-3 md:pr-10 sm:pt-3"
        />
      </div>
      <div className="flex flex-col w-full pl-0 pr-0 sm:w-1/2 sm:pl-5">
        <h2 className="pt-3 pb-5 sm:pt-0">Kodehode gir resultater</h2>
        <PortableText value={content.content} />
        <p className="py-5">{content.person}</p>
        <a
          href={content.link}
          target="blank"
          rel="noopener noreferrer"
          aria-label="lenke til artikkelen"
          className="underline text-jobloop-primary-green max-w-fit"
        >
          Les mer på Kode24
        </a>
      </div>
    </div>
  );
}
