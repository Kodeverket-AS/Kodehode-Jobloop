import { SectionComponent, TextBlock } from "../../../components/SectionComponents";
import { getData } from "../page";
import KodehodeSummary from "../../../components/KodehodeSummary";
import Results from "../../../components/Results";
import ImageGallery from "../../../components/ImageGallery";
import LinkToFaq from "../../../components/LinkToFaq";
import VideoComp1 from "../../../components/VideoComp1";
import Teachers from "../../../components/Teachers";
import MultiCompetence from "../../../components/MultiCompetence";
import Image from "next/image";

/**
 * ========================================================================
 * WARNING:
 * Errors occuring due to Youtube links. Temp. removed.
 * In future Chrome versions, reading third-party cookies will be blocked.
 * This behavior protects user data from cross-site tracking.
 * I.E Sanity Icons on this page. = data.competenceIcons
 * ========================================================================
 */

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
  // console.log(data.competenceIcons);
  return (
    <main className="flex flex-col items-center justify-between min-h-screen pt-28 space-y-16 lg:space-y-24 my-12 px-4">
        <SectionComponent
          leftContent={
            <Image
              src={data.heroSub[2].image}
              width={800}
              height={500}
              className="w-full rounded-xl"
              alt={data.heroSub[2].alt || ""}
            />
          }
          rightContent={
            <TextBlock
              title={data.heroSub[2].title}
              content={data.heroSub[2].content}
              isButton={true}
              path="/kontakt"
              text="Jeg er interessert!"
              isContained={true}
              isOrange={false}
            />
          }
        />
        <KodehodeSummary
          content1={data.origin[1]}
          content2={data.courseTypes}
        />
        <SectionComponent
          leftContent={
            <Image
              src={data.CourseSections[0].image}
              width={500}
              height={500}
              alt={data.CourseSections[0].alt || ""}
              className="w-full rounded-xl"
            />
          }
          rightContent={
            <TextBlock
              title={data.CourseSections[0].title}
              content={data.CourseSections[0].content}
              isButton={false}
            />
          }
        />

        <SectionComponent
          reverseLayoutOrder={true}
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
        {/* <div className="w-full flex flex-col gap-8 py-12">
          <h2 className="text-center underline decoration-4 pb-8 underline-offset-8 decoration-jobloop-primary-green">
            Koding i HTML og CSS
          </h2>

          <VideoComp1
            url="https://www.youtube.com/embed/LocPs6zdkrQ?si=afaKRzcMA80WvwtW&amp;"
            alt={"Timelapse video av noen som koder en portfolio i HTML og CSS"}
          />
        </div> */}
        <MultiCompetence
          content1={data.relevantCompetence[0]}
          content2={data.competenceIcons}
        />
        {/* <section className="w-full flex flex-col gap-8 pb-12">
          <h2 className="text-center underline decoration-4 pb-8 underline-offset-8 decoration-jobloop-primary-green">
            Design i Figma
          </h2>

          <VideoComp1
            url="https://www.youtube.com/embed/6riX-2lnIyg?si=g3aOkgbSOaBsJE-B&amp;"
            alt={"Timelapse video av noen som designer en nettside i Figma"}
          />
        </section> */}
        <Teachers
          content={teachers}
          title={"Våre veiledere"}
        />

        <div className="w-full">
          <Results content={data.results[0]} />
        </div>
        <div className="hidden xl:block">
          <ImageGallery content={data.ImageGallery} />
        </div>
        {/* <section className="w-full pb-12">
          <VideoComp1
            url="https://www.youtube.com/embed/gIrgqXD27EI?si=bh2im5jdpu-apCIQ&amp;"
            alt={"Timelapse av noen som koder en app i React Native"}
          />
        </section> */}
        {/* <LinkToFaq /> */}
    </main>
  );
}
