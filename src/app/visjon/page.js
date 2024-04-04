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
import VisionSub from "../../../components/VisionSub";
import VisionTop from "../../../components/VisionSub";

export const metadata = {
  title: "Vår Visjon: Det finnes et mangfold av potensial | Kodehode",
};

export default async function Vision() {
  const data = await getData();

  return (
    <>
      <main className="flex flex-col items-center w-full min-h-screen">
        <div className="portrait:hidden landscape:block">
          {/*with old mobile herosub style: mt-32*/}
          <VisionSub content={data.heroSub[3]} key={data.heroSub[3]._id} />
        </div>
        <div className="w-full portrait:block landscape:hidden">
          <VisionTop content={data.heroSub[3]} key={data.heroSub[3]._id} />
        </div>
        <div className="flex flex-col items-center justify-center md:mt-0">
          {/*with old mobile herosub style: mt-[500px]*/}
          <div className="w-full bg-jobloop-secondary-orange">
            <h2 className="p-20 text-2xl font-extrabold text-center text-kv-white pb-7 md:text-3xl">
              Samarbeidsprosjekter
            </h2>
          </div>
          <Vision2Part
            content={data.VisionSections[1]}
            link="https://glode.no/"
            linkText="Mer om Gløde"
            linkAria="Les mer om Gløde på deres nettside"
            background="jobloop-secondary-orange"
            imgSide="left"
          />
          <Vision2Part
            content={data.VisionSections[0]}
            link="https://www.fontenehusetbergen.no/"
            linkText="Mer om Fontenehuset Bergen"
            linkAria="Les mer om Fontenehuset Bergen på deres nettside"
          />

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
            alt={data.kontaktseksjon[0].altOne}
          />
          {/* <div className="flex flex-col items-center w-full pb-32 mt-20">
                <div className="pb-20">
                  <h2 className="font-extrabold text-center xs:text-3xl 2xs:text-2xl lg:pb-28 lg:text-4xl">
                    Andre samarbeidspartnere
                  </h2>
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
                    <Partners
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
                  />
                  </div>
                </div>
                 <div className="block md:hidden">
                            <CooptScroll content={data.samarbeid}></CooptScroll>
                          </div> 
              </div>*/}
        </div>
      </main>
    </>
  );
}
