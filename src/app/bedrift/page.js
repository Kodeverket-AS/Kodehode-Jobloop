import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import EgenskapCoop from "../../../components/EgenskapCoop";
import KodehodeSummary from "../../../components/KodehodeSummary";
import KodehodeInternship from "../../../components/KodehodeInternship";
import Competence from "../../../components/Competence";
import ContactComp from "../../../components/ContactComp";
import LinkToFaq from "../../../components/LinkToFaq";

export default async function Bedrift() {
  const data = await getData();
  console.log(data.relevantCompetence[0])
  return (
    <>
      <main className="flex flex-col items-center min-h-screen p-0">
        <HeroSub content={data.heroSub[5]} key={data.heroSub[5]._id} />
        <div className="flex flex-col items-center mt-80 md:mt-20">
          <EgenskapCoop content={data.egsCoop} />
          <KodehodeInternship content1={data.origin} content2={data.internship} />
          <Competence content1={data.relevantCompetence[1]} content2={data.competenceIconsBuissness} />
          <ContactComp 
            key={data.kontaktseksjon[0]._id} 
            imageOne={data.kontaktseksjon[0].ImageOne} 
            title={data.kontaktseksjon[0].title}
            content={data.kontaktseksjon[0].content}
          />
          <LinkToFaq />
        </div>
      </main>
    </>
  );
}
