"use client";

import InternshipCard from "./InternshipCard";
import { SectionComponent } from "./SectionComponent";
import { TextBlock } from "./TextBlockComponent";

export default function KodehodeInternship({ content1, content2 }) {
  return (
    <SectionComponent
      leftContent={
        <TextBlock
          content={content1[0].content1}
          content2={content1[0].content2}
          content3={content1[0].content3}
          title={content1[0].title}
          isOrange={true}
          isButton={false}
          path={"/kontakt"}
          text={"Kontakt oss"}
          isContained={false}
        />
      }
      rightContent={
        <InternshipCard
          key={content2[0]._id}
          content={content2[0]}
        />
      }
    />
  );
}
