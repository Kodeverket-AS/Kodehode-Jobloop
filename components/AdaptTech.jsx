"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { LinkButton } from "./Buttons";

const ImageCard = ({ src, alt, title }) => (
  <div className="flex flex-col w-24 my-3 text-center 2xs:w-32 xs:w-36 sm:w-64">
    <Image
      src={src}
      width={300}
      height={300}
      className="w-20 mx-auto mb-2 2xs:w-28 sm:w-32"
      alt={alt || "Logo av teknologi"}
    />
    <h3 className="text-kv-black">{title}</h3>
  </div>
);

export default function AdaptTech({ content1, content2 }) {
  return (
    <div className="w-full bg-neutral-100">
      <div className="flex flex-col justify-between gap-8 mx-auto px-8 py-20 md:flex-row md:px-12 md:w-screen lg:px-24 2xl:justify-center 2xl:max-w-[1600px]">
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-kv-black ">{content1[0].title}</h2>
          <div>
            <div className="text-kv-black text-lg leading-relaxed">
              <PortableText value={content1[0].content} />
            </div>
          </div>
          <div className="hidden py-8 md:block">
            <LinkButton
              path={"/kodesprak"}
              text={"Se alle kodespråk"}
            />
          </div>
        </div>
        <div className="w-full mx-auto justify-center align-middle text-kv-black flex flex-col gap-4">
          <div className="w-full flex flex-row justify-between md:justify-center">
            <ImageCard
              src={content2[0].logo}
              alt={content2[0].alt || ""}
              title={content2[0].title}
            />
            <ImageCard
              src={content2[1].logo}
              alt={content2[1].alt || ""}
              title={content2[1].title}
            />
          </div>
          <div className="w-full flex flex-row justify-between md:justify-center">
            <ImageCard
              src={content2[2].logo}
              alt={content2[2].alt || ""}
              title={content2[2].title}
            />
            <ImageCard
              src={content2[3].logo}
              alt={content2[3].alt || ""}
              title={content2[3].title}
            />
          </div>
        </div>
        <div className="block py-8 mx-auto md:hidden">
          <LinkButton
            path={"/kodesprak"}
            text={"Se kodespråk"}
          />
        </div>
      </div>
    </div>
  );
}
