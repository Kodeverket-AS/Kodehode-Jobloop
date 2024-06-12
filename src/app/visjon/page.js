import { getData } from "../page";
import EndorsementComp from "../../../components/EndorsementComp";
import ContactComp from "../../../components/ContactComp";
import Partners from "../../../components/PartnersComp";
import { ProjectScroll } from "../../../components/ProjectScroll";
import { CooptScroll } from "../../../components/ProjectScroll";
import Vision2Part from "../../../components/Vision2Part";
import VisionTop from "../../../components/VisionSub";

export const metadata = {
  title: "Vår Visjon: Det finnes et mangfold av potensial | Kodehode",
};

export default async function Vision() {
  const data = await getData();

  return (
    <>
      <main className="flex flex-col items-center w-full min-h-screen">
        <VisionTop
          content={data.heroSub[3]}
          key={data.heroSub[3]._id}
        />
        <div className="flex flex-col items-center justify-center md:mt-0">
          <div className="w-full bg-neutral-100 pt-12 pb-16 flex flex-col gap-12">
            {/* <div className="w-fit m-auto">
              <h2 className="text-2xl font-extrabold text-kv-black md:text-3xl">
                Samarbeidsprosjekter
              </h2>
              <hr className="w-full h-2 bg-jobloop-secondary-orange mt-2" />
            </div> */}
            <Vision2Part
              content={data.VisionSections[1]}
              link="https://glode.no/"
              linkText="Mer om Gløde"
              linkAria="Les mer om Gløde på deres nettside"
              title="Gløde"
            />
            <Vision2Part
              content={data.VisionSections[0]}
              link="https://www.fontenehusetbergen.no/"
              linkText="Mer om Fontenehuset"
              linkAria="Les mer om Fontenehuset Bergen på deres nettside"
              title="Fontenehuset Bergen"
              imgSide="left"
            />
          </div>
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
