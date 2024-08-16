"use client";

import Link from "next/link";
import Image from "next/image";
import danialigdery from "../public/danialigdery.jpg";
import { LinkButton, LinkButtonContained } from "./Buttons";
// import { PortableText } from "@portabletext/react";
import { SectionComponent } from "./SectionComponent";
import { TextBlock } from "./TextBlockComponent";

export default function LandingHero({ content }) {
  const missionTitle = "Vi utdanner morgendagens utviklere";
  const missionStatement =
    "Vi rekrutterer kandidater som av ulike grunner har havnet utenfor arbeidslivet og lærer dem opp til å bli frontend-utviklere. Gjennom en kombinasjon av teoretisk opplæring og praksis vil kandidatene lære seg de viktigste teknologiene og bli klar for en karriere innen utvikling.";
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
            <p className="xl:opacity-0 transition-all group-hover:opacity-100 text-kv-white lg:text-3xl">
              Tilpasset opplæring og rekruttering til <br /> IT-bransjen
            </p>
          </div>
        </div>
      </div>

      <SectionComponent
        reverseLayoutOrder={true}
        leftContent={
          <TextBlock
            title={missionTitle}
            contentString={missionStatement}
            isButton={true}
            isContained={true}
            path={"/kontakt"}
            text={"Kontakt oss"}
          />
        }
        rightContent={
          <Image
            src={danialigdery}
            height={500}
            width={500}
            alt="kodemiljø"
            className="object-cover  w-full rounded-xl"
          />
        }
      />
    </>
  );
}
