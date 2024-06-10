"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function StudyInParts({ content }) {
  return (
    <div className="bg-neutral-100 mb-4 pt-8 md:pt-12">
      <div className="flex flex-col px-8 md:flex-row  sm:px-10 md:px-12 lg:px-24 md:w-screen 2xl:justify-center">
        <div className="flex flex-col pb-5 md:w-1/2 md:pb-0 2xl:max-w-[800px]">
          <h2 className="tracking-tight">{content[0].title}</h2>
          <div className="md:text-lg">
            <PortableText value={content[0].content} />
          </div>
        </div>
        <div className="pl-0 my-auto md:w-1/2 md:pl-6 2xl:max-w-[800px]">
          <Image
            src={content[0].image}
            width={500}
            height={500}
            alt={content[0].alt || ""}
            className="mx-auto my-auto w-full rounded-md md:ml-auto md:mr-0"
          />
        </div>
      </div>
      <div className="flex flex-col px-8 py-20 md:flex-row-reverse sm:px-10 md:px-12 lg:px-24 md:w-screen 2xl:justify-center">
        <div className="flex flex-col pb-5 md:w-1/2 md:pb-0 2xl:max-w-[800px]">
          <h2 className="tracking-tight">{content[1].title}</h2>
          <div className="md:text-lg">
            <PortableText value={content[1].content} />
          </div>
        </div>
        <div className="pr-0 my-auto md:w-1/2 md:pr-6 2xl:max-w-[800px]">
          <Image
            src={content[1].image}
            width={500}
            height={500}
            alt={content[1].alt || ""}
            className="mx-auto my-auto w-full rounded-md md:mr-0 md:ml-0"
          />
        </div>
      </div>
    </div>
  );
}
