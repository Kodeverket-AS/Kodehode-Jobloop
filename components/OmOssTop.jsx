"use client";
import Image from "next/image";
import { SectionComponent } from "./SectionComponent";
import { TextBlock, TextBlockHeader } from "./TextBlockComponent";

export default function OmOssTop({ content, buttonText }) {
  return (
    <SectionComponent
      reverseLayoutOrder={true}
      leftContent={
        <TextBlockHeader
          title={content.title}
          content={content.content}
          isButton={true}
          path="/kontakt"
          text={buttonText}
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
