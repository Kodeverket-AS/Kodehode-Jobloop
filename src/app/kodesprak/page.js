import Image from "next/image";
import { getData } from "../page";
import { PortableText } from "@portabletext/react";

export const metadata = {
  title: "Kodespråk: Teknologier vi bruker | Kodehode",
};

export default async function Techstack() {
  const data = await getData();
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex flex-col items-center min-h-screen py-36">
      <div className=" w-11/12 flex flex-col items-center ">
        <section className="w-full py-12">
          <div className="flex flex-col justify-center gap-12 max-w-screen-2xl mx-auto px-4">
            <div className="w-full flex flex-col gap-8 md:w-1/2">
              <h1 className="text-2xl underline underline-offset-8 decoration-jobloop-primary-green text-black md:text-5xl">
                {data.heroSub[5].title}
              </h1>
              <div className="text-lg md:text-2xl ">
                <PortableText value={data.heroSub[5].content} />
              </div>
            </div>

            <div className="w-full">
              <Image
                alt={data.heroSub[5].alt || ""}
                src={data.heroSub[5].image}
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
