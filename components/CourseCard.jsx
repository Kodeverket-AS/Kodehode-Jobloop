"use client";

import Link from "next/link";
import Image from "next/image";

export default function CourseCard({content}) {
  return (
    <div className="flex flex-col">
      <h3 className="font-bold ">{content.title}</h3>
      <p className="pb-3 border-b-4 border-black">{content.subheader}</p>
      <h3 className="font-bold">Forutsetninger</h3>
      <p>{content.expectations}</p>
      <h3 className="font-bold">Tidsplan</h3>
      <p>{content.schedule}</p>
      <h3 className="font-bold">Undervisningsform</h3>
      <p>{content.educationStyle}</p>
      <h3 className="font-bold">Jobbmarked</h3>
      <p>{content.jobMarket}</p>
      <h3 className="font-bold">Sted</h3>
      <p>{content.place}</p>
    </div>
  );
}
