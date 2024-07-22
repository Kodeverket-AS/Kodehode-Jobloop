"use client";

import Image from "next/image";
import { SectionComponent } from "../../../../components/SectionComponent";
import { TextBlock, TextBlockHeader } from "../../../../components/TextBlockComponent";

export default function VisionTop({ content }) {
  return (
    <SectionComponent
      reverseLayoutOrder={true}
      className="pb-44"
      leftContent={
        <TextBlockHeader
          title={content.title}
          content={content.content}
          isButton={true}
          path="/kontakt"
          text="Kontakt oss"
          isContained={true}
          isOrange={false}
        />
      }
      rightContent={
        <Image
          src={content.image}
          width={1080}
          height={964}
          className="mx-auto my-auto w-11/12 rounded pt-36"
          alt={content.alt || ""}
        />
      }
    />
  );
}
