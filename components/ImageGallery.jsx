"use client";

import Link from "next/link";
import Image from "next/image";

export default function ImageGallery({ content }) {
  return (
    <div className="py-10 flex px-5 md:px-0">
      <div className="pr-5 md:h-[550px] flex flex-col justify-between h-[250px] ">
        <div className="pb-5">
          <Image
            src={content[0].image1}
            width={500}
            height={300}
            className="rounded object-cover"
          />
        </div>
        <div className="pt-5">
          <Image
            src={content[0].image2}
            width={500}
            height={300}
            className="rounded object-cover h-full w-full"
          />
        </div>
      </div>
      <div className="pl-5 md:h-[550px] h-[250px]">
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