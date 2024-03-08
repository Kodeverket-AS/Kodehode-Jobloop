//import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import Offices from "../../../components/Offices";
import Teachers from "../../../components/Teachers";
import JobloopPodium from "../../../components/JobloopPodium";
import OmOssTop from "../../../components/OmOssTop";


export default async function About() {
 
  const data = await getData();
  const heroSubData = data.heroSub[7];
  const selectedTeachersData = [data.personDatabase[0], data.personDatabase[1], data.personDatabase[6], data.personDatabase[7]];
  
  console.log(data.about);
return (
    <>
      <main className="flex flex-col items-center min-h-screen p-0">
      <OmOssTop 
       content={heroSubData}
       buttonText="Kontakt oss"
       key={heroSubData._id}
      />

      <div className="flex flex-col items-center w-full mt-5">
        <div className="w-full">
        <Teachers
        content={selectedTeachersData} 
        title="Vårt team"
        />
        </div>
         </div>
      <div className="flex flex-col items-center ">
        <JobloopPodium content={data.about}/>
        </div>
      <div className="w-full">
        <Offices
        content={data.OurLocals}
        className="md:bg-jobloop-primary-green" 
        />
      </div>
</main>
    </>
  );
}
