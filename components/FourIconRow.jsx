"use client";

import Link from "next/link";
import Image from "next/image";

export default function FourIconRow({ content }) {
  return (
    <div className="flex flex-col items-center w-full py-10 bg-jobloop-primary-green">
      <h1 className="pb-10">{content[0].title}</h1>
      <div className="flex">
        <div className="flex flex-col items-center mr-4 w-14 md:mr-12 md:w-36">
          <Image
            src={content[1].logo}
            width={300}
            height={300}
            className="w-20 mb-2"
          />
          <h2>{content[1].title}</h2>
          <p className="hidden text-center md:block">{content[1].content}</p>
        </div>
        <div className="flex flex-col items-center mx-4 w-14 md:mx-12 md:w-36">
          <Image
            src={content[2].logo}
            width={300}
            height={300}
            className="w-20 mb-2"
          />
          <h2>{content[2].title}</h2>
          <p className="hidden text-center md:block">{content[2].content}</p>
        </div>
        <div className="flex flex-col items-center mx-4 w-14 md:mx-12 md:w-36">
          <Image
            src={content[4].logo}
            width={300}
            height={300}
            className="w-20 mb-2"
          />
          <h2>{content[4].title}</h2>
          <p className="hidden text-center md:block">{content[4].content}</p>
        </div>
        <div className="flex flex-col items-center ml-4 w-14 md:ml-12 md:w-36">
          <Image
            src={content[3].logo}
            width={300}
            height={300}
            className="w-20 mb-2"
          />
          <h2>{content[3].title}</h2>
          <p className="hidden text-center md:block">{content[3].content}</p>
        </div>
      </div>
    </div>
  );
}
