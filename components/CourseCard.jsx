"use client";

import Link from "next/link";
import Image from "next/image";

export default function CourseCard({content}) {
  return (
    <div className="flex flex-col">
      <h2>{content.title}</h2>
      <p>{content.subheader}</p>
      <h2>Forutsetninger</h2>
      <p>{content.expectations}</p>
      <h2>Tidsplan</h2>
      <p>{content.schedule}</p>
      <h2>Undervisningsform</h2>
      <p>{content.educationStyle}</p>
      <h2>Jobbmarked</h2>
      <p>{content.jobMarket}</p>
      <h2>Sted</h2>
      <p>{content.place}</p>
    </div>
  );
}
