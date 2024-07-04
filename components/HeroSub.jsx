"use client";

import Image from "next/image";
import { SectionComponent } from "./SectionComponent";
import { TextBlock, TextBlockHeader } from "./TextBlockComponent";

export default function HeroSub({ content, buttonText }) {
  return (
    <SectionComponent
      reverseLayoutOrder={true}
      leftContent={
        <TextBlockHeader
          title={content.title}
          content={content.content}
          isButton={true}
          isContained={true}
          path={"/kontakt"}
          text={"Kontakt oss"}
        />
      }
      rightContent={
        <Image
          src={content.image}
          width={500}
          height={500}
          alt={content.alt || ""}
          className="rounded w-full"
        />
      }
    />
  );
}
