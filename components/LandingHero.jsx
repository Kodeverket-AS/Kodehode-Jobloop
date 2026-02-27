"use client";
import Image from "next/image";
import danialigdery from "../public/danialigdery.jpg";
import { SectionComponent, TextBlock } from "./SectionComponents";

export default function LandingHero({ content }) {
  const missionTitle = "Menneskelig talent i et AI-drevet og mer digitalisert arbeidsliv";
  const missionStatement = `JobLoop mobiliserer og utvikler IT talenter gjennom mestringsbasert læring og praksisnær erfaring – som passer i dag og i årene som kommer. Gjennom tett samarbeid med næringsliv og offentlig sektor utvikler deltakerne ferdigheter innen digital problemløsning, utvikling, systemforståelse, AI-assistert arbeid og teknologisk verdiskaping. JobLoop kvalifiserer mennesker til arbeid i et digitalt arbeidsliv – og styrker fremtidens kompetanse.`;
  // const missionStatement = content.content;

  return (
    <>
      <header className="group relative h-[50vh] sm:h-[55vh] md:h-[65vh] lg:h-[70vh] w-screen pt-28">
        <Image
          src={content.image}
          height={500}
          width={2000}
          alt="Scenic landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 text-center text-white">
          <div className="space-y-2 sm:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-9xl text-kv-white underline transition-all duration-500 underline-offset-4 sm:underline-offset-8 decoration-jobloop-primary-green group-hover:decoration-jobloop-primary-orange">
              {content.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-3xl text-kv-white">
              Tilpasset opplæring og rekruttering til <br className="hidden sm:block" /> IT-bransjen
            </p>
          </div>
        </div>
      </header>

      <SectionComponent
        leftContent={
          <TextBlock
            title={missionTitle}
            titleStyle={{ lineHeight: 1.6 }}
            contentString={missionStatement}
            // When getting data from sanity, use the below code instead of contentString.
            // Remember to change the missionStatement variable to = content.content
            // content={missionStatement}
            isButton={true}
            isContained={true}
            path={"/kontakt"}
            text={"Kontakt oss"}
          />
        }
        rightContent={
          <figure>
            <Image
              src={danialigdery}
              height={500}
              width={800}
              alt="kodemiljø"
              className="object-cover w-full rounded-xl"
            />
          </figure>
        }
      />
    </>
  );
}
