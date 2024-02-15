import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import Offices from "../../../components/Offices";
import Teachers from "../../../components/Teachers";


export default async function About() {
  //console.log('About function is running');
  const data = await getData();
  //console.log(data.heroSub[7]);
  return (
    <>
      <main className="flex flex-col items-center min-h-screen p-24">
      <HeroSub content={data.heroSub[7]} buttonText={"Kontakt oss"} key={data.heroSub[7]._id} />
      
        <h1 className = "text-6xl font-bold text-jobloop-primary-green"></h1>
        <p className="p-4 font-bold">
          {data.content[7].content}
        </p>
        <p></p>
      </main>
    </>
  );
}
