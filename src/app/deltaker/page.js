import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import KodehodeSummary from "../../../components/KodehodeSummary";
import StudyInParts from "../../../components/StudyInParts";
import Results from "../../../components/Results";
import ImageGallery from "../../../components/ImageGallery";
import LinkToFaq from "../../../components/LinkToFaq";
import VideoComp1 from "../../../components/VideoComp1";
import Teachers from "../../../components/Teachers";
// import Platforms from "../../../components/Platforms";
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
    <main className="flex flex-col items-center min-h-screen pt-20">
      <div className="flex flex-col items-center ">
        <HeroSub
          content={data.heroSub[2]}
          buttonText={"Jeg er interessert!"}
          key={data.heroSub[2]._id}
        />
        <KodehodeSummary
          content1={data.origin[1]}
          content2={data.courseTypes}
        />
        <StudyInParts content={data.CourseSections} />
        <div className="w-full flex flex-col gap-8 py-12">
          <h2 className="text-center underline decoration-4 pb-8 underline-offset-8 decoration-jobloop-primary-green">
            Koding i HTML og CSS
          </h2>

          <VideoComp1
            url="https://www.youtube.com/embed/LocPs6zdkrQ?si=afaKRzcMA80WvwtW&amp;"
            alt={"Timelapse video av noen som koder en portfolio i HTML og CSS"}
          />
        </div>
        <MultiCompetence
          content1={data.relevantCompetence[0]}
          content2={data.competenceIcons}
        />
        <section className="w-full flex flex-col gap-8 pb-12">
          <h2 className="text-center underline decoration-4 pb-8 underline-offset-8 decoration-jobloop-primary-green">
            Design i Figma
          </h2>

          <VideoComp1
            url="https://www.youtube.com/embed/6riX-2lnIyg?si=g3aOkgbSOaBsJE-B&amp;"
            alt={"Timelapse video av noen som designer en nettside i Figma"}
          />
        </section>
        <Teachers
          content={teachers}
          title={"Våre veiledere"}
        />
        {/*<Platforms />*/}
        {/*<div className=" bg-jobloop-secondary-orange">
          <Results content={data.results[0]} />
        </div>*/}
        <div className="w-screen">
          <Results content={data.results[0]} />
        </div>
        <ImageGallery content={data.ImageGallery} />
        <section className="w-full pb-12">
          <VideoComp1
            url="https://www.youtube.com/embed/gIrgqXD27EI?si=bh2im5jdpu-apCIQ&amp;"
            alt={"Timelapse av noen som koder en app i React Native"}
          />
        </section>
        <LinkToFaq />
      </div>
    </main>
  );
}
