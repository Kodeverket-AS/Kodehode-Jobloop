"use client";

import Link from "next/link";
import Image from "next/image";

export default function CourseCard({content}) {
  return (
    <div className="flex flex-col">
      <h1>{content.title}</h1>
      <p>{content.subheader}</p>
      <h1>Forutsetninger</h1>
      <p>{content.expectations}</p>
      <h1>Tidsplan</h1>
      <p>{content.schedule}</p>
      <h1>Undervisningsform</h1>
      <p>{content.educationStyle}</p>
      <h1>Jobbmarked</h1>
      <p>{content.jobMarket}</p>
      <h1>Sted</h1>
      <p>{content.place}</p>
    </div>
  );
}
