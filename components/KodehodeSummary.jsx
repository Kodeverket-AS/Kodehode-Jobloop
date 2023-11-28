"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { useState } from "react";
import CourseCard from "./CourseCard";

export default function KodehodeSummary({ content1, content2 }) {
  const [course1, setCourse1] = useState(true);
  const [course2, setCourse2] = useState(false);
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
        <div>
          <button
            type="radio"
            name="courseOne"
            onClick={() => {
              setCourse1(true);
              setCourse2(false);
            }}
          />
          <button
            type="radio"
            name="courseTwo"
            onClick={() => {
              setCourse2(true);
              setCourse1(false);
            }}
          />
        </div>
        <div>
          {course1 ? (
            <CourseCard content={content2[0]} />
          ) : course2 ? (
            <CourseCard content={content2[1]} />
          ) : (
            <CourseCard content={content2[0]} />
          )}
        </div>
      </div>
    </div>
  );
}
