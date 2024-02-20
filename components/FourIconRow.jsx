"use client";

import Link from "next/link";
import Image from "next/image";

export default function FourIconRow({ title, content }) {
  return (
    <div className="flex flex-col items-center w-full p-8 text-center text-white bg-jobloop-primary-green sm:p-10 md:p-12 md:w-screen lg:p-20">
      <h2 className="pb-10 md:pb-20">{title}</h2>
      <div className="flex flex-col w-full md:flex-row lg:justify-center">
        <div className="flex flex-row justify-between mb-5 md:mb-0">
          <div className="flex flex-col items-center w-24 mx-5 md:mr-3 md:w-36 2xs:w-28 xs:w-32 sm:w-56 md:mx-0 lg:mr-7 lg:w-40 xl:mr-10 xl:w-44">
            <Image
              src={content[0].logo}
              width={300}
              height={300}
              className="w-20 mb-2"
            />
            <h3 className="text-center">{content[0].title}</h3>
            <p className="text-center">{content[0].content}</p>
          </div>
          <div className="flex flex-col items-center w-24 mx-4 md:mx-3 md:w-36 2xs:w-28 xs:w-32 sm:w-56 lg:mx-7 lg:w-40 xl:mx-10 xl:w-44">
            <Image
              src={content[1].logo}
              width={300}
              height={300}
              className="w-20 mb-2"
            />
            <h3 className="text-center">{content[1].title}</h3>
            <p className="text-center">{content[1].content}</p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-center w-24 mx-5 md:mx-3 md:w-36 2xs:w-28 xs:w-32 sm:w-56 lg:mx-7 lg:w-40 xl:mx-10 xl:w-44">
            <Image
              src={content[2].logo}
              width={300}
              height={300}
              className="w-20 mb-2"
            />
            <h3 className="text-center">{content[2].title}</h3>
            <p className="text-center">{content[2].content}</p>
          </div>
          <div className="flex flex-col items-center w-24 mx-4 md:ml-3 md:w-36 2xs:w-28 xs:w-32 sm:w-56 md:mx-0 lg:ml-7 lg:w-40 xl:ml-10 xl:w-44">
            <Image
              src={content[3].logo}
              width={300}
              height={300}
              className="w-20 mb-2"
            />
            <h3 className="text-center">{content[3].title}</h3>
            <p className="text-center">{content[3].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
