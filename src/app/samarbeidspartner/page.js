import Image from "next/image";
import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import KodehodeSummary from "../../../components/KodehodeSummary";
import StudyInParts from "../../../components/StudyInParts";
import FourIconRow from "../../../components/FourIconRow";
import Competence from "../../../components/Competence";
import Offices from "../../../components/Offices";
import ImageGallery from "../../../components/ImageGallery";
import LinkToFaq from "../../../components/LinkToFaq";

export default async function Oppdragsgiver() {
  const data = await getData();
  //console.log(data.courseTypes);
  return (
    <main className="flex flex-col items-center min-h-screen p-0">
      <HeroSub
        content={data.heroSub[4]}
        buttonText={"Kontakt oss"}
        key={data.heroSub[4]._id}
      />
      <div className="flex flex-col items-center mt-[26rem] md:mt-0">
        <KodehodeSummary
          content1={data.origin[0]}
          content2={data.courseTypes}
        />
        <StudyInParts content={data.CourseSections} />
        <FourIconRow title={"Noen av våre kodespråk"} content={data.mainTech} />
        <Competence
          content1={data.relevantCompetence[0]}
          content2={data.competenceIcons}
        />
        <div className="w-full  bg-jobloop-secondary-orange">
          <Offices content={data.OurLocals} />
        </div>
        <ImageGallery content={data.ImageGallery} />
        <LinkToFaq />
      </div>
    </main>
  );
}
