import Image from "next/image";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/navigation/Navbar";
import Wordcloud from "../../../public/wordcloud.png";

import { getData } from "../page";
import { PortableText } from "@portabletext/react";

export default async function Techstack() {
  const data = await getData();
  console.log(data);

  return (
    <main className=" flex flex-col items-center min-h-screen pt-12 pb-8 px-4 md:p-24">
      <section className="flex flex-col gap-32 pb-16">
        <div className="max-w-prose flex flex-col gap-6 md:gap-8 ">
          <h1
            className="font-head text-3xl font-bold md:text-5xl"
            /*
              MESSAGE FROM KRISTIAN:
              Style below is added inline styling to change the color of the 
              text because not defined/extended in tailwind or global css.
              Color taken from figma design file.
              Should update tailwind or global css with this color as main orange.
              - Kristian
            */
            style={{ color: "#F4A366" }}>
            {data.heroSub[4].title}
          </h1>
          <PortableText
            className="text-base md:text-xl"
            value={data.heroSub[4].content}
          />
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
