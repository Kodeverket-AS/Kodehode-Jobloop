"use client";

import Link from "next/link";
import Image from "next/image";

export default function EgenskapCoop({content}) {
  return (
    <div className="flex flex-col items-center w-full py-10 bg-jobloop-primary-green">
      <h1 className="pb-10">Hva ser Kodehode etter hos samarbeidspartnere?</h1>
      <div className="flex">
        <div className="flex flex-col items-center mr-4 w-14 md:mr-12 md:w-36">
          <Image
            src={content[3].image}
            width={300}
            height={300}
            className="w-20 mb-2"
          />
          <h2 className="text-center">{content[3].header}</h2>
          <p className="hidden text-center md:block">{content[3].content}</p>
        </div>
        <div className="flex flex-col items-center mx-4 w-14 md:mx-12 md:w-36">
          <Image
            src={content[2].image}
            width={300}
            height={300}
            className="w-20 mb-2"
          />
          <h2 className="text-center">{content[2].header}</h2>
          <p className="hidden text-center md:block">{content[2].content}</p>
        </div>
        <div className="flex flex-col items-center mx-4 w-14 md:mx-12 md:w-36">
          <Image
            src={content[1].image}
            width={300}
            height={300}
            className="w-20 mb-2"
          />
          <h2 className="text-center">{content[1].header}</h2>
          <p className="hidden text-center md:block">{content[1].content}</p>
        </div>
        <div className="flex flex-col items-center ml-4 w-14 md:ml-12 md:w-36">
          <Image
            src={content[0].image}
            width={300}
            height={300}
            className="w-20 mb-2"
          />
          <h2 className="text-center">{content[0].header}</h2>
          <p className="hidden text-center md:block">{content[0].content}</p>
        </div>
      </div>
    </div>
  );
}