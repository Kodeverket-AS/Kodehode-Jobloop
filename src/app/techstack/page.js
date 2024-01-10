import Image from "next/image";
import { getData } from "../page";
import { PortableText } from "@portabletext/react";
import { NavbarAlt } from "../../../components/navigation/Navbar";

export default async function Techstack() {
  const data = await getData();
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavbarAlt />
      <main className=" flex flex-col items-center min-h-screen pt-12 pb-8 px-4 md:p-24">
        <section className="flex flex-col gap-32 pb-16">
          <div className="max-w-prose flex flex-col gap-6 md:gap-8 ">
            <h1 className="text-4xl text-jobloop-primay-orange md:text-5xl">
              {data.heroSub[4].title}
            </h1>
            <p className="text-base md:text-xl">
              This is just a test for the pull
            </p>
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
    </>
  );
}
