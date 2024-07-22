import HeroSub from "../../../components/clientComponents/HeroSub";
import { getData } from "../page";
import FourIconRow from "../../../components/clientComponents/FourIconRow";
import KodehodeInternship from "../../../components/clientComponents/arbeidsgiver/KodehodeInternship";
import Competence from "../../../components/clientComponents/arbeidsgiver/Competence";
import ContactComp from "../../../components/ContactComp";
import LinkToFaq from "../../../components/clientComponents/LinkToFaq";
import AdaptTech from "../../../components/clientComponents/arbeidsgiver/AdaptTech";
import CompanyCarousel from "../../../components/clientComponents/arbeidsgiver/CompanyCarousel";
import Results from "../../../components/clientComponents/Results";

export const metadata = {
  title: "Arbeidsgiver: Dyktige junior-utviklere til din bedrift? | Kodehode",
};

export default async function Bedrift() {
  const data = await getData();
  //console.log(data.heroSub);
  const techIcons = [
    data.mainTech[4],
    data.mainTech[5],
    data.mainTech[6],
    data.mainTech[7],
  ];

  return (
    <main className="justify-center flex flex-col items-center min-h-screen pt-20">
      <div className="flex flex-col items-center w-11/12 gap-12">
          <HeroSub
            content={data.heroSub[6]}
            buttonText={"Finn kandidater"}
            key={data.heroSub[6]._id}
          />

          <FourIconRow
            title={"Hva ser Kodehode etter hos samarbeidspartnere?"}
            content={data.egsCoop}
          />
          <KodehodeInternship
            content1={data.origin}
            content2={data.internship}
          />
          <Competence
            content1={data.relevantCompetence[1]}
            content2={data.competenceIconsBuissness}
          />
          <AdaptTech
            content1={data.adaptTech}
            content2={techIcons}
          />
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
