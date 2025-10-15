import { getData } from "../page";
import ContactComp from "../../../components/ContactComp";
import { SectionComponent, TextBlock } from "../../../components/SectionComponents";
import VisionTop from "../../../components/VisionSub";
import Image from "next/image";

export const metadata = {
  title: "Vår Visjon: Det finnes et mangfold av potensial | Kodehode",
};

export default async function Vision() {
  const data = await getData();

  return (
    <>
      <main className="flex flex-col items-center justify-between min-h-screen pt-28 space-y-16 mb-12 px-4">
        <VisionTop
          content={data.heroSub[3]}
          key={data.heroSub[3]._id}
        />
        <SectionComponent
            leftContent={
              <TextBlock
                title="Gløde"
                content={data.VisionSections[1].content}
                isButton={true}
                path="https://glode.no/"
                text="Gå til Gløde.no"
                isContained={false}
                isOrange={false}
              />
            }
            rightContent={
              <Image
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                src={data.VisionSections[1].ImageTwo}
                alt={data.VisionSections[1].AltTwo || ""}
              />
            }
          />
          <SectionComponent
            reverseLayoutOrder={true}
            leftContent={
              <TextBlock
                title="Fontenehuset Bergen"
                content={data.VisionSections[0].content}
                isButton={true}
                path="https://www.fontenehusetbergen.no/"
                text="Gå til Fontenehuset.no"
                isContained={false}
                isOrange={false}
              />
            }
            rightContent={
              <Image
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                src={data.VisionSections[0].ImageTwo}
                alt={data.VisionSections[0].AltTwo || ""}
              />
            }
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
      </main>
    </>
  );
}
