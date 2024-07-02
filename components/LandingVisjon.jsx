"use client";

import Image from "next/image";
import { SectionComponent } from "./SectionComponent";
import { TextBlock } from "./TextBlockComponent";

export default function LandingVisjon({ content }) {
  return (
    <SectionComponent
      leftContent={
        <div>
          <Image
            src={content.image}
            width={500}
            height={500}
            alt={content.alt || ""}
            className="rounded w-full"
          />
        </div>
      }
      rightContent={
        <TextBlock
          title={content.title}
          content={content.content}
          isButton={true}
          path={"/visjon"}
          text={"Les om vår visjon"}
        />
      }
    />
  );
}
