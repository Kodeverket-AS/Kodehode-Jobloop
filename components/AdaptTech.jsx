"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { LinkButtonColour } from "./Buttons";

export default function AdaptTech({ content1, content2 }) {
  return (
    <div className="flex flex-col w-full px-8 py-20 md:flex-row md:px-12 bg-jobloop-secondary-orange md:w-screen sm:px-10 lg:px-24">
      <div className="flex-col w-full md:w-1/2 md:flex">
        <h2 className="text-kv-white ">{content1[0].title}</h2>
        <div className="text-kv-white">
          <div className="py-5">
            <PortableText value={content1[0].content} />
          </div>
          <div className="hidden py-5 md:block">
            <LinkButtonColour Path={"/kodesprak"} Text={"Se alle kodespråk"} />
          </div>
        </div>
      </div>
      <div className="w-full text-kv-white align-center md:px-10 md:w-1/2">
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col w-24 my-3 text-center md:mx-3 2xs:w-32 xs:w-36 sm:w-64">
            <Image
              src={content2[0].logo}
              width={300}
              height={300}
              className="w-20 mx-auto mb-2 2xs:w-28 sm:w-32"
              alt={content2[0].alt || ""}
            />
            <h3 className="">{content2[0].title}</h3>
          </div>
          <div className="flex flex-col w-24 my-3 text-center md:mx-3 2xs:w-32 xs:w-36 sm:w-64">
            <Image
              src={content2[1].logo}
              width={300}
              height={300}
              className="w-20 mx-auto mb-2 2xs:w-28 sm:w-32"
              alt={content2[1].alt || ""}
            />
            <h3 className="">{content2[1].title}</h3>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-col w-24 my-3 text-center md:mx-3 2xs:w-32 xs:w-36 sm:w-64">
            <Image
              src={content2[2].logo}
              width={300}
              height={300}
              className="w-20 mx-auto mb-2 2xs:w-28 sm:w-32"
              alt={content2[2].alt || ""}
            />
            <h3 className="">{content2[2].title}</h3>
          </div>
          <div className="flex flex-col w-24 my-3 text-center md:mx-3 2xs:w-32 xs:w-36 sm:w-64">
            <Image
              src={content2[3].logo}
              width={300}
              height={300}
              className="w-20 mx-auto mb-2 2xs:w-28 sm:w-32"
              alt={content2[3].alt || ""}
            />
            <h3 className="">{content2[3].title}</h3>
          </div>
        </div>
      </div>
      <div className="block py-5 mx-auto md:hidden">
        <LinkButtonColour Path={"/kodesprak"} Text={"Se kodespråk"} />
      </div>
    </div>
  );
}
