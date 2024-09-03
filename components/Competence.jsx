"use client";

import Link from "next/link";
import Image from "next/image";
import { SectionComponent } from "./SectionComponents";
import { TextBlock } from "./TextBlockComponent";
import { PortableText } from "@portabletext/react";

const CompetenceCard = ({ src, alt, title, content }) => (
  <div className="group bg-kv-white w-full flex flex-col shadow-sm shadow-jobloop-primary-green hover:shadow-lg p-4 rounded-lg transition-all duration-300">
    <Image
      src={src}
      width={64}
      height={64}
      className="w-16 h-20"
      alt={alt || ""}
    />
    <div className="w-full ">
      <div className=" group-hover:border-jobloop-primary-green py-2 tracking-tight">
        <h3>{title}</h3>
        <div className="h-[2px] w-0 transition-all duration-500 group-hover:w-full shadow-inner rounded-full group-hover:shadow-jobloop-primary-green"></div>
      </div>
      <p className="text-sm leading-relaxed py-2">{content}</p>
    </div>
  </div>
);

export default function Competence({ content1, content2 }) {
  return (
    <SectionComponent
      reverseLayoutOrder={true}
      isBgColor={true}
      bgColorGreen={true}
      leftContent={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 justify-between md:justify-evenly">
          <CompetenceCard
            src={content2[0].logo}
            alt={content2[0].alt || ""}
            title={content2[0].title}
            content={content2[0].content}
          />
          <CompetenceCard
            src={content2[1].logo}
            alt={content2[1].alt || ""}
            title={content2[1].title}
            content={content2[1].content}
          />
          <CompetenceCard
            src={content2[2].logo}
            alt={content2[2].alt || ""}
            title={content2[2].title}
            content={content2[2].content}
          />
          <CompetenceCard
            src={content2[3].logo}
            alt={content2[3].alt || ""}
            title={content2[3].title}
            content={content2[3].content}
          />
        </div>
      }
      rightContent={
        <TextBlock
          title={content1.title}
          content={content1.content}
          isOrange={false}
        />
      }
    />
  );
}
