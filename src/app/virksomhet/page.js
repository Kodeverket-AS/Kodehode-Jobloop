import Image from "next/image";
import HeroSub from "../../../components/HeroSub";
import EgenskapCoop from "../../../components/EgenskapCoop";
import { getData } from "../page";
import Navbar, { NavbarAlt } from "../../../components/navigation/Navbar";
import KodehodeSummary from "../../../components/KodehodeSummary";
import StudyInParts from "../../../components/StudyInParts";
import FourIconRow from "../../../components/FourIconRow";
import Competence from "../../../components/Competence";
import Offices from "../../../components/Offices";
import ImageGallery from "../../../components/ImageGallery";
import LinkToFaq from "../../../components/LinkToFaq";

export default async function Virksomhet() {
  const data = await getData();
  //console.log(data.courseTypes);
  return (
    <>
      {/*<div className="block md:hidden">
        <Navbar />
      </div>
      <div className="hidden md:block">
        <NavbarAlt subpage="Virksomhet" />
      </div>*/}
      <main className="flex flex-col items-center min-h-screen p-0">
        <HeroSub content={data.heroSub[3]} key={data.heroSub[3]._id} />
        <div className="flex flex-col items-center mt-80 md:mt-0">
          <KodehodeSummary content1={data.origin} content2={data.courseTypes} />
          <StudyInParts content={data.CourseSections} />
          <FourIconRow content={data.mainTech} />
          <Competence content1={data.relevantCompetence} content2={data.competenceIcons} />
          <Offices content={data.OurLocals} />
          <ImageGallery content={data.ImageGallery} />
          <LinkToFaq />
        </div>
      </main>
    </>
  );
}
