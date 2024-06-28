"use client";

import { PortableText } from "@portabletext/react";
import { useState } from "react";
import CourseCard from "./CourseCard";
import { ButtonGroup, Button } from "flowbite-react";

export default function KodehodeSummary({ content1, content2 }) {
  const [active, setActive] = useState(content2[1]);
  return (
    <section className="w-screen py-12">
      <div className="flex flex-col md:flex-row justify-center gap-8 max-w-screen-2xl mx-auto px-4">
        <div className="w-full">
          <h2 className=" underline underline-offset-8 pb-4 decoration-jobloop-primary-orange">
            {content1.title}
          </h2>
          <div className="pb-12 leading-normal md:text-xl lg:leading-normal">
            <div className="pb-4">
              <PortableText value={content1.content1} />
              <PortableText value={content1.content2} />
            </div>

            <PortableText value={content1.content3} />
          </div>
          {/* <LinkButton
            Path={"/kontakt"}
            Text={"Kontakt oss"}
          /> */}
        </div>
        <div className="w-full">
          <div className="w-full mb-4 flex rounded-lg border-2 border-jobloop-primary-orange overflow-hidden">
            <button
              key={content2[1]._id}
              onClick={() => setActive(content2[1])}
              className={`w-full py-2 underline-offset-4 active:underline hover:underline focus:underline ${
                active === content2[1] && active !== content2[0]
                  ? " bg-jobloop-primary-orange "
                  : "bg-kv-white "
              }`}>
              {content2[1].duration}
            </button>
            <button
              key={content2[0]._id}
              onClick={() => setActive(content2[0])}
              className={`w-full py-2 underline-offset-4 active:underline hover:underline focus:underline ${
                active === content2[0]
                  ? " bg-jobloop-primary-orange "
                  : "bg-kv-white "
              }`}>
              {content2[0].duration}
            </button>
          </div>
          <CourseCard
            key={active._id}
            content={active}
          />
        </div>
      </div>
    </section>
  );
}
