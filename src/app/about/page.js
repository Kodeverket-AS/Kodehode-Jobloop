import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import Offices from "../../../components/Offices";
import Teachers from "../../../components/Teachers";
import JobloopPodium from "../../../components/JobloopPodium";

export const metadata = {
  title:
    "Om oss: en alternativ plattform for kvalifisering og rekruttering av junior utviklere og innholdsprodusenter | Kodehode",
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
  console.log(data.about);
  return (
    <>
      <main className="flex flex-col items-center min-h-screen p-0">
        <HeroSub content={heroSubData} buttonText="Kontakt oss" key={heroSubData._id} />

        <div className="flex flex-col items-center w-full mt-5">
          <div className="w-full">
            <Teachers content={selectedTeachersData} />
          </div>
        </div>
        <div className="flex flex-col items-center ">
          <JobloopPodium content={data.about} />
        </div>
        <div className="w-full">
          <Offices content={data.OurLocals} />
        </div>
      </main>
    </>
  );
}
