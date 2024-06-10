"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { useState } from "react";
import CourseCard from "./CourseCard";
import { LinkButton } from "./Buttons";

export default function KodehodeSummary({ content1, content2 }) {
  const [active, setActive] = useState(content2[1]);
  return (
    <div className="flex flex-col px-8 py-20 md:flex-row sm:px-10 md:px-12 lg:px-24 md:w-screen 2xl:max-w-[1600px]">
      <div className="flex-col w-full md:w-1/2 md:flex">
        <div className="border-b-4 pb-2 border-jobloop-primary-green">
          <h2 className="mx-auto tracking-tight md:ml-0 md:leading-10">
            {content1.title}
          </h2>
        </div>
        <div className="pt-5 pb-10 md:pb-0 lg:pr-20">
          <div className="md:text-lg md:w-5/6">
            <PortableText value={content1.content1} />
            <br />
            <PortableText value={content1.content2} />
            <br />
            <PortableText value={content1.content3} />
          </div>
        </div>
      </div>
      <div className="w-full px-0 md:pl-6 md:w-1/2">
        <div className="flex flex-row justify-start gap-2 pb-2">
          <button
            key={content2[1]._id}
            onClick={() => setActive(content2[1])}
            className={`${
              active === content2[1] && active !== content2[0]
                ? "px-4 py-1 bg-jobloop-primary-orange  rounded-full md:py-2 md:px-6 border-2 border-jobloop-primary-orange hover:border-2  focus:bg-jobloop-primary-orange focus:border-jobloop-primary-orange"
                : "px-4 py-1 rounded-full md:py-2 md:px-6 border-2 hover:border-2 hover:border-jobloop-primary-orange  focus:bg-jobloop-primary-orange focus:border-white"
            }`}>
            {content2[1].duration}
          </button>
          <button
            key={content2[0]._id}
            onClick={() => setActive(content2[0])}
            className={`${
              active === content2[0]
                ? "px-4 py-1 bg-jobloop-primary-orange  rounded-full md:py-2 md:px-6 border-2 border-jobloop-primary-orange hover:border-2  focus:bg-jobloop-primary-orange focus:border-jobloop-primary-orange"
                : "px-4 py-1 rounded-full md:py-2 md:px-6 border-2 hover:border-2 hover:border-jobloop-primary-orange  focus:bg-jobloop-primary-orange focus:border-white"
            }`}>
            {content2[0].duration}
          </button>
        </div>
        <CourseCard
          key={active._id}
          content={active}
        />
        <div className="flex justify-center mt-10 md:hidden">
          <LinkButton
            Path={"/kontakt"}
            Text={"Kontakt oss"}
          />
        </div>
      </div>
    </div>
  );
}
