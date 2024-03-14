"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { useState } from "react";
import CourseCard from "./CourseCard";

export default function KodehodeSummary({ content1, content2 }) {
  const [active, setActive] = useState(content2[1]);
  return (
    <div className="flex flex-col px-8 py-20 md:flex-row sm:px-10 md:px-12 lg:px-24 md:w-screen">
      <div className="flex-col w-full md:w-1/2 md:flex">
        <h2 className="hidden md:block">{content1.title}</h2>
        <h2 className="block pb-5 mx-auto md:hidden">{content1.mobileTitle}</h2>
        <div className="hidden md:block">
          <div className="py-5">
            <PortableText value={content1.content1} />
          </div>
          <div className="py-5">
            <PortableText value={content1.content2} />
          </div>
          <div className="py-5">
            <PortableText value={content1.content3} />
          </div>
        </div>
      </div>
      <div className="w-full px-0 md:pl-6 md:w-1/2">
        <div className="flex flex-row justify-center">
          <button
            key={content2[1]._id}
            onClick={() => setActive(content2[1])}
            className="px-3 py-1 mx-3 mb-3 border-2 border-kv-black rounded-full focus:bg-jobloop-primary-orange"
          >
            {content2[1].duration}
          </button>
          <button
            key={content2[0]._id}
            onClick={() => setActive(content2[0])}
            className="px-2 mx-3 mb-3 border-2 border-kv-black rounded-full md:py-2 md:px-3 focus:bg-jobloop-primary-orange"
          >
            {content2[0].duration}
          </button>
        </div>
        <CourseCard key={active._id} content={active} />
      </div>
    </div>
  );
}
