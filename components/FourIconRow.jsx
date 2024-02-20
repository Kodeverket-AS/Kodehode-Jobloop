"use client";

import Link from "next/link";
import Image from "next/image";

export default function FourIconRow({ title, content }) {
  return (
    <div className="flex flex-col items-center w-full py-10 text-center text-white bg-jobloop-primary-green">
      <h2 className="pb-10">{title}</h2>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-row mb-1">
          <div className="flex flex-col items-center mb-3 mx-9 w-14 md:mr-12 md:w-36">
            <Image src={content[0].logo} width={300} height={300} className="w-20 mb-2" />
            <h3 className="text-center">{content[0].title}</h3>
            <p className="hidden text-center md:block">{content[0].content}</p>
          </div>
          <div className="flex flex-col items-center mb-3 mx-9 w-14 md:mx-12 md:w-36">
            <Image src={content[1].logo} width={300} height={300} className="w-20 mb-2" />
            <h3 className="text-center">{content[1].title}</h3>
            <p className="hidden text-center md:block">{content[1].content}</p>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col items-center mb-3 mx-9 w-14 md:mx-12 md:w-36">
            <Image src={content[2].logo} width={300} height={300} className="w-20 mb-2" />
            <h3 className="text-center">{content[2].title}</h3>
            <p className="hidden text-center md:block">{content[2].content}</p>
          </div>
          <div className="flex flex-col items-center mb-3 mx-9 w-14 md:ml-12 md:w-36">
            <Image src={content[3].logo} width={300} height={300} className="w-20 mb-2" />
            <h3 className="text-center">{content[3].title}</h3>
            <p className="hidden text-center md:block">{content[3].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
