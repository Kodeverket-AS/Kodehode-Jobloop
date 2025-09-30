import DynamicCompetence from "./DynamicCompetence";
import { PortableText } from "@portabletext/react";
import { AlertError } from "./AlertComponent";

export default function MultiCompetence({ content1, content2 }) {
  return (
    <section className="w-screen py-16 bg-gradient-to-br from-jobloop-primary-green/5 to-jobloop-primary-orange/5">
      {content1 &&
      content1.length !== 0 &&
      content2 &&
      content2.length !== 0 ? (
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-kv-black mb-6 underline underline-offset-8 decoration-jobloop-primary-green">
              {content1.title}
            </h2>
            <div className="text-kv-black/70 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
              <PortableText value={content1.content} />
            </div>
          </div>
          
          <DynamicCompetence
            key={content2.id}
            content={content2}
          />
        </div>
      ) : (
        <AlertError />
      )}
    </section>
  );
}
