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
        <h2 className="mx-auto md:ml-0">{content1.title}</h2>
        <div className="pt-5 pb-10 md:pb-0">
          <div className="pb-3 md:pb-5">
            <PortableText value={content1.content1} />
          </div>
          <div className="py-3 md:py-5">
            <PortableText value={content1.content2} />
          </div>
          <div className="pt-3 md:pt-5">
            <PortableText value={content1.content3} />
          </div>
        </div>
      </div>
      <div className="w-full px-0 md:pl-6 md:w-1/2">
        <div className="flex flex-row justify-center">
          <button
            key={content2[1]._id}
            onClick={() => setActive(content2[1])}
            className="px-3 py-1 mx-3 mb-3 border-2 rounded-full border-kv-black focus:bg-jobloop-primary-orange"
          >
            {content2[1].duration}
          </button>
          <button
            key={content2[0]._id}
            onClick={() => setActive(content2[0])}
            className="px-2 mx-3 mb-3 border-2 rounded-full border-kv-black md:py-2 md:px-3 focus:bg-jobloop-primary-orange"
          >
            {content2[0].duration}
          </button>
        </div>
        <CourseCard key={active._id} content={active} />
        <div className="block mx-auto mt-10 md:hidden">
          <LinkButton Path={"/kontakt"} Text={"Kontakt oss"} />
        </div>
      </div>
    </div>
  );
}
