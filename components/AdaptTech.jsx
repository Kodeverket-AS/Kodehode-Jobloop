"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { LinkButtonColour } from "./Buttons";

export default function AdaptTech({ content1, content2 }) {
  return (
    <div className="flex flex-row w-full px-8 py-20 md:flex-row md:px-24 bg-jobloop-secondary-orange">
      <div className="flex-col w-full md:w-1/2 md:flex">
        <h1 className="text-white ">{content1[0].title}</h1>
        <div className="">
          <div className="py-5">
            <PortableText value={content1[0].content} />
          </div>
          <div className="block py-5 md:hidden">
            <LinkButtonColour Path={"/techstack"} Text={"Se kodespråk"} />
          </div>
          <div className="hidden py-5 md:block">
            <LinkButtonColour Path={"/techstack"} Text={"Se alle kodespråk"} />
          </div>
        </div>
      </div>
      <div className="w-full px-0 text-white md:px-10 md:w-1/2">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col mx-3 my-3 text-center w-14 md:w-20">
            <Image
              src={content2[0].logo}
              width={300}
              height={300}
              className="mb-2 md:w-20 w-14"
            />
            <h1>{content2[0].title}</h1>
          </div>
          <div className="flex flex-col mx-3 my-3 text-center w-14 md:w-20">
            <Image
              src={content2[1].logo}
              width={300}
              height={300}
              className="mb-2 md:w-20 w-14"
            />
            <h1>{content2[1].title}</h1>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col mx-3 my-3 text-center w-14 md:w-20">
            <Image
              src={content2[2].logo}
              width={300}
              height={300}
              className="mb-2 md:w-20 w-14"
            />
            <h1>{content2[2].title}</h1>
          </div>
          <div className="flex flex-col mx-3 my-3 text-center w-14 md:w-20">
            <Image
              src={content2[3].logo}
              width={300}
              height={300}
              className="mb-2 md:w-20 w-14"
            />
            <h1>{content2[3].title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
