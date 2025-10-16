"use client";
import { useState } from "react";
import CourseCard from "./CourseCard";
import { SectionComponent, TextBlock } from "./SectionComponents";

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
        <div className="space-y-6">
          <div className="w-full flex rounded-2xl border-2 border-jobloop-primary-green/20 overflow-hidden shadow-lg">
            <button
              key={content2[1]._id}
              onClick={() => setActive(content2[1])}
              className={`w-full py-4 px-6 font-semibold transition-all duration-200 ${
                active === content2[1] && active !== content2[0]
                  ? "bg-jobloop-primary-orange text-kv-white"
                  : "bg-kv-white text-kv-black hover:bg-jobloop-primary-green/5"
              }`}>
              {content2[1].duration}
            </button>
            <button
              key={content2[0]._id}
              onClick={() => setActive(content2[0])}
              className={`w-full py-4 px-6 font-semibold transition-all duration-200 ${
                active === content2[0]
                  ? "bg-jobloop-primary-orange text-kv-white"
                  : "bg-kv-white text-kv-black hover:bg-jobloop-primary-green/5"
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
