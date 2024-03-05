"use client";

import Link from "next/link";
import Image from "next/image";

export default function Teachers({ content, title }) {
  return (
    <div className="flex flex-col items-center w-full px-8 py-20 bg-jobloop-secondary-orange sm:px-10 md:px-12 lg:px-24 md:w-screen">
      <h2 className="pb-10">{title}</h2>
      <div className="pt-0 pb-10 md:justify-between md:w-full md:flex lg:max-w-[832px]">
        <div className="flex flex-row w-full pb-10 mx-auto md:flex-col md:w-28 md:pb-0 md:mx-0 lg:w-36">
          <div className="w-1/2 pr-3 md:mb-2 md:h-[150px] md:w-full h-[170px] md:pr-0">
            <Image
              src={content[0].image}
              width={300}
              height={300}
              className="relative object-cover w-full h-full border border-white rounded"
              alt={content[0].alt || ""}
            />
          </div>
          <div className="w-1/2 text-left md:w-full">
            <h3>{content[0].navn}</h3>
            <p>{content[0].role}</p>
          </div>
        </div>
        <div className="flex flex-row w-full pb-10 mx-auto md:flex-col md:w-28 md:pb-0 md:mx-0 lg:w-36">
          <div className="w-1/2 pr-3 md:mb-2 md:h-[150px] md:w-full h-[170px] md:pr-0">
            <Image
              src={content[1].image}
              width={300}
              height={300}
              className="object-cover w-full h-full border border-white rounded"
              alt={content[1].alt || ""}
            />
          </div>
          <div className="w-1/2 text-left md:w-full">
            <h3>{content[1].navn}</h3>
            <p>{content[1].role}</p>
          </div>
        </div>
        <div className="flex flex-row w-full pb-10 mx-auto md:flex-col md:w-28 md:pb-0 md:mx-0 lg:w-36">
          <div className="w-1/2 pr-3 md:mb-2 md:h-[150px] md:w-full h-[170px] md:pr-0">
            <Image
              src={content[2].image}
              width={300}
              height={300}
              className="object-cover w-full h-full border border-white rounded"
              alt={content[2].alt || ""}
            />
          </div>
          <div className="w-1/2 text-left md:w-full">
            <h3>{content[2].navn}</h3>
            <p>{content[2].role}</p>
          </div>
        </div>
        <div className="flex flex-row w-full pb-10 mx-auto md:flex-col md:w-28 md:pb-0 md:mx-0 lg:w-36">
          <div className="w-1/2 pr-3 md:mb-2 md:h-[150px] md:w-full h-[170px] md:pr-0">
            <Image
              src={content[3].image}
              width={300}
              height={300}
              className="object-cover w-full h-full border border-white rounded"
              alt={content[3].alt || ""}
            />
          </div>
          <div className="w-1/2 text-left md:w-full">
            <h3>{content[3].navn}</h3>
            <p>{content[3].role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
