"use client";

import Link from "next/link";
import Image from "next/image";

export default function Teachers({ content }) {
  return (
    <div className="flex flex-col items-center w-full py-20 bg-jobloop-secondary-orange">
      <h1 className="pb-10">Våre veiledere</h1>
      <div className="pt-0 pb-10 md:flex">
        <div className="flex flex-row justify-center pb-10 mx-auto md:flex-col w-80 md:mr-12 md:w-48 md:pb-0">
          <div className="w-1/2 pr-3 md:mb-2 md:h-[200px] md:w-full h-[170px]">
            <Image
              src={content[0].image}
              width={300}
              height={300}
              className="object-cover w-full h-full border border-white rounded"
            />
          </div>
          <div className="w-1/2 text-left md:w-full">
            <h2>{content[0].navn}</h2>
            <p>{"Faglig veileder " + content[0].role}</p>
          </div>
        </div>
        <div className="flex flex-row justify-center pb-10 mx-auto md:flex-col w-80 md:mr-12 md:w-48 md:pb-0">
          <div className="w-1/2 pr-3 md:mb-2 md:h-[200px] md:w-full h-[170px]">
            <Image
              src={content[1].image}
              width={300}
              height={300}
              className="object-cover w-full h-full border border-white rounded"
            />
          </div>
          <div className="w-1/2 text-left md:w-full">
            <h2>{content[1].navn}</h2>
            <p>{"Faglig veileder " + content[1].role}</p>
          </div>
        </div>
        <div className="flex flex-row justify-center pb-10 mx-auto md:flex-col w-80 md:mr-12 md:w-48 md:pb-0">
          <div className="w-1/2 pr-3 md:mb-2 md:h-[200px] md:w-full h-[170px]">
            <Image
              src={content[2].image}
              width={300}
              height={300}
              className="object-cover w-full h-full border border-white rounded"
            />
          </div>
          <div className="w-1/2 text-left md:w-full">
            <h2>{content[2].navn}</h2>
            <p>{"Faglig veileder " + content[2].role}</p>
          </div>
        </div>
        <div className="flex flex-row justify-center pb-10 mx-auto md:flex-col w-80 md:mr-12 md:w-48 md:pb-0">
          <div className="w-1/2 pr-3 md:mb-2 md:h-[200px] md:w-full h-[170px]">
            <Image
              src={content[3].image}
              width={300}
              height={300}
              className="object-cover w-full h-full border border-white rounded"
            />
          </div>
          <div className="w-1/2 text-left md:w-full">
            <h2>{content[3].navn}</h2>
            <p>{"Faglig veileder " + content[3].role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
