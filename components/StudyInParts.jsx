"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function StudyInParts({ content }) {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-jobloop-primary-green md:px-24">
        <div className="flex flex-col p-8 md:py-16 md:w-1/2">
          <h2>{content[0].title}</h2>
          <PortableText value={content[0].content} />
        </div>
        <div className="px-8 pb-8 md:py-20 md:w-1/2">
          <Image src={content[0].image} width={500} height={500} className="mx-auto my-auto rounded md:w-72" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row-reverse md:px-24">
        <div className="flex flex-col p-8 md:py-16 md:w-1/2">
          <h2>{content[1].title}</h2>
          <PortableText value={content[1].content} />
        </div>
        <div className="px-8 pb-8 md:py-20 md:w-1/2">
          <Image src={content[1].image} width={500} height={500} className="mx-auto my-auto rounded md:w-72" />
        </div>
      </div>
    </>
  );
}
