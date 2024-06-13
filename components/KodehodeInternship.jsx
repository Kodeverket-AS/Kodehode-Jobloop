"use client";

import Link from "next/link";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import CourseCard from "./CourseCard";
import InternshipCard from "./InternshipCard";
import { LinkButton } from "./Buttons";

export default function KodehodeInternship({ content1, content2 }) {
  return (
    <div className="w-full bg-neutral-100 ">
      <div className="flex flex-col gap-8 mx-auto px-8 py-20 md:flex-row md:px-12 sm:px-10 lg:px-24 2xl:justify-center 2xl:max-w-[1600px]">
        <div className="flex flex-col gap-4">
          <h2>{content1[0].title}</h2>
          <div className="text-lg ">
            <PortableText value={content1[0].content1} />
            <br />
            <PortableText value={content1[0].content2} />
            <br />
            <PortableText value={content1[0].content3} />
          </div>
          <div>
            <div className="hidden py-8 md:block">
              <LinkButton
                Path={"/kontakt"}
                Text={"Kontakt oss"}
              />
            </div>
            <em className="text-sm">
              Mulighet til å søke etter kandidater kommer!
            </em>
          </div>
        </div>
        <div className="w-full px-0 pt-5 md:pt-0">
          <InternshipCard
            key={content2[0]._id}
            content={content2[0]}
          />
        </div>
        <div className="block mx-auto pt-8 md:hidden">
          <LinkButton
            Path={"/kontakt"}
            Text={"Kontakt oss"}
          />
        </div>
        <div className="block py-2 mx-auto md:hidden">
          <em className="text-sm text-center">
            Mulighet til å søke etter kandidater kommer!
          </em>
        </div>
      </div>
    </div>
  );
}
