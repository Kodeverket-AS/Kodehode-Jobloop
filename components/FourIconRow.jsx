"use client";

import Link from "next/link";
import Image from "next/image";

export default function FourIconRow({ content }) {
  return (
    <div className="flex flex-col items-center w-full bg-jobloop-green">
      <h1>{content[0].title}</h1>
      <div className="flex justify-evenly">
        <div className="flex flex-col items-center w-20 px-0">
          <Image src={content[1].logo} width={300} height={300} />
          <h2>{content[1].title}</h2>
          <p>{content[1].content}</p>
        </div>
        <div className="flex flex-col items-center w-20 px-0">
          <Image src={content[2].logo} width={300} height={300} />
          <h2>{content[2].title}</h2>
          <p>{content[2].content}</p>
        </div>
        <div className="flex flex-col items-center w-20 px-0">
          <Image src={content[3].logo} width={300} height={300} />
          <h2>{content[3].title}</h2>
          <p>{content[3].content}</p>
        </div>
        <div className="flex flex-col items-center w-20 px-0">
          <Image src={content[4].logo} width={300} height={300} />
          <h2>{content[4].title}</h2>
          <p>{content[4].content}</p>
        </div>
      </div>
    </div>
  );
}
