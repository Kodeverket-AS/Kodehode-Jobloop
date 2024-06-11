"use client";

import Image from "next/image";

export default function DynamicCompetence({ content }) {
  return (
    <div className="flex flex-col px-10 items-start w-full min-h-full pb-20 text-left md:w-screen lg:px-24 md:items-center">
      <div className="grid w-full h-full grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 md:grid-cols-3 align-center">
        {content.map((item, index) => (
          <div
            key={item.id + index}
            className="w-full h-full p-4 transition-all duration-300 shadow-md rotate-0 rounded-md bg-kv-white text-kv-black hover:text-jobloop-darker-green hover:shadow-lg hover:rotate-1">
            <Image
              src={item.logo}
              width={300}
              height={300}
              className="w-16 h-16 md:w-32 md:h-32"
              alt={item.alt || ""}
            />
            <div>
              <h3 className="tracking-tight">{item.title}</h3>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
