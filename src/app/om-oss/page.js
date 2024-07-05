//import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import Offices from "../../../components/Offices";
import Teachers from "../../../components/Teachers";
import JobloopPodium from "../../../components/JobloopPodium";
import OmOssTop from "../../../components/OmOssTop";
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
  //console.log(data.about);
  return (
    <>
      <main className="flex flex-col items-center min-h-screen py-20">
        <div className="flex w-11/12 flex-col items-center ">
          <OmOssTop
            content={heroSubData}
            buttonText="Kontakt oss"
            key={heroSubData._id}
          />

          <JobloopPodium content={data.about} />
        </div>
      </main>
    </>
  );
}
