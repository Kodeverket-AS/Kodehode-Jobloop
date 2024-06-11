"use client";

import Image from "next/image";

export default function Offices({ content }) {
  return (
    <div className="px-8 pt-10 pb-10 text-center md:w-screen md:px-12 lg:px-24">
      <div className="border-b-4 border-jobloop-primary-green pb-2 mb-6">
        <h2 className="tracking-tight">Våre lokaler</h2>
      </div>
      <div className="grid w-full h-full grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4 align-center">
        {content.map((offices, index) => (
          <div
            key={offices.id + index}
            className="w-full">
            <Image
              src={offices.image}
              width={500}
              height={500}
              className="rounded-md w-full h-40 object-cover"
              alt={offices.alt || ""}
            />
            <div className="text-left pt-1">
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
