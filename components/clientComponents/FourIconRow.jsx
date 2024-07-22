"use client";

import Image from "next/image";
import { AlertError } from "../AlertComponent";

const LanguageCard = ({ title, content, logo, alt }) => {
  return (
    <div className="pb-8 shadow-md rounded-lg md:shadow-none p-5 md:w-2/6 lg:w-2/6 w-full">
      <Image
        src={logo}
        width={300}
        height={300}
        className="w-12 md:w-20 pb-4 md:m-auto"
        alt={alt || "HTML logo"}
      />
      <div className="w-full md:text-center text-left ">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default function FourIconRow({ title, content }) {
  return (
    <section className="w-full md:w-screen py-12">
      {content && content.length !== 0 ? (
        <div className="flex flex-col items-center sm:items-left gap-4 justify-center max-w-screen-2xl mx-auto px-2">
          <h2 className="text-center  border-b-4 border-jobloop-primary-orange w-fit pb-4">
            {title}
          </h2>

          <div className="flex flex-col items-center gap-8  md:flex-row sm:flex-wrap  pb-8 justify-center  pt-12 ">
            <LanguageCard {...content[0]} />
            <LanguageCard {...content[1]} />

            <LanguageCard {...content[2]} />
            <LanguageCard {...content[3]} />
          </div>
        </div>
      ) : (
        <AlertError />
      )}
    </section>
  );
}
