"use client";

import Image from "next/image";

const LinkCard = ({ id, src, title, description }) => {
  return (
    <div
      key={id}
      className="group bg-kv-white max-w-md flex flex-col p-4 gap-2 sm:flex-row w-full md:flex-col md:align-start lg:flex-row md:p-6 shadow-md rounded-lg md:gap-8 hover:shadow-lg">
      <Image
        src={src}
        width={64}
        height={64}
        className=" h-20 w-16 group-hover:rotate-3 transition-transform duration-300 ease-in-out"
        alt={`Grafikkikon av ${src}`}
      />
      {/* Text */}
      <div>
        <div className="w-full ">
          <h2 className="text-xl font-bold ">{title}</h2>
          <p className="text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function DynamicCompetence({ content }) {
  return (
    <div className="">
      <div className="flex flex-wrap md:flex-row gap-8">
        {content.map((item, index) => (
          <LinkCard
            key={item.id}
            src={item.logo}
            title={item.title}
            description={item.content}
          />
        ))}
      </div>
    </div>
  );
}
