"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function VisionSub({ content, imgAlt }) {
  return (
    <>
      <div className="absolute top-0 block w-full -z-10 md:hidden">
        <div className="w-full">
          <div className=" absolute bg-gradient-to-b from-[rgba(34,34,34,0.82)] to-[rgba(34,34,34,0.33)] z-50 h-full w-full" />
          <Image src={content.image} width={500} height={500} alt={imgAlt} className="w-full" />
        </div>
        <div className="absolute left-0 right-0 mx-auto w-72 top-24 2xs:top-28 sm:w-[34rem]">
          <h1 className="absolute z-50 text-center text-white">{content.title}</h1>
        </div>
        <div className="absolute z-50 p-8 bg-white top-52 rounded-t-3xl 2xs:top-60 xs:top-[16.5rem] sm:top-[19rem] sm:p-10 bottom-0">
          <PortableText value={content.content} />
        </div>
      </div>
      <div className="hidden md:flex flex-col px-10 max-w-[1600px]">
        <div className="justify-center hidden md:flex max-w-[1600px] mb-10">
          <h1 className="w-full text-center text-jobloop-primary-green">{content.title}</h1>
        </div>
        <div className="hidden md:flex-row md:flex justify-between mx-auto max-w-[1600px]">
          <div className="w-1/2 pr-4">
            <PortableText value={content.content} />
          </div>
          <div className="pt-6">
            <Image
              src={content.image}
              width={1080}
              height={964}
              className="mx-auto my-auto rounded w-[30rem]"
              alt={imgAlt}
            />
          </div>
        </div>
      </div>
    </>
  );
}
