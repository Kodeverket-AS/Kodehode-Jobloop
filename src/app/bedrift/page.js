import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import EgenskapCoop from "../../../components/EgenskapCoop";
import FourIconRow from "../../../components/FourIconRow";
import KodehodeSummary from "../../../components/KodehodeSummary";
import KodehodeInternship from "../../../components/KodehodeInternship";
import Competence from "../../../components/Competence";
import ContactComp from "../../../components/ContactComp";
import LinkToFaq from "../../../components/LinkToFaq";
import AdaptTech from "../../../components/AdaptTech";
import CompanyCarousel from "../../../components/CompanyCarousel";
import Results from "../../../components/Results";

export default async function Bedrift() {
  const data = await getData();
  //console.log(data.relevantCompetence[0]);
  const newLogoArray = [
    data.egsCoop[3],
    data.egsCoop[2],
    data.egsCoop[1],
    data.egsCoop[0],
  ];
  const newIconArray = [
    data.competenceIconsBuissness[1],
    data.competenceIconsBuissness[3],
    data.competenceIconsBuissness[0],
    data.competenceIconsBuissness[2],
  ];
  const techArray = [
    data.mainTech[0],
    data.mainTech[1],
    data.mainTech[3],
    data.mainTech[2],
  ];
  return (
    <>
      <main className="flex flex-col items-center min-h-screen p-0">
        <HeroSub content={data.heroSub[5]} key={data.heroSub[5]._id} />
        <div className="flex flex-col items-center mt-[370px] md:mt-20">
          <FourIconRow title={"Hva ser Kodehode etter hos samarbeidspartnere?"} content={newLogoArray} />
          <KodehodeInternship content1={data.origin} content2={data.internship} />
          <Competence content1={data.relevantCompetence[1]} content2={newIconArray} />
          <AdaptTech content1={data.adaptTech} content2={techArray} />
          <CompanyCarousel content={data.companyLogos} />
          <ContactComp 
            key={data.kontaktseksjon[0]._id} 
            imageOne={data.kontaktseksjon[0].ImageOne} 
            title={data.kontaktseksjon[0].title}
            content={data.kontaktseksjon[0].content}
          />
          <Results content={data.results[0]} />
          <LinkToFaq />
        </div>
      </main>
    </>
  );
}
