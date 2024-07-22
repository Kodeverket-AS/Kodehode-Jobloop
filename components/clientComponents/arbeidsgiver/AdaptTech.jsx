"use client";

import Image from "next/image";
import { SectionComponent } from "../../SectionComponent.jsx";
import { TextBlock } from "../../TextBlockComponent.jsx";

const ImageCard = ({ src, alt, title }) => (
  <div className="flex flex-col w-24 my-3 text-center 2xs:w-32 xs:w-36 sm:w-64">
    <Image
      src={src}
      width={300}
      height={300}
      className="w-20 mx-auto mb-2 2xs:w-28 sm:w-32"
      alt={alt || "Logo av teknologi"}
    />
    <h3 className="text-kv-black">{title}</h3>
  </div>
);

export default function AdaptTech({ content1, content2 }) {
  return (
    <SectionComponent
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
        <div className="w-full mx-auto justify-center align-middle text-kv-black flex flex-col">
          <div className="w-full flex flex-row justify-between md:justify-center">
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
          </div>
          <div className="w-full flex flex-row justify-between md:justify-center">
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
          </div>
        </div>
      }
    />
  );
}
