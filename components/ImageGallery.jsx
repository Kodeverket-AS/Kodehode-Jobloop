"use client";

import Link from "next/link";
import Image from "next/image";

export default function ImageGallery({ content }) {
  return (
    <div className="py-10 flex px-5 md:px-0">
      <div className="md:pr-5 flex flex-col justify-between w-2/3 pr-2">
        <div className="md:pb-5 md:h-[275px] h-[125px] pb-2">
          <Image
            src={content[0].image1}
            width={500}
            height={300}
            className="rounded object-cover h-full w-full"
          />
        </div>
        <div className="md:pt-5 md:h-[275px] h-[125px] pt-2">
          <Image
            src={content[0].image2}
            width={500}
            height={300}
            className="rounded object-cover h-full w-full"
          />
        </div>
      </div>
      <div className="md:pl-5 md:h-[550px] h-[250px] w-1/3 pl-2">
        <Image
          src={content[0].image3}
          width={300}
          height={500}
          className="rounded object-cover w-full h-full"
        />
      </div>
    </div>
  );
}