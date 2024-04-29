import DynamicCompetence from "./DynamicCompetence";
import { PortableText } from "@portabletext/react";

export default function MultiCompetence({ content1, content2 }) {
  //console.log(content1);
  return (
    <>
      <div className="px-8 pt-20 pb-10 md:w-screen sm:px-10 md:px-12 lg:px-24">
        <h2 className="mx-auto pb-5 md:pb-10 md:w-[40rem] lg:w-[45rem] text-left">
          {content1.title}
        </h2>
        <div className="mx-auto md:w-[40rem] lg:w-[45rem]">
          <PortableText value={content1.content} />
        </div>
      </div>
      <div className="flex flex-col w-full px-8 pt-0 pb-20 md:flex-row md:pt-10 md:pb-20 md:w-screen sm:px-10 md:px-12 md:justify-between lg:px-24 xl:px-0 lg:gap-16 xl:gap-32 xl:max-w-[1088px]">
        <DynamicCompetence content={content2} />
      </div>
    </>
  );
}
