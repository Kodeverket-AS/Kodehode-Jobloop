"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { LinkButton } from "./Buttons";

export default function HeroSub({ content, buttonText }) {
  return (
    <>
      <div className="absolute top-0 block w-full -z-10 md:hidden">
        <div className="w-full">
          <div className=" absolute bg-gradient-to-b from-[rgba(34,34,34,0.82)] to-[rgba(34,34,34,0.33)] z-50 h-full w-full"></div>
          <Image src={content.image} width={500} height={500} className="w-full" />
        </div>
        <div className="absolute left-0 right-0 mx-auto w-72 top-24">
          <h1 className="absolute z-50 text-center text-white">{content.title}</h1>
        </div>
        <div className="absolute z-50 p-8 bg-white top-60 rounded-t-3xl">
          <PortableText value={content.content} />
        </div>
      </div>
      <div className="hidden md:flex-row md:flex md:px-24 md:pt-24">
        <div className="w-1/2">
          <h1 className="text-jobloop-primary-green">{content.title}</h1>
          <PortableText value={content.content} />
          <div className="hidden mt-10 md:block">
            <LinkButton Path="/contact" Text={buttonText} />
          </div>
        </div>
        <div className="w-1/2 pt-6">
          <Image
            src={content.image}
            width={500}
            height={500}
            className="mx-auto my-auto rounded w-96"
          />
        </div>
      </div>
    </>
  );
}
