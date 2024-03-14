"use client";

import Link from "next/link";
import Image from "next/image";

export default function CourseCard({ content }) {
  return (
    <div className="flex flex-col px-5 py-3 bg-kv-white shadow-md">
      <h3>{content.title}</h3>
      <p className="pb-3 border-b-4 border-kv-black">{content.subheader}</p>
      <h4 className="pt-2">Forutsetninger</h4>
      <p>{content.expectations}</p>
      <h4 className="pt-2">Tidsplan</h4>
      <p>{content.schedule}</p>
      <h4 className="pt-2">Undervisningsform</h4>
      <p>{content.educationStyle}</p>
      <h4 className="pt-2">Jobbmarked</h4>
      <p>{content.jobMarket}</p>
      <h4 className="pt-2">Sted</h4>
      <p>{content.place}</p>
    </div>
  );
}
