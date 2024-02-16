"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { LinkButtonColour } from "./Buttons";

export default function AdaptTech({ content1, content2 }) {
  return (
    <div className="flex flex-col w-full px-8 py-20 md:flex-row md:px-24 bg-jobloop-secondary-orange">
      <div className="flex-col w-full md:w-1/2 md:flex">
        <h2 className="text-white ">{content1[0].title}</h2>
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
      <div className="w-full text-white align-center md:px-10 md:w-1/2">
        <div className="flex flex-row justify-center">
          <div className="flex flex-col mx-[auto] md:mx-3 my-3 text-center w-20 justify-center min-w-fit">
            <Image
              src={content2[0].logo}
              width={300}
              height={300}
              className="mb-2 mx-[auto] md:w-20 w-14"
            />
            <h3 className="min-w-fit">{content2[0].title}</h3>
          </div>
          <div className="flex flex-col mx-[auto] md:mx-3 my-3 text-center w-20 min-w-fit">
            <Image
              src={content2[1].logo}
              width={300}
              height={300}
              className="mb-2 mx-[auto] md:w-20 w-14"
            />
            <h3 className=" min-w-fit">{content2[1].title}</h3>
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="flex flex-col mx-[auto] md:mx-3 my-3 align-center text-center w-20 min-w-fit">
            <Image
              src={content2[2].logo}
              width={300}
              height={300}
              className="mb-2 mx-[auto] md:w-20 w-14"
            />
            <h3 className=" min-w-fit">{content2[2].title}</h3>
          </div>
          <div className="flex flex-col mx-[auto] md:mx-3 my-3 text-center w-20 min-w-fit">
            <Image
              src={content2[3].logo}
              width={300}
              height={300}
              className="mb-2 mx-[auto] md:w-20 w-14"
            />
            <h3 className=" min-w-fit">{content2[3].title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
