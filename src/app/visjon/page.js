import Image from "next/image";
import { NavbarAlt } from "../../../components/navigation/Navbar";
import { getData } from "../page";
//import PortableText from "react-portable-text";
import { PortableText } from "@portabletext/react";
import { ExternalLinkButton, LinkButton, SeMerBtn } from "../../../components/Buttons";
import EndorsementComp from "../../../components/EndorsementComp";
import ContactComp from "../../../components/ContactComp";
import Partners from "../../../components/PartnersComp";
import { ProjectScroll } from "../../../components/ProjectScroll";
import { CooptScroll } from "../../../components/ProjectScroll";
import HeroSub from "../../../components/HeroSub";
import Vision2Part from "../../../components/Vision2Part";

export default async function Vision() {
  const data = await getData();

  return (
    <>
      {/*<NavbarAlt />*/}
      <main className="flex flex-col items-center w-full min-h-screen">
        <div className="flex flex-col items-center sm:justify-center ">
          <div className="flex flex-col items-center w-full gap-40 mt-32 ">
            {/* <div className="flex flex-col w-5/6 gap-12 lg:4/6">
              <div>
                <h1 className="mb-10 text-3xl font-extrabold text-center md:text-5xl text-jobloop-primary-green">
                  {data.heroSub[3].title}
                </h1>
              </div>
              <div key={data.heroSub[3]._id}>
                <Image
                  width={600}
                  height={600}
                  className="w-full"
                  src={data.heroSub[3].image}
                ></Image>
              </div>
              <p>
                Det må finnes mange veier inn i arbeidslivet - og stigene må
                være på plass der folk er. Vi i JobLoop har derfor en brennende
                iver for å etablere gode lav-terskel modeller. Her skal fler få
                utforske egne IT-interesser og komme i gang med koding etter
                arbeidslivets krav. Vi har god erfaring fra samarbeid med
                fontenehus, arbeids- og inkluderings bedrifter,
                utdanningsinstitusjoner og kodeklubber. Felles har vært et ønske
                om å etablere inkluderende avklarings- og læringsarenaer. Det
                kan for eksempel være et springbrett til ordinært arbeidsliv
                innen IT eller en intern avdeling for leveranser av digitale
                tjenester og IT-utvikling. Del gjerne dine ambisjoner med oss.
                Vi er alltid klare for å tenke muligheter sammen med flinke
                folk!
              </p>
            </div> */}
            {/* <div className="absolute top-0 block w-full -z-10 md:hidden">
              <div className="w-full">
                <div className=" absolute bg-gradient-to-b from-[rgba(34,34,34,0.82)] to-[rgba(34,34,34,0.33)] z-50 h-full w-full" />
                <Image src={data.heroSub[3].image} width={500} height={500} className="w-full" />
              </div>
              <div className="absolute left-0 right-0 mx-auto w-72 top-24 2xs:top-28 sm:w-[34rem]">
                <h1 className="absolute z-50 text-center text-white">{data.heroSub[3].title}</h1>
              </div>
              <div className="absolute z-50 p-8 bg-white top-52 rounded-t-3xl 2xs:top-60 xs:top-[16.5rem] sm:top-[19rem] sm:p-10 bottom-0">
                <PortableText value={data.heroSub[3].content} />
              </div>
            </div>
            <div className="hidden md:flex-row md:flex lg:px-24 lg:pt-24 md:px-10 md:pt-10">
              <div className="w-1/2">
                <h1 className="text-jobloop-primary-green">{data.heroSub[3].title}</h1>
                <PortableText value={data.heroSub[3].content} />
              </div>
              <div className="w-1/2 pt-6 md:pl-6">
                <Image
                  src={data.heroSub[3].image}
                  width={500}
                  height={500}
                  className="mx-auto my-auto rounded w-96"
                />
              </div>
            </div> */}

            <HeroSub content={data.heroSub[3]} key={data.heroSub[3]._id} />

            <div className="flex flex-col items-center justify-center mt-[400px] md:mt-20">
              <h1 className="p-20 text-2xl font-extrabold text-center md:text-3xl">
                Samarbeidsprosjekter
              </h1>
              <div className="flex justify-center w-screen p-20 bg-jobloop-primary-orange ">
                <div className="flex flex-col items-center w-5/6 gap-40 md:flex-row ">
                  <div className="hidden w-5/6 mt-20 md:block" key={data.VisionSections[1]._id}>
                    <Image
                      width={500}
                      height={500}
                      className="w-full"
                      src={data.VisionSections[1].ImageTwo}
                    ></Image>
                  </div>
                  <div className="flex flex-col w-5/6 gap-10 ">
                    <Image
                      width={100}
                      height={100}
                      className="w-5/6 md:w-3/6"
                      src={data.VisionSections[1].ImageOne}
                    ></Image>
                    <PortableText value={data.VisionSections[1].content} />
                    <ExternalLinkButton
                      Path="https://glode.no/"
                      Text="Mer om Gløde"
                      ariaLabel="Les mer om Gløde på deres nettside"
                      background="colour"
                    />
                  </div>
                </div>
              </div>
              {/* <Vision2Part
                content={data.VisionSections[1]}
                link="https://glode.no/"
                linkText="Mer om Gløde"
                linkAria="Les mer om Gløde på deres nettside"
                btnBG="colour"
              /> */}

              <div className="flex flex-col items-center justify-center w-full ">
                <div className="flex justify-center w-full ">
                  <div className="flex flex-col items-center justify-center w-5/6 gap-40 p-10 md:p-20 md:flex-row">
                    <div className="flex flex-col w-5/6 gap-10 ">
                      <Image
                        width={100}
                        height={100}
                        className="w-full md:w-4/6"
                        src={data.VisionSections[0].ImageOne}
                      ></Image>
                      <PortableText value={data.VisionSections[0].content} />
                      <ExternalLinkButton
                        Path="https://www.fontenehusetbergen.no/"
                        Text="Mer om Fontenehuset Bergen"
                        ariaLabel="Les mer om Fontenehuset Bergen på deres nettside"
                      />
                    </div>

                    <div className="hidden w-5/6 md:block " key={data.VisionSections[0]._id}>
                      <Image
                        width={500}
                        height={500}
                        className="w-full"
                        src={data.VisionSections[0].ImageTwo}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="block md:hidden"> 
                          <ProjectScroll  content={data.VisionSections} ></ProjectScroll>
                        </div> */}

              {/*<div>
              <h1 className="text-2xl font-extrabold text-center md:text-4xl ">
                Hva partnere sier om oss
              </h1>
            </div>

            <EndorsementComp
              key={data.endorsement[0]._id}
              image={data.endorsement[0].image}
              navn={data.endorsement[0].navn}
              firma={data.endorsement[0].firma}
              content={data.endorsement[0].content}
            />*/}
              <ContactComp
                key={data.kontaktseksjon[0]._id}
                imageOne={data.kontaktseksjon[0].ImageOne}
                title={data.kontaktseksjon[0].title}
                content={data.kontaktseksjon[0].content}
              />
              <div className="flex flex-col items-center w-full pb-32">
                <div className="pb-20">
                  <h1 className="text-3xl font-extrabold text-center lg:pb-28 lg:text-4xl">
                    Andre samarbeidspartnere
                  </h1>
                </div>
                <div className="flex justify-center w-full">
                  <div className="flex flex-col justify-center w-4/6 gap-32 pl-20 md:flex-row">
                    <Partners
                      key={data.samarbeid[0]._id}
                      title={data.samarbeid[0].title}
                      image={data.samarbeid[0].image}
                      content={data.samarbeid[0].content}
                      webLink="https://bergen.works"
                    />
                    {/*<Partners
                    key={data.samarbeid[0]._id}
                    title={data.samarbeid[0].title}
                    image={data.samarbeid[0].image}
                    content={data.samarbeid[0].content}
                  />
                  <Partners
                    key={data.samarbeid[0]._id}
                    title={data.samarbeid[0].title}
                    image={data.samarbeid[0].image}
                    content={data.samarbeid[0].content}
                  />*/}
                  </div>
                </div>
                {/* <div className="block md:hidden">
                            <CooptScroll content={data.samarbeid}></CooptScroll>
                          </div> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
