"use client";

import Link from "next/link";
import Image from "next/image";

export default function Offices({ content }) {
  return (
    <div className="flex flex-col items-center w-screen px-8 py-10 md:w-full sm:px-10 md:px-12 lg:px-24">
      <h1 className="pb-10">Våre lokaler</h1>
      <div className="pt-0 pb-10 md:flex">
        <div className="flex flex-row justify-center pb-10 mx-auto md:flex-col w-72 md:mr-12 md:w-48 md:pb-0">
          <Image
            src={content[1].image}
            width={300}
            height={300}
            className="mr-3 border border-white rounded w-28 md:mb-2 md:w-full"
          />
          <div className="w-1/2 text-left md:w-full">
            <h2>{content[1].title}</h2>
            <p>{content[1].adresse}</p>
            <p>{content[1].postnr}</p>
          </div>
        </div>
        <div className="flex flex-row justify-center pb-10 mx-auto md:pb-0 w-72 md:mx-12 md:w-48 md:flex-col">
          <Image
            src={content[0].image}
            width={300}
            height={300}
            className="mr-3 border border-white rounded w-28 md:mb-2 md:w-full"
          />
          <div className="w-1/2 text-left md:w-full">
            <h2>{content[0].title}</h2>
            <p>{content[0].adresse}</p>
            <p>{content[0].postnr}</p>
          </div>
        </div>
        <div className="flex flex-row justify-center pb-10 mx-auto w-72 md:mx-12 md:w-48 md:pb-0 md:flex-col">
          <Image
            src={content[3].image}
            width={300}
            height={300}
            className="mr-3 border border-white rounded w-28 md:mb-2 md:w-full"
          />
          <div className="w-1/2 text-left md:w-full">
            <h2>{content[3].title}</h2>
            <p>{content[3].adresse}</p>
            <p>{content[3].postnr}</p>
          </div>
        </div>
        <div className="flex flex-row justify-center mx-auto w-72 md:ml-12 md:w-48 md:flex-col">
          <Image
            src={content[2].image}
            width={300}
            height={300}
            className="mr-3 border border-white rounded w-28 md:mb-2 md:w-full"
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
