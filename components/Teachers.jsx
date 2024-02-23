"use client";

import Link from "next/link";
import Image from "next/image";

export default function Teachers({ content, title }) {
  return (
    <div className="flex flex-col items-center w-full py-20 bg-jobloop-secondary-orange">
      <h2 className="pb-10">{title}</h2>
      <div className="pt-0 pb-10 md:flex">
        <div className="flex flex-row pb-10 mx-auto md:flex-col w-80 md:mr-12 md:w-48 md:pb-0">
          <div className="w-1/2 pr-3 md:mb-2 md:h-[200px] md:w-full h-[170px]">
            <Image
              src={content[0].image}
              width={300}
              height={300}
              className="object-cover w-full h-full border border-white rounded"
            />
          </div>
          <div className="w-1/2 text-left md:w-full">
            <h3>{content[0].navn}</h3>
            <p>{content[0].role}</p>
          </div>
        </div>
        <div className="flex flex-row pb-10 mx-auto md:flex-col w-80 md:mr-12 md:w-48 md:pb-0">
          <div className="w-1/2 pr-3 md:mb-2 md:h-[200px] md:w-full h-[170px]">
            <Image
              src={content[1].image}
              width={300}
              height={300}
              className="object-cover w-full h-full border border-white rounded"
            />
          </div>
          <div className="w-1/2 text-left md:w-full">
            <h3>{content[1].navn}</h3>
            <p>{content[1].role}</p>
          </div>
        </div>
        <div className="flex flex-row pb-10 mx-auto md:flex-col w-80 md:mr-12 md:w-48 md:pb-0">
          <div className="w-1/2 pr-3 md:mb-2 md:h-[200px] md:w-full h-[170px]">
            <Image
              src={content[2].image}
              width={300}
              height={300}
              className="object-cover w-full h-full border border-white rounded"
            />
          </div>
          <div className="w-1/2 text-left md:w-full">
            <h3>{content[2].navn}</h3>
            <p>{content[2].role}</p>
          </div>
        </div>
        <div className="flex flex-row pb-10 mx-auto md:flex-col w-80 md:mr-12 md:w-48 md:pb-0">
          <div className="w-1/2 pr-3 md:mb-2 md:h-[200px] md:w-full h-[170px]">
            <Image
              src={content[3].image}
              width={300}
              height={300}
              className="object-cover w-full h-full border border-white rounded"
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
