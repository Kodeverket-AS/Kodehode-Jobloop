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
          width={600}
          height={400}
          alt={content.alt}
          className="w-full rounded-xl shadow-md max-h-[400px] object-cover object-top"
        />
      }
      rightContent={
        <div className="flex flex-col gap-8 w-full group">
          <h2 className="text-3xl md:text-4xl font-bold text-kv-black underline underline-offset-8 decoration-jobloop-primary-green group-hover:decoration-jobloop-primary-orange transition-all duration-300">
            Kodehode gir resultater
          </h2>

          <div className="bg-jobloop-primary-green/5 rounded-2xl p-8 border border-jobloop-primary-green/10">
            <blockquote className="text-lg md:text-2xl pb-4 italic text-kv-black/80 leading-relaxed">
              <PortableText value={content.content} />
            </blockquote>
            <cite className="text-jobloop-primary-green font-semibold"> - {content.person}</cite>
          </div>
          
          <a
            href={content.link}
            target="blank"
            rel="noopener noreferrer"
            aria-label="lenke til artikkelen"
            className="inline-flex items-center text-jobloop-primary-green hover:text-jobloop-primary-orange  transition-colors duration-200 relative group w-fit cursor-pointer">
            Les hele artikkelen på Kode24
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-jobloop-primary-orange transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      }
    />
  );
}
