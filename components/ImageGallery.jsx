"use client";

import Link from "next/link";
import Image from "next/image";

export default function ImageGallery({ content }) {
  return (
    <div className="flex px-8 py-20 sm:px-10 md:px-12 lg:px-24">
      <div className="flex flex-col justify-between w-2/3 pr-2 md:pr-5">
        <div className="md:pb-5 md:h-[275px] h-[125px] pb-2">
          <Image
            src={content[0].image1}
            width={500}
            height={300}
            className="object-cover w-full h-full rounded"
          />
        </div>
        <div className="md:pt-5 md:h-[275px] h-[125px] pt-2">
          <Image
            src={content[0].image2}
            width={500}
            height={300}
            className="object-cover w-full h-full rounded"
          />
        </div>
      </div>
      <div className="md:pl-5 md:h-[550px] h-[250px] w-1/3 pl-2">
        <Image
          src={content[0].image3}
          width={300}
          height={500}
          className="object-cover w-full h-full rounded"
        />
      </div>
    </div>
  );
}