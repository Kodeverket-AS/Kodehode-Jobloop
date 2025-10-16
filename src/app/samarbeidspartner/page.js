import { SectionComponent, TextBlock } from "../../../components/SectionComponents";
import { getData } from "../page";
import KodehodeSummary from "../../../components/KodehodeSummary";
import Offices from "../../../components/Offices";
import ImageGallery from "../../../components/ImageGallery";
import LinkToFaq from "../../../components/LinkToFaq";
import MultiCompetence from "../../../components/MultiCompetence";
import { AlertError } from "../../../components/AlertComponent";
import LinkToKontakt from "../../../components/LinkToKontakt";
import FourIconsRow from "../../../components/FourIconRow";
import Image from "next/image";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";

export const metadata = {
  title:
    "Samarbeidspartner: Har du en deltaker med IT-interesse? | Kodehode",
};

export default async function Oppdragsgiver() {
  const data = await getData();
  if (!data) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <AlertError />
      </div>
    );
  }
  return (
    <main className="flex flex-col items-center justify-between min-h-screen pt-28 space-y-16 lg:space-y-24 my-12 px-4">
        <SectionComponent
          reverseLayoutOrder={true}
          leftContent={
            <TextBlock
              title={data.heroSub[4].title}
              content={data.heroSub[4].content}
              isButton={true}
              path="/kontakt"
              text="Kontakt oss"
              isContained={true}
              isOrange={false}
            />
          }
          rightContent={
            <Image
              src={data.heroSub[4].image}
              width={800}
              height={500}
              className="w-full rounded-xl"
              alt={data.heroSub[4].alt || ""}
            />
          }
        />

        <KodehodeSummary
          content1={data.origin[0]}
          content2={data.courseTypes}
        />

        <SectionComponent
          leftContent={
            <TextBlock
              title={data.CourseSections[0].title}
              content={data.CourseSections[0].content}
              isButton={false}
            />
          }
          rightContent={
            <Image
              src={data.CourseSections[0].image}
              width={500}
              height={500}
              alt={data.CourseSections[0].alt || ""}
              className="w-full rounded-xl"
            />
          }
        />

        <SectionComponent
          reverseLayoutOrder={false}
          leftContent={
            <Image
              src={data.CourseSections[1].image}
              width={800}
              height={500}
              alt={data.CourseSections[1].alt || ""}
              className="rounded-xl w-full"
            />
          }
          rightContent={
            <TextBlock
              title={data.CourseSections[1].title}
              content={data.CourseSections[1].content}
              isButton={false}
            />
          }
        />

        <FourIconsRow
          title={"Noen av våre kodespråk"}
          content={data.mainTech}
          icons={[
            <FaHtml5
              className="pb-2 h-8 w-8 md:h-12 md:w-12 text-jobloop-primary-orange"
              key="html-icon"
            />,
            <FaCss3Alt
              className="pb-2 h-8 w-8 md:h-12 md:w-12 text-jobloop-primary-orange"
              key="css-icon"
            />,
            <FaJsSquare
              className="pb-2 h-8 w-8 md:h-12 md:w-12 text-jobloop-primary-orange"
              key="js-icon"
            />,
            <FaReact
              className="pb-2 h-8 w-8 md:h-12 md:w-12 text-jobloop-primary-orange"
              key="react-icon"
            />,
          ]}
        />

        <MultiCompetence
          content1={data.relevantCompetence[2]}
          content2={data.competenceIcons}
        />

        <div className="">
          <Offices content={data.OurLocals} />
          {/* <LinkToKontakt /> */}
        </div>

        <div className="hidden xl:block">
          <ImageGallery content={data.ImageGallery} />
        </div>

        {/* <LinkToFaq /> */}
    </main>
  );
}
