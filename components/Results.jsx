"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function Results({ content }) {
  //console.log(content);
  return (
    <div className=" flex flex-col w-full gap-12 px-8 py-20 sm:px-10 md:px-12 lg:px-24 sm:flex-row 2xl:max-w-[1600px]">
      <div className="w-full">
        <Image
          src={content.image}
          width={500}
          height={500}
          alt={content.alt}
          className="w-full rounded"
        />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <div className="border-b-2 pb-2 border-jobloop-primary-orange">
          <h2>Kodehode gir resultater</h2>
        </div>
        <div className="text-lg">
          <PortableText value={content.content} />
        </div>
        <p className="py-5"> - {content.person}</p>
        <a
          href={content.link}
          target="blank"
          rel="noopener noreferrer"
          aria-label="lenke til artikkelen"
          className="underline text-jobloop-primary-green max-w-fit">
          Les mer på Kode24
        </a>
      </div>
    </div>
  );
}
