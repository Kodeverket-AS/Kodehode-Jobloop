"use client";

import Link from "next/link";
import Image from "next/image";
import danialigdery from "../public/danialigdery.jpg";
// import { LinkButton, LinkButtonContained } from "./Buttons";
// import { PortableText } from "@portabletext/react";
import { SectionComponent } from "./SectionComponents";
import { TextBlock } from "./TextBlockComponent";
import { LinkButtonContained } from "./Buttons";

export default function LandingHero({ content }) {
  const missionTitle = "Vi utdanner morgendagens utviklere";
  const missionStatement =
    "Vi rekrutterer kandidater som av ulike årsaker har havnet utenfor arbeidslivet og trener dem opp til å bli lovende junior utviklere. Gjennom en kombinasjon av teoretisk opplæring og praksis vil kandidatene lære seg de viktigste verktøyene for å bli klar til en karriere innen utvikling. Vårt fokus er å finne dyktige mennesker som sammen blir en god match.";
  // const missionStatement = content.content;

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
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-md p-6 text-center text-white">
          <div className="space-y-4">
            <h1 className="text-6xl text-kv-white underline transition-all duration-500 underline-offset-8 decoration-jobloop-primary-green group-hover:decoration-jobloop-primary-orange md:text-7xl lg:text-9xl">
              {content.title}
            </h1>
            <p className="text-kv-white lg:text-3xl">
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
            // When getting data from sanity, use the below code instead of contentString.
            // Remember to change the missionStatement variable to = content.content
            // content={missionStatement}
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
            className="object-cover w-full rounded-xl"
          />
        }
      />
    </>
  );
}
