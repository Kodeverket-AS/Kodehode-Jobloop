import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import Offices from "../../../components/Offices";
import Teachers from "../../../components/Teachers";


export default async function About() {
 
  const data = await getData();
  const heroSubData = data.heroSub[7];
  console.log(heroSubData);

  return (
    <>
      <main className="flex flex-col items-center min-h-screen p-24">
      <HeroSub 
       content={heroSubData}
       buttonText="Kontakt oss"
       key={heroSubData._id} />
      
        <h1 className = "text-6xl font-bold text-jobloop-primary-green"></h1>
        <p className="p-4 font-bold"></p>
        
      </main>
    </>
  );
}
