"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import CourseCard from "./CourseCard";
import InternshipCard from "./InternshipCard";
import { LinkButton } from "./Buttons";

export default function KodehodeInternship({ content1, content2 }) {
  return (
    <div className="flex flex-col px-8 pt-20 pb-0 md:pb-20 md:flex-row md:px-12 md:w-screen lg:px-24 2xl:max-w-[1600px]">
      <div className="flex-col w-full md:w-1/2 md:flex">
        <h2 className=" md:leading-10">{content1[0].title}</h2>
        {/*<h2 className="block pb-5 md:hidden">{content1[0].mobileTitle}</h2>*/}
        <div className=" md:w-5/6 lg:pr-20">
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
      <div className="w-full px-0 pt-5 md:pl-7 md:w-1/2 md:pt-0">
        <InternshipCard key={content2[0]._id} content={content2[0]} />
      </div>
      <div className="block mx-auto mt-10 md:hidden">
        <LinkButton Path={"/kontakt"} Text={"Søk etter kandidater"} />
      </div>
    </div>
  );
}
