"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import CourseCard from "./courseCard";

export default function KodehodeSummary({ content1 }, { content2 }) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <h1>{content1.title}</h1>
        <PortableText value={content1.content} />
      </div>
      <div></div>
    </div>
  );
}
