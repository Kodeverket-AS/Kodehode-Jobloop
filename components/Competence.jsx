"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function Competence({ content1, content2 }) {
  //console.log(content1);
  return (
    <>
      <div className="w-1/2 py-20 text-center">
        <h1 className="mx-auto md:pb-10 md:w-96">{content1.title}</h1>
        <div className="hidden md:block">
          <PortableText value={content1.content} />
        </div>
      </div>
      <div className="flex pt-0 pb-10 md:py-10">
        <div className="flex flex-col items-center mr-4 w-14 md:mr-12 md:w-48">
          <Image
            src={content2[0].logo}
            width={300}
            height={300}
            className="w-auto h-24 mb-2"
          />
          <h2 className="text-center">{content2[0].title}</h2>
          <p className="hidden text-center md:block">{content2[0].content}</p>
        </div>
        <div className="flex flex-col items-center mx-4 w-14 md:mx-12 md:w-48">
          <Image
            src={content2[1].logo}
            width={300}
            height={300}
            className="w-auto h-24 mb-2"
          />
          <h2 className="text-center">{content2[1].title}</h2>
          <p className="hidden text-center md:block">{content2[1].content}</p>
        </div>
        <div className="flex flex-col items-center mx-4 w-14 md:mx-12 md:w-48">
          <Image
            src={content2[2].logo}
            width={300}
            height={300}
            className="w-auto h-24 mb-2"
          />
          <h2 className="text-center">{content2[2].title}</h2>
          <p className="hidden text-center md:block">{content2[2].content}</p>
        </div>
        <div className="flex flex-col items-center ml-4 w-14 md:ml-12 md:w-48">
          <Image
            src={content2[3].logo}
            width={300}
            height={300}
            className="w-auto h-24 mb-2"
          />
          <h2 className="text-center">{content2[3].title}</h2>
          <p className="hidden text-center md:block">{content2[3].content}</p>
        </div>
      </div>
    </>
  );
}