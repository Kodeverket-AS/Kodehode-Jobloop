"use client";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";
import PortableText from "react-portable-text";

export function ProjectScroll(content) {
  console.log(content.content);

  const data = content.content.map((item, index) => {
    return (
      <div
        className="w-[300px] h-[300px] p-10 overflow-hidden"
        id={index}
        key={item._id}
      >
        <div>
          <Image
            width={800}
            height={800}
            className="w-full"
            src={item.ImageTwo}
            alt="image"
          />
        </div>
        <div>
          <p className="text-sm text-black">{item.description}</p>
          {/* <PortableText className="text-black" item={item.content} /> */}
        </div>
      </div>
    );
  });

  const responsiveSettings = {
    1: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1280: { items: 3 },
  };

  return (
    <div className=" w-[320px] xl:lg:max-w-[1100px] lg:w-[1024px] md:w-[768px]">
      <AliceCarousel
        className="flex flex-col items-center justify-center"
        items={data}
        itemfit="cover"
        responsive={responsiveSettings}
      />
    </div>
  );
}

