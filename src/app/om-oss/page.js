//import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import Offices from "../../../components/Offices";
import Teachers from "../../../components/Teachers";
import JobloopPodium from "../../../components/JobloopPodium";
import { SectionComponent, TextBlock } from "../../../components/SectionComponents";
import Image from "next/image";
import LinkToFaq from "../../../components/LinkToFaq";

export const metadata = {
  title: "Om oss | Kodehode",
};

export default async function About() {
  const data = await getData();
  const heroSubData = data.heroSub[7];
  const selectedTeachersData = [
    data.personDatabase[0],
    data.personDatabase[1],
    data.personDatabase[6],
    data.personDatabase[7],
  ];

  return (
    <>
      <main className="flex flex-col items-center min-h-screen py-20">
        <div className="flex flex-col items-center ">
          <SectionComponent
            reverseLayoutOrder={true}
            leftContent={
              <TextBlock
                title={heroSubData.title}
                content={heroSubData.content}
                isButton={true}
                path="/kontakt"
                text="Kontakt oss"
                isContained={true}
                isOrange={false}
              />
            }
            rightContent={
              <Image
                src={heroSubData.image}
                width={1080}
                height={964}
                className="mx-auto w-full my-auto rounded-xl"
                alt={heroSubData.alt || ""}
              />
            }
          />

          <JobloopPodium content={data.about} />
        </div>
      </main>
    </>
  );
}
