import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import EgenskapCoop from "../../../components/EgenskapCoop";
import KodehodeSummary from "../../../components/KodehodeSummary";
import Competence from "../../../components/Competence";
import ContactComp from "../../../components/ContactComp";
import LinkToFaq from "../../../components/LinkToFaq";
import Link from "next/link";

export default async function Bedrift() {
  const data = await getData();
  return (
    <>
      <main className="flex flex-col items-center min-h-screen p-0">
        <HeroSub content={data.heroSub[3]} key={data.heroSub[3]._id} />
        <div className="flex flex-col items-center mt-80 md:mt-0">
          <EgenskapCoop content={data.egsCoop} />
          <KodehodeSummary content1={data.origin} content2={data.courseTypes} />
          <Competence
            content1={data.relevantCompetence}
            content2={data.competenceIcons}
          />
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
