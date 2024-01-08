import Image from "next/image";
import { getData } from "../page";
import { PortableText } from "@portabletext/react";

export default async function Techstack() {
  const data = await getData();
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className=" flex flex-col items-center min-h-screen pt-12 pb-8 px-4 md:p-24">
      <section className="flex flex-col gap-32 pb-16">
        <div className="max-w-prose flex flex-col gap-6 md:gap-8 ">
          <h1
            className="text-3xl text-jobloop-primay-orange font-bold md:text-5xl"
            /*
            ok...doing this merge thing is a bit of a pain.
            eehhh..did it work?
              MESSAGE FROM KRISTIAN:
              Style below is added inline styling to change the color of the 
              text because not defined/extended in tailwind or global css.
              Color taken from figma design file.
              Should update tailwind or global css with this color as main orange.
              - Kristian
            */
          >
            {data.heroSub[4].title}
          </h1>
          <div className="text-base md:text-xl">
            <PortableText value={data.heroSub[4].content} />
          </div>
        </div>
        <div className="max-w-5xl">
          <Image
            alt="Wordcloud of languages"
            src={data.heroSub[4].image}
            width={1000}
            height={500}
          />
        </div>
      </section>
    </main>
  );
}
