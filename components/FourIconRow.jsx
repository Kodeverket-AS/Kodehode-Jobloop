"use client";

import Link from "next/link";
import Image from "next/image";

export default function FourIconRow({ title, content }) {
  return (
    <div className=" items-start w-full px-10 py-20 text-left lg:px-24 md:items-center">
      <h2 className="border-b-4 border-jobloop-primary-orange tracking-tight pb-2 mb-4 md:mb-6">
        {title}
      </h2>
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <div className="flex place-items-center gap-4">
            <Image
              src={content[0].logo}
              width={300}
              height={300}
              className="w-20 "
              alt={content[0].alt || "HTML logo"}
            />
            <div>
              <h3 className="tracking-tight">{content[0].title}</h3>
              <p className="lg:text-lg">{content[0].content}</p>
            </div>
          </div>
          <div className="flex place-items-center gap-4">
            <Image
              src={content[1].logo}
              width={300}
              height={300}
              className="w-20 "
              alt={content[1].alt || "CSS logo"}
            />
            <div>
              <h3 className="tracking-tight">{content[1].title}</h3>
              <p className="lg:text-lg">{content[1].content}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <div className="flex place-items-center gap-4">
            <Image
              src={content[2].logo}
              width={300}
              height={300}
              className="w-20"
              alt={content[2].alt || "Javascript logo"}
            />
            <div>
              <h3 className="tracking-tight">{content[2].title}</h3>
              <p className="lg:text-lg">{content[2].content}</p>
            </div>
          </div>
          <div className="flex place-items-center gap-4">
            <Image
              src={content[3].logo}
              width={300}
              height={300}
              className="w-20"
              alt={content[3].alt || "React logo"}
            />
            <div>
              <h3 className="tracking-tight">{content[3].title}</h3>
              <p className="lg:text-lg">{content[3].content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
