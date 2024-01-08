"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { useState } from "react";
import CourseCard from "./CourseCard";

export default function KodehodeSummary({ content1, content2 }) {
  const [active, setActive] = useState(content2[0]);
  //console.log(content1);
  
  return (
    <div className="flex flex-col px-8 py-20 md:flex-row md:px-24">
      <div className="flex-col w-full md:w-1/2 md:flex">
        <h1 className="hidden md:block">{content1[0].title}</h1>
        <h1 className="block pb-5 md:hidden">
          {content1[0].mobileTitle}
        </h1>
        <div className="hidden md:block">
          <div className="py-5">
            <PortableText value={content1[0].content1} />
          </div>
          <div className="py-5">
            <PortableText value={content1[0].content2} />
          </div>
          <div className="py-5">
            <PortableText value={content1[0].content3} />
          </div>
        </div>
      </div>
      <div className="w-full px-0 md:px-10 md:w-1/2">
        <div className="flex flex-row justify-center">
          {content2.map((item) => (
            <button
              key={item._id}
              active={active === item}
              onClick={() => setActive(item)}
              className="px-2 mx-3 mb-3 border-2 border-black rounded-full md:py-2 md:px-3 active:bg-jobloop-orange"
            >
              {item.duration}
            </button>
          ))}
        </div>
        <CourseCard key={content2[0]._id} content={active} />
      </div>
    </div>
  );
}
