"use client";

import Link from "next/link";
import Image from "next/image";
import { LinkButton } from "./Buttons";
import { PortableText } from "@portabletext/react";

export default function LandingVisjon({ content }) {
  return (
    <div className="flex flex-col justify-between gap-10 px-8 py-20 md:flex-row sm:px-10 md:px-12 ">
      <div className="w-full">
        <Image
          src={content.image}
          width={500}
          height={500}
          alt={content.alt || ""}
          className="rounded w-full"
        />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <h2 className="underline underline-offset-8 decoration-jobloop-primary-green">
          {content.title}
        </h2>
        <div className="lg:text-xl">
          <PortableText value={content.content} />
        </div>
        <div className="pt-5">
          <LinkButton
            Path={"/visjon"}
            Text={"Les om vår visjon"}
          />
        </div>
      </div>
    </div>
  );
}
