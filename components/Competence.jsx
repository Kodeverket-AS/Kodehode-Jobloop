"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

const CompetenceCard = ({ src, alt, title, content }) => (
  <div className="group w-full flex flex-col shadow-md hover:shadow-lg p-4 rounded transition-all">
    <Image
      src={src}
      width={64}
      height={64}
      className="w-16 h-20"
      alt={alt || ""}
    />
    <div className="w-full ">
      <div className="border-b-2 group-hover:border-jobloop-primary-orange py-2 tracking-tight">
        <h3>{title}</h3>
      </div>
      <p className="text-sm leading-relaxed py-2">{content}</p>
    </div>
  </div>
);

export default function Competence({ content1, content2 }) {
  //console.log(content1);
  return (
    <section className="w-screen py-12">
      <div className="flex flex-col md:flex-row-reverse justify-center gap-8 max-w-screen-2xl mx-auto px-4">
        <div className="w-full">
          <h2 className="underline underline-offset-8 pb-4 decoration-jobloop-primary-orange">
            {content1.title}
          </h2>
          <div className="text-lg leading-relaxed">
            <PortableText value={content1.content} />
          </div>
        </div>
        <div className=" w-full ">
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
    </section>
  );
}
