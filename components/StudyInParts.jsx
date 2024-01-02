"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function StudyInParts({ content }) {
  return (
    <>
      <div className="flex flex-row bg-jobloop-green md:px-24">
        <div className="flex flex-col w-1/2 py-4">
          <h1>{content[0].title}</h1>
          <PortableText value={content[0].content} />
        </div>
        <div className="w-1/2">
          <Image src={content[0].image} width={500} height={500} className="mx-auto my-auto md:w-72" />
        </div>
      </div>
      <div className="flex flex-row-reverse md:px-24">
        <div className="flex flex-col w-1/2 py-4">
          <h1>{content[1].title}</h1>
          <PortableText value={content[1].content} />
        </div>
        <div className="w-1/2">
          <Image src={content[1].image} width={500} height={500} className="mx-auto my-auto md:w-72" />
        </div>
      </div>
    </>
  );
}
