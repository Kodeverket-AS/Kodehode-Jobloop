"use client";

import Image from "next/image";

const LinkCard = ({ id, src, title, description }) => {
  return (
    <div
      key={id}
      className="group transition-all duration-300 bg-kv-white md:flex items-center p-2 gap-2 md:p-6 shadow-sm shadow-jobloop-primary-green rounded-lg md:gap-8 hover:shadow-lg">
      <Image
        src={src}
        width={64}
        height={64}
        className="animate-pulse h-16 w-16 group-hover:rotate-3 transition-transform duration-300 ease-in-out"
        alt={`Grafikkikon av ${src}`}
      />
      {/* Text */}
      <div>
        <div className="w-full ">
          <h2 className="text-xl font-bold ">{title}</h2>
          <p className="text-lg text-kv-black/70">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default function DynamicCompetence({ content }) {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {content.map((item, index) => (
          <LinkCard
            key={index}
            src={item.logo}
            title={item.title}
            description={item.content}
          />
        ))}
      </div>
    </div>
  );
}
