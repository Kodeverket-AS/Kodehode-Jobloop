"use client";

import Link from "next/link";
import Image from "next/image";
import danialigdery from "../public/danialigdery.jpg";
import { ContactBtn } from "./ContactBtn";
import { SeMerBtn } from "./SeMerBtn";
import { LinkButton } from "./Buttons";
import { PortableText } from "@portabletext/react";

export default function LandingHero({ content }) {
  return (
    <>
      <div>
        <div className="absolute top-0 left-0 flex justify-center w-full -z-50">
          <div className=" absolute bg-gradient-to-b from-[rgba(34,34,34,0.82)] to-[rgba(34,34,34,0.33)] z-50 h-full w-full" />
          <Image
            height={500}
            width={2000}
            alt="lærer som forklarer"
            src={content.image}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col items-center min-h-screen p-24 text-center text-white ">
          <h1 className="text-white text-9xl">{content.title}</h1>
          <p className="text-5xl text-white">
            Kodekurs og rekruttering til IT-bransjen
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-32">
        <div className="flex justify-center w-screen ">
          <div className="flex flex-row justify-center w-5/6 gap-x-10">
            <div className="flex flex-col w-3/6 gap-20">
              <div>
                <PortableText value={content.content} />
              </div>
              <div>
                <LinkButton Path={"/contact"} Text={"Kontakt oss"} />
              </div>
            </div>
            <div className="h-2/6">
              <Image
                width={800}
                alt="kodemiljø"
                src={danialigdery}
                className="object-contain "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
