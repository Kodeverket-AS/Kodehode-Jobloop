"use client";

import Image from "next/image";

export default function Offices({ content }) {
  return (
    <div className="px-8 pt-20 pb-10 text-center md:w-screen sm:px-10 md:px-12 lg:px-24">
      <div className="border-b-4 border-jobloop-primary-green pb-2 mb-4">
        <h2 className="tracking-tight">Våre lokaler</h2>
      </div>
      <div className="flex flex-wrap gap-8 justify-center md:justify-center">
        {content.map((offices, index) => (
          <div
            key={offices.id + index}
            className="w-60">
            <Image
              src={offices.image}
              width={500}
              height={500}
              className="object-cover w-full "
              alt={offices.alt || ""}
            />
            <div className="text-left">
              <h3>{offices.title}</h3>
              <p>{offices.adresse}</p>
              <p>{offices.postnr}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
