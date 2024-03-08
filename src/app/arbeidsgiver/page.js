import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import FourIconRow from "../../../components/FourIconRow";
import KodehodeInternship from "../../../components/KodehodeInternship";
import Competence from "../../../components/Competence";
import ContactComp from "../../../components/ContactComp";
import LinkToFaq from "../../../components/LinkToFaq";
import AdaptTech from "../../../components/AdaptTech";
import CompanyCarousel from "../../../components/CompanyCarousel";
import Results from "../../../components/Results";

export default async function Bedrift() {
  const data = await getData();
  //console.log(data.heroSub);
  const techIcons = [data.mainTech[4], data.mainTech[5], data.mainTech[6], data.mainTech[7]];

  return (
    <main className="flex flex-col items-center min-h-screen p-0">
      <HeroSub
        content={data.heroSub[6]}
        buttonText={"Søk etter kandidater"}
        key={data.heroSub[6]._id}
      />
      <div className="flex flex-col items-center mt-[400px] md:mt-20">
        <FourIconRow
          title={"Hva ser Kodehode etter hos samarbeidspartnere?"}
          content={data.egsCoop}
        />
        <KodehodeInternship content1={data.origin} content2={data.internship} />
        <Competence
          content1={data.relevantCompetence[1]}
          content2={data.competenceIconsBuissness}
        />
        <AdaptTech content1={data.adaptTech} content2={techIcons} />
        <CompanyCarousel content={data.companyLogos} />
        <ContactComp
          key={data.kontaktseksjon[0]._id}
          imageOne={data.kontaktseksjon[0].ImageOne}
          title={data.kontaktseksjon[0].title}
          content={data.kontaktseksjon[0].content}
          alt={data.kontaktseksjon[0].altOne || ""}
        />
        <Results content={data.results[0]} />
        <LinkToFaq />
      </div>
    </main>
  );
}
