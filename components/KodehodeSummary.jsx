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
    <div className="flex flex-row py-20">
      <div className="flex flex-col w-1/2">
        <h1>{content1[0].title}</h1>
        <PortableText value={content1[0].content} />
      </div>
      <div className="w-1/2 px-10">
        <div className="flex flex-row">
          {content2.map((item) => (
              <button
                key={item._id}
                active={active === item}
                onClick={() => setActive(item)}
                className="px-3 py-2 mx-3 mb-3 border-2 border-black rounded-full active:bg-jobloop-orange"
              >
                {item.title}</button>
          ))}
        </div>
        <div className="px-5 bg-white border-2 border-black shadow-md">
          <CourseCard key={content2[0]._id} content={active} />
        </div>
      </div>
    </div>
  );
}
