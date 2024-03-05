import Image from "next/image";
import { getData } from "../page";
import { PortableText } from "@portabletext/react";
import Fargefigur180 from "../../../public/Fargefigur180.svg";

export default async function Techstack() {
  const data = await getData();
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Image
        src={Fargefigur180}
        width={1000}
        height={1000}
        className="hidden md:block absolute top-[0] lg:top-[-100px] right-0 md:w-1/2 xl:w-2/5 3xl:w-2/6 mr-0 z-[-1]"
        alt=""
      />
      <main className="relative flex flex-col items-center min-h-screen px-4 pt-12 pb-8 md:p-24">
        <section className="flex flex-col gap-32 pb-16">
          <div className="flex flex-col gap-6 max-w-prose md:gap-8 ">
            <h1 className="text-4xl text-jobloop-primay-orange md:text-5xl">
              {data.heroSub[5].title}
            </h1>
            <div className="text-base md:text-xl">
              <PortableText value={data.heroSub[5].content} />
            </div>
          </div>
          <div className="max-w-5xl">
            <Image
              alt={data.heroSub[5].alt || ""}
              src={data.heroSub[5].image}
              width={1000}
              height={500}
            />
          </div>
        </section>
      </main>
    </>
  );
}
