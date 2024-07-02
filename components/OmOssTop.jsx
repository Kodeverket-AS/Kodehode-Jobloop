"use client";
import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { LinkButtonContained } from "./Buttons";

export default function OmOssTop({ content, buttonText }) {
  return (
    <section className="w-screen py-12">
      <div className="flex flex-col xl:flex-row justify-center gap-8 max-w-screen-2xl mx-auto px-4">
        <div className="flex w-full h-auto ">
          <Image
            src={content.image}
            alt="Bilde av ansatte i Kodehode"
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Text container */}
        <div className="w-full ">
          <h1 className=" md:text-4xl underline underline-offset-8 pb-4 decoration-jobloop-primary-green">
            {content.title}
          </h1>
          <div className="pb-12 leading-normal text-xl lg:text-2xl lg:leading-normal">
            <PortableText value={content.content} />
          </div>
          <div>
            <LinkButtonContained
              path="/kontakt"
              text={buttonText}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
