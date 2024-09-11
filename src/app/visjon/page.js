import { getData } from "../page";
import ContactComp from "../../../components/ContactComp";
import {
  VisionTextLeft,
  VisionTextRight,
} from "../../../components/Vision2Part";
import VisionTop from "../../../components/VisionSub";
import Link from "next/link";
import { LinkButtonContained } from "../../../components/Buttons";

export const metadata = {
  title: "Vår Visjon: Det finnes et mangfold av potensial | Kodehode",
};

export default async function Vision() {
  const data = await getData();

  return (
    <>
      <main className="flex flex-col items-center min-h-screen py-20">
        <div className="flex flex-col gap-8 items-center ">
          <VisionTop
            content={data.heroSub[3]}
            key={data.heroSub[3]._id}
          />
          <VisionTextRight
            content={data.VisionSections[1]}
            link="https://glode.no/"
            linkText="Gå til Gløde.no"
            linkAria="Les mer om Gløde på deres nettside"
            title="Gløde"
          />
          <VisionTextLeft
            content={data.VisionSections[0]}
            link="https://www.fontenehusetbergen.no/"
            linkText="Gå til Fontenehuset.no"
            linkAria="Les mer om Fontenehuset Bergen på deres nettside"
            title="Fontenehuset Bergen"
          />

          {/* <div className="w-full">
            <div className="w-fit m-auto mt-8 md:mt-16">
              <h1 className="text-2xl font-extrabold text-center md:text-4xl ">
                Hva partnere sier om oss
              </h1>
              <hr className="w-full h-2 mt-2 bg-jobloop-secondary-orange" />
            </div>
          </div> */}
          {/* <div className="flex justify-center h-fit max-w-[1600px] min-h-fit mb-8 md:mb-16">
            <EndorsementComp data={data.endorsement} />
          </div> */}
          <ContactComp
            key={data.kontaktseksjon[0]._id}
            imageOne={data.kontaktseksjon[0].ImageOne}
            title={data.kontaktseksjon[0].title}
            content={data.kontaktseksjon[0].content}
            alt={data.kontaktseksjon[0].altOne}
          />
        </div>
      </main>
    </>
  );
}
