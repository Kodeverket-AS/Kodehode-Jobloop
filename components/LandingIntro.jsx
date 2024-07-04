"use client";

import Link from "next/link";
import Image from "next/image";
import danialigdery from "../public/danialigdery.jpg";
import { LinkButton, LinkButtonContained } from "./Buttons";
// import { PortableText } from "@portabletext/react";
import { SectionComponent } from "./SectionComponent";
import { TextBlock } from "./TextBlockComponent";


export default function LandingIntro({ content }) {
    const missionTitle = "Hva gjør vi?";
    const missionStatement =
      "Vi rekrutterer kandidater som av ulike grunner har havnet utenfor arbeidslivet og lærer dem opp til å bli frontend-utviklere. Gjennom en kombinasjon av teoretisk opplæring og praksis vil kandidatene lære seg de viktigste teknologiene og bli klar for en karriere innen utvikling.";
return(
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
    className="object-contain w-full rounded"
  />
 
}

/>
)
}
