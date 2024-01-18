"use client";

import Link from "next/link";
import Image from "next/image";

export default function Offices({ content }) {
  return (
    <div className="flex flex-col items-center w-full py-10 bg-jobloop-orange">
      <h1 className="pb-10">Våre lokaler</h1>
      <div className="flex pt-0 pb-10">
        <div className="flex flex-col items-center mr-4 w-14 md:mr-12 md:w-48">
          <Image
            src={content[0].image}
            width={300}
            height={300}
            className="w-auto h-24 mb-2"
          />
          <h2>{content[0].title}</h2>
          <p className="">{content[0].adresse}</p>
          <p>{content[0].postnr}</p>
        </div>
        <div className="flex flex-col items-center mx-4 w-14 md:mx-12 md:w-48">
          <Image
            src={content[3].image}
            width={300}
            height={300}
            className="w-auto h-24 mb-2"
          />
          <h2>{content[3].title}</h2>
          <p className="">{content[3].adresse}</p>
          <p>{content[3].postnr}</p>
        </div>
        <div className="flex flex-col items-center mx-4 w-14 md:mx-12 md:w-48">
          <Image
            src={content[1].image}
            width={300}
            height={300}
            className="w-auto h-24 mb-2"
          />
          <h2>{content[1].title}</h2>
          <p className="">{content[1].adresse}</p>
          <p>{content[1].postnr}</p>
        </div>
        <div className="flex flex-col items-center ml-4 w-14 md:ml-12 md:w-48">
          <Image
            src={content[2].image}
            width={300}
            height={300}
            className="w-auto h-24 mb-2"
          />
          <h2>{content[2].title}</h2>
          <p className="">{content[2].adresse}</p>
          <p>{content[2].postnr}</p>
        </div>
      </div>
    </div>
  );
}