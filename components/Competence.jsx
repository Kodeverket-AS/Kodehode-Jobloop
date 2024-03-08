"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export default function Competence({ content1, content2 }) {
  //console.log(content1);
  return (
    <>
      <div className="px-8 py-10 md:w-screen sm:px-10 md:px-12 lg:px-24">
        <h2 className="mx-auto md:pb-10 md:w-[38rem]">{content1.title}</h2>
        <div className="hidden mx-auto w-[38rem] lg:w-[45rem] md:block">
          <PortableText value={content1.content} />
        </div>
      </div>
      <div className="flex flex-col w-full px-8 pt-0 pb-10 md:flex-row md:py-10 md:w-screen sm:px-10 md:px-12 md:justify-between lg:px-24 xl:px-0 lg:gap-16 xl:gap-32 xl:max-w-[1088px]">
        <div className="flex flex-row justify-between mb-5 md:mb-0 md:justify-evenly md:w-1/2 lg:gap-16 xl:gap-32">
          <div className="flex flex-col items-center w-24 mr-2 md:items-start md:mr-0 md:w-36 2xs:w-28 xs:w-32 sm:w-56 lg:w-40 xl:w-44">
            <Image
              src={content2[0].logo}
              width={300}
              height={300}
              className="w-auto h-24 mb-2 lg:h-28 xl:h-32"
              alt={content2[0].alt || ""}
            />
            <h3 className="">{content2[0].title}</h3>
            <p className="hidden sm:block">{content2[0].content}</p>
          </div>
          <div className="flex flex-col items-center ml-2 item md:items-start md:mx-0 md:w-36 2xs:w-28 xs:w-32 sm:w-56 lg:w-40 xl:w-44">
            <Image
              src={content2[1].logo}
              width={300}
              height={300}
              className="w-auto h-24 mb-2 lg:h-28 xl:h-32"
              alt={content2[1].alt || ""}
            />
            <h3 className="">{content2[1].title}</h3>
            <p className="hidden sm:block">{content2[1].content}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between md:justify-evenly md:w-1/2 lg:gap-16 xl:gap-32">
          <div className="flex flex-col items-center mr-2 item md:items-start md:mx-0 md:w-36 2xs:w-28 xs:w-32 sm:w-56 lg:w-40 xl:w-44">
            <Image
              src={content2[2].logo}
              width={300}
              height={300}
              className="w-auto h-24 mb-2 lg:h-28 xl:h-32"
              alt={content2[2].alt || ""}
            />
            <h3 className="">{content2[2].title}</h3>
            <p className="hidden sm:block">{content2[2].content}</p>
          </div>
          <div className="flex flex-col items-center ml-2 item md:items-start md:ml-0 md:w-36 2xs:w-28 xs:w-32 sm:w-56 lg:w-40 xl:w-44">
            <Image
              src={content2[3].logo}
              width={300}
              height={300}
              className="w-auto h-24 mb-2 lg:h-28 xl:h-32"
              alt={content2[3].alt || ""}
            />
            <h3 className="">{content2[3].title}</h3>
            <p className="hidden sm:block">{content2[3].content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
