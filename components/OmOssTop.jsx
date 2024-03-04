"use client";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { LinkButton } from "./Buttons";

export default function OmOssTop({ content, buttonText }) {
   return (
    <>
    <div className="flex flex-row w-full my-24 place-content-evenly">
  <div className="w-full md:w-1/2 lg:w-2/6">
    <div className="pb-[150%] relative"> {/* Adjust the padding-bottom value to control aspect ratio */}
      <Image
        src={content.image}
        width={561}
        height={820}
        className="absolute top-0 left-0 object-cover w-full h-full"
        alt="Picture of employees"
      />
    </div>
  </div>
  <div className="w-full pb-8 pr-8 pl- md:w-1/2 lg:w-2/6">
    <h1 className="mb-10 text-6xl text-jobloop-primary-green">{content.title}</h1>
    <PortableText value={content.content} />
    <div className="hidden mt-20 md:block">
      <LinkButton Path="/contact" Text={buttonText} />
    </div>
  </div>
</div>
</>
   ); 
}

