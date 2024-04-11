"use client";

import Image from "next/image";

export default function Offices({ content }) {
  return (
    <div className="flex flex-col items-center w-full px-8 py-10 md:w-full sm:px-10 md:px-12 lg:px-24">
      <h2 className="pb-10">Våre lokaler</h2>
      <div className="w-full pt-0 gap-8 pb-10 md:flex-wrap md:flex md:justify-center xl:max-w-[1600px]">
        {content.map((offices, index) => (
          <div
            key={offices.id + index}
            className="flex flex-row justify-between w-full h-full pb-10 mx-auto 2xs:mx-0 md:flex-col md:w-40 lg:w-48 md:pb-0"
          >
            <Image
              src={offices.image}
              width={1000}
              height={1000}
              className="object-cover w-24 h-full mr-3 border rounded border-kv-white 2xs:portrait:w-1/2 md:mb-2 md:w-full md:portrait:w-full md:mr-0"
              alt={offices.alt || ""}
            />
            <div className="w-40 text-left sm:w-full xs:w-1/2 md:w-full">
              <h2>{offices.title}</h2>
              <p>{offices.adresse}</p>
              <p>{offices.postnr}</p>
            </div>
          </div>
        ))}
        {/* <div className="flex flex-row justify-between w-full pb-10 mx-auto 2xs:mx-0 md:flex-col md:w-40 lg:w-48 md:pb-0">
          <Image
            src={content[1].image}
            width={300}
            height={300}
            className="w-24 mr-3 border rounded border-kv-white 2xs:w-1/2 md:mb-2 md:w-full md:mr-0"
            alt={content[1].alt || ""}
          />
          <div className="w-40 text-left xs:w-1/2 md:w-full">
            <h2>{content[1].title}</h2>
            <p>{content[1].adresse}</p>
            <p>{content[1].postnr}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full pb-10 mx-auto 2xs:mx-0 md:pb-0 md:w-40 lg:w-48 md:flex-col">
          <Image
            src={content[0].image}
            width={300}
            height={300}
            className="w-24 mr-3 border rounded border-kv-white 2xs:w-1/2 md:mb-2 md:w-full md:mr-0"
            alt={content[0].alt || ""}
          />
          <div className="w-40 text-left xs:w-1/2 md:w-full">
            <h2>{content[0].title}</h2>
            <p>{content[0].adresse}</p>
            <p>{content[0].postnr}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full pb-10 mx-auto 2xs:mx-0 md:w-40 lg:w-48 md:pb-0 md:flex-col">
          <Image
            src={content[3].image}
            width={300}
            height={300}
            className="w-24 mr-3 border rounded border-kv-white md:mr-0 2xs:w-1/2 md:mb-2 md:w-full"
            alt={content[3].alt || ""}
          />
          <div className="w-40 text-left xs:w-1/2 md:w-full">
            <h2>{content[3].title}</h2>
            <p>{content[3].adresse}</p>
            <p>{content[3].postnr}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full mx-auto 2xs:mx-0 md:w-40 lg:w-48 md:flex-col">
          <Image
            src={content[2].image}
            width={300}
            height={300}
            className="w-24 mr-3 border rounded border-kv-white 2xs:w-1/2 md:mb-2 md:w-full md:mr-0"
            alt={content[2].alt || ""}
          />
          <div className="w-40 text-left xs:w-1/2 md:w-full">
            <h2>{content[2].title}</h2>
            <p>{content[2].adresse}</p>
            <p>{content[2].postnr}</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
