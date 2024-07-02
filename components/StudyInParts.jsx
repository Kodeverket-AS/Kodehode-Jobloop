"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function StudyInParts({ content }) {
  return (
    <section className="w-screen py-12">
      <div className="flex flex-col-reverse md:flex-row justify-center gap-8 max-w-screen-2xl mx-auto px-4 pb-8">
        <div className="w-full">
          <h2 className="underline decoration-jobloop-primary-green underline-offset-8 pb-4">
            {content[0].title}
          </h2>
          <div className="md:text-xl">
            <PortableText value={content[0].content} />
          </div>
        </div>
        <div className="w-full">
          <Image
            src={content[0].image}
            width={500}
            height={500}
            alt={content[0].alt || ""}
            className="rounded w-full"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse justify-center gap-8 max-w-screen-2xl mx-auto p-4">
        <div className="w-full">
          <h2 className="underline decoration-jobloop-primary-green underline-offset-8 pb-4">
            {content[1].title}
          </h2>
          <div className="md:text-xl">
            <PortableText value={content[1].content} />
          </div>
        </div>
        <div className="w-full">
          <Image
            src={content[1].image}
            width={500}
            height={500}
            alt={content[1].alt || ""}
            className="rounded w-full"
          />
        </div>
      </div>
    </section>
  );
}
