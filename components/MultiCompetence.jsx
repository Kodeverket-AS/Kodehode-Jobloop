import DynamicCompetence from "./DynamicCompetence";
import { PortableText } from "@portabletext/react";

export default function MultiCompetence({ content1, content2 }) {
  //console.log(content1);
  return (
    <>
      <div className="px-8 pt-20 pb-10 md:w-screen sm:px-10 md:px-12 lg:px-24">
        <div className="border-b-4 border-jobloop-primary-orange mb-4 pb-2">
          <h2 className="tracking-tight ">{content1.title}</h2>
        </div>
        <div className="text-base md:text-lg">
          <PortableText value={content1.content} />
        </div>
      </div>
      <div className="">
        <DynamicCompetence content={content2} />
      </div>
    </>
  );
}
