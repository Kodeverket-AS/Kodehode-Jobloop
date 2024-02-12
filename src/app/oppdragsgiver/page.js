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
  const newLogoArray = [
    data.mainTech[0],
    data.mainTech[1],
    data.mainTech[3],
    data.mainTech[2],
  ];
  const newIconArray = [
    data.competenceIcons[0],
    data.competenceIcons[3],
    data.competenceIcons[1],
    data.competenceIcons[2],
  ];
  return (
    <main className="flex flex-col items-center min-h-screen p-0">
      <HeroSub content={data.heroSub[3]} key={data.heroSub[3]._id} />
      <div className="flex flex-col items-center mt-80 md:mt-0">
        <KodehodeSummary content1={data.origin[0]} content2={data.courseTypes} />
        <StudyInParts content={data.CourseSections} />
        <FourIconRow title={"Noen av våre kodespråk"} content={newLogoArray} />
        <Competence content1={data.relevantCompetence[0]} content2={newIconArray} />
        <Offices content={data.OurLocals} />
        <ImageGallery content={data.ImageGallery} />
        <LinkToFaq />
      </div>
    </main>
  );
}
