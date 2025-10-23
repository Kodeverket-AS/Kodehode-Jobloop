"use client";
import Image from "next/image";
import { SectionComponent, TextBlock } from "./SectionComponents";

export default function LandingVisjon({ content }) {
  return (
    <SectionComponent
      leftContent={
        <div className="relative w-full h-[400px]">
          <Image
            src={content.image}
            alt={content.alt || ""}
            fill
            className="object-cover rounded-xl"
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
