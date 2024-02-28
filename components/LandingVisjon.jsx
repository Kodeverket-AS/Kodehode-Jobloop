"use client";

import Link from "next/link";
import Image from "next/image";
import { LinkButton } from "./Buttons";
import { PortableText } from "@portabletext/react";

export default function LandingVisjon({ content }) {
  return (
    <>
      <div className="flex flex-col justify-center gap-10 px-8 py-20 md:flex-row sm:px-10 md:px-12 lg:px-24">
        <div className="w-full md:w-1/2">
          <Image src={content.image} width={500} height={300} className="rounded" />
        </div>
        <div className="flex flex-col gap-4 md:w-1/2">
          <h2>{content.title}</h2>
          <PortableText value={content.content} />
          <div className="pt-5 mx-auto md:mx-0">
            <LinkButton Path={"/visjon"} Text={"Se mer"} />
          </div>
        </div>
      </div>
    </>
  );
}
