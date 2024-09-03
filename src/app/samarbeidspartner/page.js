import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import KodehodeSummary from "../../../components/KodehodeSummary";
import StudyInParts from "../../../components/StudyInParts";
import FourIconRow from "../../../components/FourIconRow";
import Offices from "../../../components/Offices";
import ImageGallery from "../../../components/ImageGallery";
import LinkToFaq from "../../../components/LinkToFaq";
import MultiCompetence from "../../../components/MultiCompetence";
import { AlertError } from "../../../components/AlertComponent";
import LinkToKontakt from "../../../components/LinkToKontakt";

export const metadata = {
  title: "Samarbeidspartner: Har du en deltaker med IT-interesse? | Kodehode",
};

export default async function Oppdragsgiver() {
  const data = await getData();
  //console.log(data.courseTypes);
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

        <FourIconRow
          title={"Noen av våre kodespråk"}
          content={data.mainTech}
        />

        <MultiCompetence
          content1={data.relevantCompetence[2]}
          content2={data.competenceIcons}
        />

        <div className="w-full py-24">
          <Offices content={data.OurLocals} />
          <LinkToKontakt />
        </div>

        <div className="hidden xl:block">
          <ImageGallery content={data.ImageGallery} />
        </div>

        {/* <LinkToFaq /> */}
      </div>
    </main>
  );
}
