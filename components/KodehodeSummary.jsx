"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { useState } from "react";
import CourseCard from "./CourseCard";

export default function KodehodeSummary({ content1, content2 }) {
  const [course1, setCourse1] = useState(true);
  const [course2, setCourse2] = useState(false);
  const [active, setActive] = useState(content2[0]);
  console.log(content2);  
  /*const card = ({course}) => {
    return <CourseCard content={course} />
  }*/
  
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <h1>{content1.title}</h1>
        <PortableText value={content1[0].content} />
      </div>
      <div>
        <div className="flex flex-row">
          {content2.map((item) => (
              <button
                key={item.id}
                active={active === item}
                onClick={() => setActive(item)}
                className="border-2 border-black active:bg-jobloop-orange"
              >
                {item.title}</button>
          ))}
          {/*<button
            type="button"
            name="courseOne"
            onClick={() => {
              setCourse1(true);
              setCourse2(false);
            }}
          />
          <button
            type="button"
            name="courseTwo"
            onClick={() => {
              setCourse2(true);
              setCourse1(false);
            }}
          />*/}
        </div>
        <div>
          <CourseCard key={content2[0]._id} content={active} />
        </div>
      </div>
    </div>
  );
}
