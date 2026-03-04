"use client";
import Image from "next/image";
import { SectionComponent, TextBlock } from "./SectionComponents.jsx";

const ImageCard = ({ src, alt, title }) => (
  <div className="group bg-kv-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-jobloop-primary-green/10 hover:border-jobloop-primary-green/30 p-6 md:p-4 text-center cursor-pointer">
    <div className="flex flex-col items-center space-y-4 md:space-y-2">
      <div className="p-4 md:p-3 rounded-xl bg-jobloop-primary-green/10 group-hover:bg-jobloop-primary-orange/10 transition-colors duration-300">
        <Image
          src={src}
          width={80}
          height={80}
          className="w-16 h-16 md:w-12 md:h-12 object-contain"
          alt={alt || "Logo av teknologi"}
        />
      </div>
      <h3 className="text-lg md:text-base font-bold text-kv-black">{title}</h3>
    </div>
  </div>
);

export default function AdaptTech({ content1, content2 }) {
  return (
    <SectionComponent
      textFirstOnColumn={true}
      leftContent={
        <TextBlock
          title={content1[0].title}
          content={content1[0].content}
          isOrange={true}
          isContained={false}
          path={"/kodesprak"}
          text={"Se alle kodespråk"}
        />
      }
      rightContent={
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-3">
            <ImageCard
              src={content2[0].logo}
              alt={content2[0].alt || ""}
              title={content2[0].title}
            />
            <ImageCard
              src={content2[1].logo}
              alt={content2[1].alt || ""}
              title={content2[1].title}
            />
            <ImageCard
              src={content2[2].logo}
              alt={content2[2].alt || ""}
              title={content2[2].title}
            />
            <ImageCard
              src={content2[3].logo}
              alt={content2[3].alt || ""}
              title={content2[3].title}
            />
            <ImageCard
              src={content2[4].logo}
              alt={content2[4].alt || ""}
              title={content2[4].title}
            />
            <ImageCard
              src={content2[5].logo}
              alt={content2[5].alt || ""}
              title={content2[5].title}
            />
          </div>
        </div>
      }
    />
  );
}
