"use client";

import Image from "next/image";

export default function Offices({ content }) {
  return (
    <section className="w-screen py-12 bg-jobloop-primary-orange/10">
      <div className="max-w-screen-2xl mx-auto px-4">
        <h2 className="underline decoration-jobloop-primary-orange underline-offset-8 pb-4">
          Våre lokaler
        </h2>

        <div className="grid w-full h-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 align-center">
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
    </section>
  );
}
