"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function HeroSub({content}) {
  return (
    <>
      <div className="absolute top-0 block w-full -z-10 md:hidden">
        <div className="w-full">
          <Image
            src={content.image}
            width={500}
            height={500}
            className="w-full"
          />
        </div>
        <div className="absolute left-0 right-0 mx-auto w-44 top-32">
          <h1 className="text-center text-white">
            {content.title}
          </h1>
        </div>
        <div className="absolute p-8 bg-white top-60 rounded-t-3xl">
          <PortableText value={content.content} />
        </div>
      </div>
      <div className="hidden md:flex-row md:flex">
        <div className="w-1/2">
          <h1 className="text-jobloop-green">{content.title}</h1>
          <PortableText value={content.content} />
        </div>
        <div className="w-1/2">
          <Image
            src={content.image}
            width={500}
            height={500}
            className="mx-auto my-auto w-72"
          />
        </div>
      </div>
    </>
  );
}
