"use client";

import Link from "next/link";
import Image from "next/image";
import { LinkButton } from "./Buttons";
import { PortableText } from "@portabletext/react";

export default function LandingVisjon({ content }) {
  return (
    <section className="w-screen py-12">
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-screen-2xl mx-auto px-4">
        <div className="w-full">
          <Image
            src={content.image}
            width={500}
            height={500}
            alt={content.alt || ""}
            className="rounded w-full"
          />
        </div>
        <div className="w-full">
          <h2 className="underline underline-offset-8 pb-4 decoration-jobloop-primary-orange">
            {content.title}
          </h2>
          <div className="pb-12 leading-normal text-xl lg:text-2xl lg:leading-normal">
            <PortableText value={content.content} />
          </div>
          <LinkButton
            path={"/visjon"}
            text={"Les om vår visjon"}
          />
        </div>
      </div>
    </section>
  );
}
