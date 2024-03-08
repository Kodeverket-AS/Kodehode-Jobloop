"use client";

import Link from "next/link";
import Image from "next/image";

export default function FourIconRow({ title, content, alignment }) {
  return (
    <div className="flex flex-col items-center w-full px-8 py-20 text-center text-white bg-jobloop-primary-green sm:px-10 md:px-12 md:w-screen lg:px-24">
      <h2 className="pb-10 md:pb-20">{title}</h2>
      <div className="flex flex-col w-full md:flex-row md:justify-between lg:gap-16 xl:gap-32 xl:max-w-[1088px]">
        <div className="flex flex-row justify-between mb-5 md:mb-0 md:justify-evenly md:w-1/2 lg:gap-16 xl:gap-32">
          <div className={`flex flex-col ${alignment === "left" ? "items-start" : "items-center"} mr-5 w-28 md:w-36 2xs:w-32 xs:w-36 sm:w-56 md:mr-0 lg:w-40 xl:w-44`}>
            <Image
              src={content[0].logo}
              width={300}
              height={300}
              className="w-24 mb-2 md:w-32"
              alt={content[0].alt || ""}
            />
            <h3 className={alignment === "left" ? "text-left" : "text-center"}>
              {content[0].title}
            </h3>
            <p className={alignment === "left" ? "text-left" : "text-center"}>
              {content[0].content}
            </p>
          </div>
          <div className={`flex flex-col ${alignment === "left" ? "items-start" : "items-center"} mr-5 w-28 md:mr-0 md:w-36 2xs:w-32 xs:w-36 sm:w-56 lg:w-40 xl:w-44`}>
            <Image
              src={content[1].logo}
              width={300}
              height={300}
              className="w-24 mb-2 md:w-32"
              alt={content[1].alt || ""}
            />
            <h3 className={alignment === "left" ? "text-left" : "text-center"}>
              {content[1].title}
            </h3>
            <p className={alignment === "left" ? "text-left" : "text-center"}>
              {content[1].content}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between md:justify-evenly md:w-1/2 lg:gap-16 xl:gap-32">
          <div className={`flex flex-col ${alignment === "left" ? "items-start" : "items-center"} mr-5 w-28 md:mr-0 md:w-36 2xs:w-32 xs:w-36 sm:w-56 lg:w-40 xl:w-44`}>
            <Image
              src={content[2].logo}
              width={300}
              height={300}
              className="w-24 mb-2 md:w-32"
              alt={content[2].alt || ""}
            />
            <h3 className={alignment === "left" ? "text-left" : "text-center"}>
              {content[2].title}
            </h3>
            <p className={alignment === "left" ? "text-left" : "text-center"}>
              {content[2].content}
            </p>
          </div>
          <div className={`flex flex-col ${alignment === "left" ? "items-start" : "items-center"} mr-5 w-28 md:mr-0 md:w-36 2xs:w-32 xs:w-36 sm:w-56 lg:w-40 xl:w-44`}>
            <Image
              src={content[3].logo}
              width={300}
              height={300}
              className="w-24 mb-2 md:w-32"
              alt={content[3].alt || ""}
            />
            <h3 className={alignment === "left" ? "text-left" : "text-center"}>
              {content[3].title}
            </h3>
            <p className={alignment === "left" ? "text-left" : "text-center"}>
              {content[3].content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
