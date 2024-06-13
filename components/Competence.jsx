"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

const CompetenceCard = ({ src, alt, title, content }) => (
  <div className="w-full flex flex-row gap-4 shadow-md p-4 rounded transition-all  md:flex-col hover:rotate-1">
    <Image
      src={src}
      width={300}
      height={300}
      className="w-20 h-20"
      alt={alt || ""}
    />
    <div className="w-full ">
      <div className="border-b-2 py-2 tracking-tight">
        <h3>{title}</h3>
      </div>
      <p className="text-sm leading-relaxed py-2">{content}</p>
    </div>
  </div>
);

export default function Competence({ content1, content2 }) {
  //console.log(content1);
  return (
    <div className="flex flex-col py-12 md:flex-row-reverse gap-4 2xl:max-w-[1600px]">
      <div className="flex flex-col gap-4 px-8 border-b-2 pb-4 md:w-screen md:border-none">
        <h2 className="tracking-tigh">{content1.title}</h2>
        <div className="text-lg leading-relaxed">
          <PortableText value={content1.content} />
        </div>
      </div>
      <div className=" w-full px-8 md:w-screen ">
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
      </div>
    </div>
  );
}
