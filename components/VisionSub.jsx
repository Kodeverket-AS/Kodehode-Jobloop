"use client";
import Image from "next/image";
import { SectionComponent, TextBlock } from "./SectionComponents";

export default function VisionTop({ content }) {
  return (
    <SectionComponent
      reverseLayoutOrder={true}
      leftContent={
        <TextBlock
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
          className="mx-auto w-full my-auto rounded"
          alt={content.alt || ""}
        />
      }
    />
  );
}
