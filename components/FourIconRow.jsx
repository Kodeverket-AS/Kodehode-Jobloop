"use client";

import Image from "next/image";
import { AlertError } from "./AlertComponent";

const LanguageCard = ({ title, content, logo, alt }) => {
  return (
    <div className="pb-8 w-full">
      <Image
        src={logo}
        width={300}
        height={300}
        className="w-20 pb-4 m-auto"
        alt={alt || "HTML logo"}
      />
      <div className="text-center">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default function FourIconRow({ title, content }) {
  return (
    <section className="w-screen py-12">
      {content && content.length !== 0 ? (
        <div className="flex flex-col gap-4 justify-center max-w-screen-2xl mx-auto px-2">
          <h2 className="text-center  underline underline-offset-8 pb-8 decoration-jobloop-primary-orange">
            {title}
          </h2>

          <div className="flex flex-col gap-8 md:flex-row pb-8 justify-center m-auto ">
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
