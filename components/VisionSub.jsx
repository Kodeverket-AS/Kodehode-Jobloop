"use client";

import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { LinkButtonContained } from "./Buttons";

export default function VisionTop({ content }) {
  return (
    <section className="w-screen py-12">
      <div className="flex flex-col xl:flex-row-reverse justify-center gap-12 max-w-screen-2xl mx-auto px-4">
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
          <h2 className="lg:text-4xl underline underline-offset-8 pb-4 decoration-jobloop-primary-green">
            {content.title}
          </h2>

          <div className="leading-normal text-xl lg:text-2xl lg:leading-normal">
            <PortableText value={content.content} />
          </div>
          <div className="flex justify-start py-8">
            <LinkButtonContained
              path="/kontakt"
              text="Kontakt oss"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
