"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import { SectionComponent } from "./SectionComponents";
import { TextBlock } from "./TextBlockComponent";

export default function KodehodeSummary({ content1, content2 }) {
  const [active, setActive] = useState(content2[1]);
  return (
    <SectionComponent
      leftContent={
        <TextBlock
          title={content1.title}
          content={content1.content1}
          content2={content1.content2}
          content3={content1.content3}
          isOrange={true}
        />
      }
      rightContent={
        <div>
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
      }
    />
  );
}
