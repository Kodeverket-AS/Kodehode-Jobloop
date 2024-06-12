import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import KodehodeSummary from "../../../components/KodehodeSummary";
import StudyInParts from "../../../components/StudyInParts";
import Results from "../../../components/Results";
import ImageGallery from "../../../components/ImageGallery";
import LinkToFaq from "../../../components/LinkToFaq";
import VideoComp1 from "../../../components/VideoComp1";
import Teachers from "../../../components/Teachers";
import Platforms from "../../../components/Platforms";
import MultiCompetence from "../../../components/MultiCompetence";

export const metadata = {
  title: "Deltaker: Er du vårt neste Kodehode? | Kodehode",
};

export default async function Deltaker() {
  const data = await getData();
  const teachers = [
    data.personDatabase[2],
    data.personDatabase[3],
    data.personDatabase[4],
    data.personDatabase[5],
  ];
  return (
    <main className="flex flex-col items-center min-h-screen p-0">
      <HeroSub
        content={data.heroSub[2]}
        buttonText={"Jeg er interessert!"}
        key={data.heroSub[2]._id}
      />
      <div className="flex flex-col items-center mt-[26rem] md:mt-20">
        <KodehodeSummary
          content1={data.origin[1]}
          content2={data.courseTypes}
        />
        <StudyInParts content={data.CourseSections} />
        <div className="w-full flex flex-col gap-8 py-12">
          <div className="border-b-2 pb-2 border-jobloop-primary-orange w-fit mx-auto">
            <h2 className="text-center">Koding i HTML og CSS</h2>
          </div>
          <VideoComp1
            url="https://www.youtube.com/embed/LocPs6zdkrQ?si=afaKRzcMA80WvwtW&amp;"
            alt={"Timelapse video av noen som koder en portfolio i HTML og CSS"}
          />
        </div>
        <MultiCompetence
          content1={data.relevantCompetence[0]}
          content2={data.competenceIcons}
        />
        <div className="w-full flex flex-col gap-8 pb-12">
          <div className="border-b-2 pb-2 border-jobloop-primary-orange w-fit mx-auto">
            <h2 className="text-center">Design i Figma</h2>
          </div>
          <VideoComp1
            url="https://www.youtube.com/embed/6riX-2lnIyg?si=g3aOkgbSOaBsJE-B&amp;"
            alt={"Timelapse video av noen som designer en nettside i Figma"}
          />
        </div>
        {/* <Teachers
          content={teachers}
          title={"Våre veiledere"}
        /> */}
        {/*<Platforms />*/}
        {/*<div className=" bg-jobloop-secondary-orange">
          <Results content={data.results[0]} />
        </div>*/}
        <div className="bg-neutral-100 w-screen">
          <Results content={data.results[0]} />
        </div>
        <ImageGallery content={data.ImageGallery} />
        {/* <div className="w-full h-60">
          <VideoComp1
            url="https://www.youtube.com/embed/gIrgqXD27EI?si=bh2im5jdpu-apCIQ&amp;"
            alt={"Timelapse av noen som koder en app i React Native"}
          />
        </div> */}
        <LinkToFaq />
      </div>
    </main>
  );
}
