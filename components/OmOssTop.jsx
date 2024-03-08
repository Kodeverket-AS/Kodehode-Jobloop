"use client";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { LinkButton } from "./Buttons";

export default function OmOssTop({ content, buttonText }) {
  return (
    <div className="flex items-center justify-center w-full px-4 py-20 md:px-12 lg:px-24 md:flex-nowrap">
      {/* Image container */}
      <div className="flex-initial mx-auto w-36 h-52 md:w-40 md:h-48 md:mx-0">
        <Image
          src={content.image}
          alt="Picture of employees"
          width={561}
          height={820}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text container */}
      <div className="w-full px-4 py-8 md:w-1/2 lg:w-2/5 md:py-0 md:pl-8">
        <h1 className="text-3xl font-semibold text-jobloop-primary-green">{content.title}</h1>
        <PortableText value={content.content} />
        <div className="mt-8">
          <LinkButton Path="/contact" Text={buttonText} />
        </div>
      </div>
    </div>
  );
}


