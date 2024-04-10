"use client";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { LinkButton } from "./Buttons";


export function ProjectScroll(content) {
  console.log(content.content);

  const data = content.content.map((item, index) => {
    return (
      <div
        className="flex flex-col justify-center w-full h-full p-10 items-left gap-7"
        id={index}
        key={item._id}
      >
        <div>
          <Image
            width={800}
            height={800}
            className="w-full m-auto"
            src={item.ImageOne}
            alt={item.ImageOne.alt || "image"}
          />
        </div>
        <div>
          <Image
            width={800}
            height={800}
            className="w-full m-auto"
            src={item.ImageTwo}
            alt={item.ImageTwo.alt || "image"}
          />
        </div>
        <div className="flex w-full items-left justify-left">
          {/* <p className="text-sm text-kv-black">{item.description}</p> */}
          {item.content.map((block, blockIndex) => (
            <PortableText className="scale-[1] text-kv-black" key={blockIndex} value={block} />
          ))}
        </div>
      </div>
    );
  });

  const responsiveSettings = {
    1: { items: 1 },
    768: { items: 1 },
    1024: { items: 1 },
    1280: { items: 1 },
  };

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="grid gap-7">
        <div className="flex justify-center w-[320px] xl:lg:max-w-[1100px] lg:w-[1024px] md:w-[768px]">
          <AliceCarousel
            className="flex flex-col items-center justify-center h-fit"
            items={data}
            itemfit="contain"
            responsive={responsiveSettings}
          />
        </div>
      </div>
    </div>
  );
}

export function CooptScroll(content) {
  console.log(content.content);

  const data = content.content.map((item, index) => {
    return (
      <div
        className="flex flex-col items-center justify-center w-full h-full gap-10 p-10"
        id={index}
        key={item._id}
      >
        <div>
          <Image
            width={800}
            height={800}
            className="w-full m-auto"
            src={item.image}
            alt={item.image.alt || "image"}
          />
        </div>
        <div className="flex items-center justify-center w-full">
          {/* <p className="text-sm text-kv-black">{item.description}</p> */}
          {item.content.map((block, blockIndex) => (
            <PortableText
              className="scale-[1] w-4/6 text-kv-black"
              key={blockIndex}
              value={block}
            />
          ))}
        </div>
      </div>
    );
  });

  const responsiveSettings = {
    1: { items: 1 },
    768: { items: 1 },
    1024: { items: 1 },
    1280: { items: 1 },
  };

  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="grid gap-7">
        <div className="flex justify-center w-[320px] xl:lg:max-w-[1100px] lg:w-[1024px] md:w-[768px]">
          <AliceCarousel
            className="flex flex-col items-center justify-center h-fit"
            items={data}
            itemfit="contain"
            responsive={responsiveSettings}
          />
        </div>
      </div>
    </div>
  );
}
