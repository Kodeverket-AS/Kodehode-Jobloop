"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { LinkButton } from "./Buttons";

export default function VisionTop({ content }) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="flex justify-between gap-12 px-12 max-w-[1600px] mt-32 mb-20">
          <div>
            <Image
              src={content.image}
              width={1080}
              height={964}
              className="mx-auto w-full my-auto rounded"
              alt={content.alt || ""}
            />
          </div>
          <div className="w-full">
            <div className="w-full m-auto border-b-8 pb-4 mb-4 border-jobloop-primary-green">
              <h1 className="text-kv-black">{content.title}</h1>
            </div>
            <div className="md:text-xl leading-relaxed tracking-wide">
              <div className="text-jobloop-darker-green">
                <PortableText value={content.content} />
              </div>
              <div className="flex justify-start mt-10">
                <LinkButton
                  path="/kontakt"
                  text="Kontakt oss"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="block md:hidden">
        <div className="flex flex-col items-center justify-start w-full md:px-12 lg:px-24 md:flex-row md:items-start md:justify-between md:w-screen 2xl:max-w-[1600px]">
          <div className="flex w-screen h-auto">
            <Image
              src={content.image}
              alt={content.alt || ""}
              width={1000}
              height={1000}
              className="object-contain w-full h-full "
            />
          </div>
          {/* Text container */}
          <div className="flex flex-col w-full px-8 py-8 mb-8 ">
            <div className="w-full m-auto border-b-8 pb-4 mb-4 border-jobloop-primary-green">
              <h1 className=" leading-tight text-kv-black">{content.title}</h1>
            </div>
            <div className="text-jobloop-darker-green">
              <PortableText value={content.content} />
            </div>
            <div className="mt-10">
              <LinkButton
                path="/kontakt"
                text="Kontakt oss"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
