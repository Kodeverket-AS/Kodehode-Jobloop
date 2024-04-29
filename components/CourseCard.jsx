"use client";

import Link from "next/link";
import Image from "next/image";

export default function CourseCard({ content }) {
  return (
    <div className="flex flex-col px-5 py-3 shadow-md md:py-5 bg-kv-white">
      <h3 className="md:pb-5">{content.title}</h3>
      <p className="pb-3 border-b-4 border-kv-black md:pb-5">{content.subheader}</p>
      <h4 className="pt-3 md:pb-5">Forutsetninger</h4>
      <p>{content.expectations}</p>
      <h4 className="pt-3 md:pb-5">Tidsplan</h4>
      <p>{content.schedule}</p>
      <h4 className="pt-3 md:pb-5">Undervisningsform</h4>
      <p>{content.educationStyle}</p>
      <h4 className="pt-3 md:pb-5">Jobbmarked</h4>
      <p>{content.jobMarket}</p>
      <h4 className="pt- md:pb-5">Sted</h4>
      <p>{content.place}</p>
    </div>
  );
}
