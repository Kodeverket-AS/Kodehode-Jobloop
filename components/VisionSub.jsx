"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function VisionTop({ content }) {
  return (
    <>
      <div className="hidden md:block">
        <div className="md:flex flex-col px-10 max-w-[1600px] mt-32 mb-20">
          <div className="justify-center md:flex max-w-[1600px] mb-14 flex-col">
            <h1 className="w-full text-center text-kv-black">{content.title}</h1>
            <hr className="w-1/3 h-2 bg-jobloop-primary-green ml-[33%] mt-2" />
          </div>
          <div className="md:flex-row md:flex justify-around mx-auto max-w-[1600px]">
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
      </div>
      <div className="block md:hidden">
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
            <div className="justify-center md:flex max-w-[1600px] mb-14 flex-col">
              <h1 className="py-10 text-start md:pb-10 md:pt-0">{content.title}</h1>
              <hr className="w-4/5 h-2 bg-jobloop-primary-green ml-[5%] mt-2" />
            </div>
            <PortableText value={content.content} />
          </div>
        </div>
      </div>
    </>
  );
}
