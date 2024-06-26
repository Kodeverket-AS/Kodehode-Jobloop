"use client";

import Link from "next/link";
import Image from "next/image";
import danialigdery from "../public/danialigdery.jpg";
import { LinkButton, LinkButtonContained } from "./Buttons";
// import { PortableText } from "@portabletext/react";

export default function LandingHero({ content }) {
  return (
    <>
      <div className="group relative h-[80vh] w-screen">
        <Image
          src={content.image}
          height={500}
          width={2000}
          alt="Scenic landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm p-6 text-center text-white">
          <div className="space-y-4">
            <h1 className="text-6xl text-kv-white underline underline-offset-8 decoration-jobloop-primary-green group-hover:decoration-jobloop-primary-orange md:text-7xl lg:text-9xl">
              {content.title}
            </h1>
            <p className=" text-kv-white lg:text-3xl">
              Tilpasset opplæring og rekruttering til <br /> IT-bransjen
            </p>
          </div>
        </div>
      </div>

      <section className="flex flex-col-reverse justify-between py-12 px-4 lg:flex-row gap-4 md:gap-16 w-full">
        {/* <div className="text-lg lg:text-xl text-kv-black tracking-wide leading-relaxed pt-4">
                 <PortableText value={content.content} /> 
              </div> */}
        <div className="w-full ">
          <h2 className="underline decoration-4 pb-4 underline-offset-8 decoration-jobloop-primary-green">
            Hva gjør vi?
          </h2>
          <p className="text-xl pb-12 leading-normal md:text-2xl md:leading-normal">
            Vi rekrutterer kandidater som av ulike grunner har havnet utenfor
            arbeidslivet og lærer dem opp til å bli frontend-utviklere. Gjennom
            en kombinasjon av teoretisk opplæring og praksis vil kandidatene
            lære seg de viktigste teknologiene og bli klar for en karriere innen
            utvikling.
          </p>
          <LinkButtonContained
            Path={"/kontakt"}
            Text={"Kontakt oss"}
          />
        </div>

        <div className="w-full ">
          <Image
            width={800}
            alt="kodemiljø"
            src={danialigdery}
            className="object-contain rounded"
          />
        </div>
      </section>
    </>
  );
}
