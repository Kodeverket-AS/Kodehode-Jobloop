"use client";

import Image from "next/image";
import { SectionComponent } from "../SectionComponent";
import { TextBlock } from "../TextBlockComponent";


export default function StudyInParts({ content }) {
  return (
    <section className="w-full">
      <SectionComponent
        leftContent={
          <TextBlock
            title={content[0].title}
            content={content[0].content}
            isButton={false}
          />
        }
        rightContent={
          <Image
            src={content[0].image}
            width={500}
            height={500}
            alt={content[0].alt || ""}
            className="rounded w-full"
          />
        }
      />

      <SectionComponent
        reverseLayoutOrder={true}
        leftContent={
          <Image
            src={content[1].image}
            width={500}
            height={500}
            alt={content[1].alt || ""}
            className="rounded w-full"
          />
        }
        rightContent={
          <TextBlock
            title={content[1].title}
            content={content[1].content}
            isButton={false}
          />
        }
      />
    </section>
  );
}
