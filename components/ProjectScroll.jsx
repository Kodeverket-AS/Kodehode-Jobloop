"use client";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import PortableText from "react-portable-text";

export function ProjectScroll(content) {
  console.log(content.content);

  const data = content.content.map((item, index) => {
    return (
      <div className="flex flex-col items-center justify-center w-full h-full p-10" id={index} key={item._id}>
        <div>
          <Image
            width={800}
            height={800}
            className="w-2/3 m-auto"
            src={item.ImageTwo}
            alt="image"
          />
        </div>
        <div className="flex items-center justify-center">
          {/* <p className="text-sm text-black">{item.description}</p> */}
          {item.content.map((block, blockIndex) => (
            <PortableText
              className="scale-[0.7] text-black"
              key={blockIndex}
              content={block}
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
