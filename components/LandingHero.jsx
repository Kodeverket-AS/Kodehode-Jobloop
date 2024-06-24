"use client";

import Link from "next/link";
import Image from "next/image";
import danialigdery from "../public/danialigdery.jpg";
import { LinkButton, LinkButtonContained } from "./Buttons";
import { PortableText } from "@portabletext/react";

export default function LandingHero({ content }) {
  return (
    <>
      <div className="relative h-[80vh] w-screen">
        <Image
          src={content.image}
          height={500}
          width={2000}
          alt="Scenic landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-6 text-center text-white">
          <div className="space-y-4">
            <h1 className="text-6xl text-kv-white md:text-7xl lg:text-9xl">
              {content.title}
            </h1>
            <p className=" text-kv-white lg:text-3xl">
              Tilpasset opplæring og rekruttering til <br /> IT-bransjen
            </p>
          </div>
        </div>
      </div>
      <div className="bg-kv-white bg-opacity-90 rounded-md backdrop-blur-md pt-4 px-4 pb-8 md:pb-0 flex flex-col justify-between w-full gap-32 md:flex-row">
        <div className="flex justify-center px-4">
          <div className="flex flex-col-reverse lg:flex-row gap-4 lg:gap-12 w-full">
            <div className="flex flex-col w-full md:w-1/2 gap-10">
              {/* <div className="text-lg lg:text-xl text-kv-black tracking-wide leading-relaxed pt-4">
                 <PortableText value={content.content} /> 
              </div> */}
              <div className="flex flex-col gap-4">
                <h2 className="underline decoration-4 underline-offset-8 decoration-jobloop-primary-green">
                  Hva gjør vi?
                </h2>
                <p className="text-lg md:text-3xl text-neutral-500">
                  Vi rekrutterer kandidater som av ulike grunner har havnet
                  utenfor arbeidslivet og lærer dem opp til å bli
                  frontend-utviklere. Gjennom en kombinasjon av teoretisk
                  opplæring og praksis vil kandidatene lære seg de viktigste
                  teknologiene og bli klar for en karriere innen utvikling.
                </p>
              </div>
              <div>
                <LinkButtonContained
                  Path={"/kontakt"}
                  Text={"Kontakt oss"}
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
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
