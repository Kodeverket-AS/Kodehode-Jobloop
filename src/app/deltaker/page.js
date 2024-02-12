import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import KodehodeSummary from "../../../components/KodehodeSummary";
import StudyInParts from "../../../components/StudyInParts";
import Competence from "../../../components/Competence";
import Results from "../../../components/Results";
import ImageGallery from "../../../components/ImageGallery";
import LinkToFaq from "../../../components/LinkToFaq";
import VideoComp1 from "../../../components/VideoComp1";
import Offices from "../../../components/Offices";
import Teachers from "../../../components/Teachers";
import Platforms from "../../../components/Platforms";

export default async function Deltaker() {
  const data = await getData();
  const newIconArray = [
    data.competenceIcons[0],
    data.competenceIcons[3],
    data.competenceIcons[1],
    data.competenceIcons[2],
  ];
  const teachers = [
    data.personDatabase[4],
    data.personDatabase[2],
    data.personDatabase[0],
    data.personDatabase[5],
  ];
  return (
    <main className="flex flex-col items-center min-h-screen p-0">
      <HeroSub content={data.heroSub[1]} buttonText={"Jeg er interessert!"} key={data.heroSub[1]._id} />
      <div className="flex flex-col items-center mt-[370px] md:mt-20">
        <KodehodeSummary content1={data.origin[0]} content2={data.courseTypes} />
        <StudyInParts content={data.CourseSections} />
        <div className="w-full bg-jobloop-primary-green">
          <VideoComp1 url="https://www.youtube.com/embed/LocPs6zdkrQ?si=afaKRzcMA80WvwtW&amp;" />
        </div>
        <Competence
          content1={data.relevantCompetence[2]}
          content2={newIconArray}
        />
        <div className="w-full">
          <VideoComp1 url="https://www.youtube.com/embed/6riX-2lnIyg?si=g3aOkgbSOaBsJE-B&amp;" />
        </div>
        <Teachers content={teachers} />
        <Platforms />
        <div className=" bg-jobloop-secondary-orange">
          <Results content={data.results[0]} />
        </div>
        <ImageGallery content={data.ImageGallery} />
        <div className="w-full bg-jobloop-primary-green">
          <VideoComp1 url="https://www.youtube.com/embed/gIrgqXD27EI?si=bh2im5jdpu-apCIQ&amp;" />
        </div>
        <LinkToFaq />
      </div>
    </main>
  );
}
