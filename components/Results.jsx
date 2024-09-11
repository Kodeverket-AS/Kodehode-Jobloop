"use client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { SectionComponent } from "./SectionComponents";

export default function Results({ content }) {
  return (
    <SectionComponent
      leftContent={
        <Image
          src={content.image}
          width={500}
          height={500}
          alt={content.alt}
          className="w-full rounded-xl shadow-md"
        />
      }
      rightContent={
        <div className=" flex flex-col gap-8 w-full group">
          <h2 className="underline underline-offset-8 decoration-jobloop-primary-orange group-hover:decoration-jobloop-primary-green">
            Kodehode gir resultater
          </h2>

          <div>
            <blockquote className=" text-lg md:text-3xl pb-2 italic">
              <PortableText value={content.content} />
            </blockquote>
            <cite> - {content.person}</cite>
          </div>
          <a
            href={content.link}
            target="blank"
            rel="noopener noreferrer"
            aria-label="lenke til artikkelen"
            className="text-blue-600 hover:text-blue-700 group-hover:font-bold hover:underline underline-offset-4">
            Les hele artikkelen på Kode24
          </a>
        </div>
      }
    />
  );
}
