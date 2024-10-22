import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import KodehodeSummary from "../../../components/KodehodeSummary";
import StudyInParts from "../../../components/StudyInParts";
import Offices from "../../../components/Offices";
import ImageGallery from "../../../components/ImageGallery";
import LinkToFaq from "../../../components/LinkToFaq";
import MultiCompetence from "../../../components/MultiCompetence";
import { AlertError } from "../../../components/AlertComponent";
import LinkToKontakt from "../../../components/LinkToKontakt";
import FourIconsRow from "../../../components/FourIconRow";
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
    <main className="flex flex-col items-center min-h-screen pt-20">
      <div className="flex flex-col items-center md:mt-0">
        <HeroSub
          content={data.heroSub[4]}
          buttonText={"Kontakt oss"}
          key={data.heroSub[4]._id}
        />

        <KodehodeSummary
          content1={data.origin[0]}
          content2={data.courseTypes}
        />

        <StudyInParts content={data.CourseSections} />

        <FourIconsRow
          title={"Noen av våre kodespråk"}
          content={data.mainTech}
          icons={[
            <FaHtml5
              className="pb-2 h-12 w-12 text-jobloop-primary-orange"
              key="html-icon"
            />,
            <FaCss3Alt
              className="pb-2 h-12 w-12 text-jobloop-primary-orange"
              key="css-icon"
            />,
            <FaJsSquare
              className="pb-2 h-12 w-12 text-jobloop-primary-orange"
              key="js-icon"
            />,
            <FaReact
              className="pb-2 h-12 w-12 text-jobloop-primary-orange"
              key="react-icon"
            />,
          ]}
        />

        <MultiCompetence
          content1={data.relevantCompetence[2]}
          content2={data.competenceIcons}
        />

        <div className="py-24">
          <Offices content={data.OurLocals} />
          {/* <LinkToKontakt /> */}
        </div>

        <div className="hidden xl:block">
          <ImageGallery content={data.ImageGallery} />
        </div>

        {/* <LinkToFaq /> */}
      </div>
    </main>
  );
}
