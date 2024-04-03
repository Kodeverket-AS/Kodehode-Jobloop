"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";

export function VisionSub({ content }) {
  return (
    <>
      <div className="absolute top-0 block w-full -z-10 md:hidden">
        <div className="w-full">
          <div className=" absolute bg-gradient-to-b from-[rgba(34,34,34,0.82)] to-[rgba(34,34,34,0.33)] z-50 h-full w-full" />
          <Image
            src={content.image}
            width={500}
            height={500}
            alt={content.alt || ""}
            className="w-full"
          />
        </div>
        <div className="absolute left-0 right-0 mx-auto w-72 top-24 2xs:top-28 sm:w-[34rem]">
          <h1 className="absolute z-50 text-center text-kv-white">{content.title}</h1>
        </div>
        <div className="absolute z-50 p-8 bg-kv-white top-52 rounded-t-3xl 2xs:top-60 xs:top-[16.5rem] sm:top-[19rem] sm:p-10 bottom-0">
          <PortableText value={content.content} />
        </div>
      </div>
      <div className="hidden md:flex flex-col px-10 max-w-[1600px]">
        <div className="justify-center hidden md:flex max-w-[1600px] mb-14">
          <h1 className="w-full text-center text-jobloop-primary-green">{content.title}</h1>
        </div>
        <div className="hidden md:flex-row md:flex justify-around mx-auto max-w-[1600px]">
          <div>
            <Image
              src={content.image}
              width={1080}
              height={964}
              className="mx-auto my-auto rounded w-[30rem]"
              alt={content.alt || ""}
            />
          </div>
          <div className="w-1/2 pl-4">
            <PortableText value={content.content} />
          </div>
        </div>
      </div>
    </>
  );
}

export default function VisionTop({ content }) {
  return (
    <div className="flex flex-col items-center justify-start w-full py-20 md:px-12 lg:px-24 md:flex-row md:items-start md:justify-between md:w-screen 2xl:max-w-[1600px]">
      <div className="flex w-screen h-auto p-0 mx-auto md:pr-5 md:mx-0 md:w-[20rem] md:h-[37rem] lg:w-[24rem] 2xl:w-[32rem]">
        <Image
          src={content.image}
          alt={content.alt || ""}
          width={1000}
          height={1000}
          className="object-contain w-full h-full "
        />
      </div>

      {/* Text container */}
      <div className="flex flex-col w-full px-8 sm:px-10 sm:my-10 md:w-1/2 md:my-0 md:px-0">
        <h1 className="py-10 text-start text-jobloop-primary-green md:pb-10 md:pt-0">
          {content.title}
        </h1>
        <PortableText value={content.content} />
      </div>
    </div>
  );
}
