import DynamicCompetence from "./DynamicCompetence";
import { PortableText } from "@portabletext/react";
import { AlertError } from "./AlertComponent";

export default function MultiCompetence({ content1, content2 }) {
  //console.log(content1);
  return (
    <section className="w-full py-12">
      {content1 &&
      content1.length !== 0 &&
      content2 &&
      content2.length !== 0 ? (
        <div className="flex flex-col max-w-full mx-auto px-4 gap-4">
          <div className=" flex flex-col gap-4 w-full xl:w-3/6 pb-8">
            <h2 className="border-b-8 border-jobloop-primary-green w-fit pb-3">
              {content1.title}
            </h2>

            <div className="md:text-xl pb-10">
              <PortableText value={content1.content} />
            </div>
          </div>
          <div className="w-full">
            <DynamicCompetence
              key={content2.id}
              content={content2}
            />
          </div>
        </div>
      ) : (
        <AlertError />
      )}
    </section>
  );
}
