"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function StudyInParts({ content }) {
  return (
    <>
      <div className="flex flex-col px-8 py-20 md:flex-row bg-jobloop-primary-green sm:px-10 md:px-12 lg:px-24 md:w-screen">
        <div className="flex flex-col pb-5 md:w-1/2 md:pb-0">
          <h2>{content[0].title}</h2>
          <PortableText value={content[0].content} />
        </div>
        <div className="pl-0 my-auto md:w-1/2 md:pl-6">
          <Image
            src={content[0].image}
            width={500}
            height={500}
            alt={content[0].alt || ""}
            className="mx-auto my-auto rounded md:ml-auto md:w-80 lg:w-96 md:mr-0"
          />
        </div>
      </div>
      <div className="flex flex-col px-8 py-20 md:flex-row-reverse sm:px-10 md:px-12 lg:px-24 md:w-screen">
        <div className="flex flex-col pb-5 md:w-1/2 md:pb-0">
          <h2>{content[1].title}</h2>
          <PortableText value={content[1].content} />
        </div>
        <div className="pr-0 my-auto md:w-1/2 md:pr-6">
          <Image
            src={content[1].image}
            width={500}
            height={500}
            alt={content[1].alt || ""}
            className="mx-auto my-auto rounded md:mr-0 md:w-80 lg:w-96 md:ml-0"
          />
        </div>
      </div>
    </>
  );
}
