"use client";

import Link from "next/link";
import Image from "next/image";
import danialigdery from "../public/danialigdery.jpg";
import { LinkButton } from "./Buttons";
import { PortableText } from "@portabletext/react";

export default function LandingHero({ content }) {
  return (
    <>
      {/* Mobile view */}
      <div className="absolute top-0 block w-full -z-10 md:hidden">
        <div className="w-full h-[18rem]">
          <div className=" absolute bg-gradient-to-b from-[rgba(34,34,34,0.82)] to-[rgba(34,34,34,0.33)] z-50 h-full w-full" />
          <Image
            src={content.image}
            width={500}
            height={500}
            className="object-cover w-full h-full"
            alt={content.alt}
          />
        </div>
        <div className="absolute left-0 right-0 z-50 text-kv-white top-24 2xs:top-28">
          <h1 className="text-3xl text-center">{content.title}</h1>
          <h2 className="px-8 text-center">
            Tilpasset opplæring og rekruttering til IT-bransjen
          </h2>
        </div>
        <div className="absolute z-50 p-8 bg-kv-white top-60 rounded-t-3xl 2xs:top-60 xs:top-[16.5rem] sm:top-[19rem]">
          <p>
            Vi rekrutterer kandidater som av ulike grunner har havnet utenfor
            arbeidslivet og lærer dem opp til å bli frontend-utviklere. Gjennom
            en kombinasjon av teoretisk opplæring og praksis vil kandidatene
            lære seg de viktigste teknologiene og bli klar for en karriere innen
            utvikling.
          </p>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="absolute top-0 left-0 flex justify-center w-full h-[26rem] -z-50 lg:h-[34rem] 2xl:h-[50rem]">
          <div className="absolute bg-gradient-to-b from-[rgba(34,34,34,0.82)] to-[rgba(34,34,34,0.33)] z-50 h-full w-full" />
          <Image
            height={500}
            width={2000}
            alt={content.alt || "lærer som forklarer"}
            src={content.image}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col items-center px-24 py-24 text-center 2xl:py-44 text-kv-white">
          <h1 className="text-6xl text-kv-white lg:text-9xl">
            {content.title}
          </h1>
          <p className="text-3xl text-kv-white lg:text-5xl">
            Tilpasset opplæring og rekruttering til IT-bransjen
          </p>
        </div>
      </div>

      {/* Desktop view */}
      <div className="flex-col hidden w-screen gap-32 pt-32 pb-0 md:flex lg:pt-36 2xl:pt-72">
        <div className="flex justify-center w-screen px-12 lg:px-24 2xl:max-w-[1600px] 2xl:mx-auto">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col w-1/2 gap-10 mr-5">
              <div className="text-lg text-jobloop-darker-green tracking-wide leading-relaxed border-t-4 border-jobloop-primary-green pt-4">
                <PortableText value={content.content} />
              </div>
              <div>
                <LinkButton
                  Path={"/kontakt"}
                  Text={"Kontakt oss"}
                />
              </div>
            </div>
            <div className="w-1/2 ml-5">
              <Image
                width={800}
                alt="kodemiljø"
                src={danialigdery}
                className="object-contain rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
