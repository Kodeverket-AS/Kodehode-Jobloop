"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function Results({ content }) {
  //console.log(content);
  return (
    <section className="group w-screen py-12">
      <div className=" flex flex-col md:flex-row justify-center gap-8 max-w-screen-2xl mx-auto px-4">
        <Image
          src={content.image}
          width={500}
          height={500}
          alt={content.alt}
          className="w-full rounded-md shadow-md"
        />

        <div className=" flex flex-col gap-8 w-full">
          <h2 className="underline underline-offset-8 decoration-jobloop-primary-orange group-hover:decoration-jobloop-primary-green">
            Kodehode gir resultater
          </h2>

          <div>
            <div className=" text-lg md:text-3xl pb-2 italic">
              <PortableText value={content.content} />
            </div>
            <b> - {content.person}</b>
          </div>
          <a
            href={content.link}
            target="blank"
            rel="noopener noreferrer"
            aria-label="lenke til artikkelen"
            className="text-blue-500 hover:text-blue-700 group-hover:font-bold hover:underline underline-offset-8">
            Les hele artikkelen på Kode24
          </a>
        </div>
      </div>
    </section>
  );
}
