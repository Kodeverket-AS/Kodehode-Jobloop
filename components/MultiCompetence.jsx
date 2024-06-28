import DynamicCompetence from "./DynamicCompetence";
import { PortableText } from "@portabletext/react";

export default function MultiCompetence({ content1, content2 }) {
  //console.log(content1);
  return (
    <section className="w-screen py-12">
      <div className="flex flex-col max-w-screen-2xl mx-auto px-4">
        <div className="w-full md:w-3/6 pb-8">
          <h2 className="underline underline-offset-8 pb-4 decoration-jobloop-primary-green">
            {content1.title}
          </h2>

          <div className="md:text-xl">
            <PortableText value={content1.content} />
          </div>
        </div>
        <div className="w-full">
          <DynamicCompetence content={content2} />
        </div>
      </div>
    </section>
  );
}
