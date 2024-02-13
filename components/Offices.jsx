"use client";

import Link from "next/link";
import Image from "next/image";

export default function Offices({ content }) {
  return (
    <div className="flex flex-col items-center w-full py-10 bg-jobloop-secondary-orange">
      <h1 className="pb-10">Våre lokaler</h1>
      <div className="pt-0 pb-10 md:flex">
        <div className="flex flex-row justify-center pb-10 mx-auto md:flex-col w-80 md:mr-12 md:w-48 md:pb-0">
          <Image
            src={content[1].image}
            width={300}
            height={300}
            className="w-1/2 mr-3 border border-white rounded md:mb-2 md:w-full"
          />
          <div className="w-1/2 text-left md:w-full">
            <h2>{content[1].title}</h2>
            <p>{content[1].adresse}</p>
            <p>{content[1].postnr}</p>
          </div>
        </div>
        <div className="flex flex-row justify-center pb-10 mx-auto md:pb-0 w-80 md:mx-12 md:w-48 md:flex-col">
          <Image
            src={content[0].image}
            width={300}
            height={300}
            className="w-1/2 mr-3 border border-white rounded md:mb-2 md:w-full"
          />
          <div className="w-1/2 text-left md:w-full">
            <h2>{content[0].title}</h2>
            <p>{content[0].adresse}</p>
            <p>{content[0].postnr}</p>
          </div>
        </div>
        <div className="flex flex-row justify-center pb-10 mx-auto w-80 md:mx-12 md:w-48 md:pb-0 md:flex-col">
          <Image
            src={content[3].image}
            width={300}
            height={300}
            className="w-1/2 mr-3 border border-white rounded md:mb-2 md:w-full"
          />
          <div className="w-1/2 text-left md:w-full">
            <h2>{content[3].title}</h2>
            <p>{content[3].adresse}</p>
            <p>{content[3].postnr}</p>
          </div>
        </div>
        <div className="flex flex-row justify-center mx-auto w-80 md:ml-12 md:w-48 md:flex-col">
          <Image
            src={content[2].image}
            width={300}
            height={300}
            className="w-1/2 mr-3 border border-white rounded md:mb-2 md:w-full"
          />
          <div className="w-1/2 text-left md:w-full">
            <h2>{content[2].title}</h2>
            <p>{content[2].adresse}</p>
            <p>{content[2].postnr}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
