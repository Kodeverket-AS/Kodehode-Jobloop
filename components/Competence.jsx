"use client";
import Image from "next/image";
import { TextBlock } from "./SectionComponents";

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
    <section className="w-screen bg-jobloop-primary-green/10 py-8">
      <div className="max-w-screen-2xl mx-auto px-4 flex flex-col gap-8">
        <TextBlock
          title={content1.title}
          content={content1.content}
          isOrange={false}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {content2?.map((item) => (
            <CompetenceCard
              key={item._id}
              src={item.logo}
              alt={item.alt || ""}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
