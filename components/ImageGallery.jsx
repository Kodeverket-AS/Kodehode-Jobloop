"use client";

import Link from "next/link";
import Image from "next/image";

export default function ImageGallery({ content }) {
  return (
    <div className="flex px-8 py-20 gap-2 md:px-12 lg:px-24 w-full">
      <div className="flex flex-col gap-2 justify-between w-2/3 ">
        <div className="h-1/2">
          <Image
            src={content[0].image1}
            width={500}
            height={500}
            className="object-cover w-full h-full rounded"
            alt={content[0].alt1 || ""}
          />
        </div>
        <div className="h-1/2">
          <Image
            src={content[0].image2}
            width={500}
            height={500}
            className="object-cover w-full h-full rounded"
            alt={content[0].alt2 || ""}
          />
        </div>
      </div>
      <div className="h-full w-1/3">
        <Image
          src={content[0].image3}
          width={500}
          height={500}
          className="object-cover w-full h-full rounded"
          alt={content[0].alt3 || ""}
        />
      </div>
    </div>
  );
}
