"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { LinkButton } from "./Buttons";

export default function HeroSub({ content, buttonText }) {
  return (
    <>
      {/* 
      ==========================
      ****** Mobile view ******
      ==========================
      */}
      <div className="absolute top-0 block w-full -z-10 md:hidden">
        <div className="w-full">
          <div className="absolute bg-gradient-to-b from-[rgba(34,34,34,0.82)] to-[rgba(34,34,34,0.33)] z-50 h-full w-full" />
          <Image
            src={content.image}
            width={500}
            height={500}
            alt={content.alt || ""}
            className="w-full"
          />
        </div>
        <div className="absolute left-0 right-0 mx-auto w-72 top-24 2xs:top-28 sm:w-[34rem]">
          <h1 className="absolute z-50 text-center text-kv-white leading-tight">
            {content.title}
          </h1>
        </div>
        <div className="absolute z-50 p-8 bg-kv-white top-52 rounded-t-3xl 2xs:top-60 xs:top-[16.5rem] sm:top-[19rem] sm:p-10 bottom-0">
          <PortableText value={content.content} />
        </div>
      </div>

      {/* 
      ==========================
      ****** Desktop view ******
      ==========================
      */}
      <div className="hidden md:flex-row md:flex lg:px-24 lg:pt-24 md:px-12 md:pt-10 max-w-[1600px]">
        <div className="w-1/2 flex flex-col gap-4">
          <div className="border-b-8 pb-2 border-jobloop-primary-green">
            <h1 className="text-black">{content.title}</h1>
          </div>
          <div className="lg:pr-20">
            <PortableText value={content.content} />

            <div className="mt-10">
              <LinkButton
                Path="/kontakt"
                Text={buttonText}
              />
            </div>
          </div>
        </div>
        <div className="w-1/2 pt-6 pl-0 md:pl-6">
          <Image
            src={content.image}
            width={500}
            height={500}
            className="mx-auto my-auto rounded w-[32rem]"
            alt={content.alt || ""}
          />
        </div>
      </div>
    </>
  );
}
