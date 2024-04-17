"use client";

import Image from "next/image";

export default function DynamicCompetence({ content }) {
  return (
    <div className="flex flex-col items-start w-full min-h-full pb-20 text-left md:w-screen lg:px-24 md:items-center">
      <div className="grid grid-cols-2 gap-y-40 md:gap-y-48 gap-x-8 md:grid-cols-3 align-center">
        {content.map((item, index) => (
          <div
            key={item.id + index}
            className="flex flex-col items-start h-16 m-5 w-28 md:w-36 2xs:w-32 xs:w-36 sm:w-56 md:mr-0 lg:w-40 xl:w-44"
          >
            <Image
              src={item.logo}
              width={300}
              height={300}
              className="w-16 mb-2 md:w-32"
              alt={item.alt || ""}
            />
            <h3 className="text-left">{item.title}</h3>
            <p className="text-left">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
