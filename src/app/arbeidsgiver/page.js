import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import KodehodeInternship from "../../../components/KodehodeInternship";
import Competence from "../../../components/Competence";
import ContactComp from "../../../components/ContactComp";
import AdaptTech from "../../../components/AdaptTech";
import CompanyCarousel from "../../../components/CompanyCarousel";
import Results from "../../../components/Results";
import FourIconsTerms from "../../../components/FourIconRow";
import { LuGoal } from "react-icons/lu";
import { MdAllInclusive } from "react-icons/md";
import { MdAutoGraph } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

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
    <main className="flex flex-col items-center min-h-screen pt-20">
      <HeroSub
        content={data.heroSub[6]}
        buttonText={"Finn kandidater"}
        key={data.heroSub[6]._id}
      />

      <FourIconsTerms
        title={"Hva ser Kodehode etter hos samarbeidspartnere?"}
        content={data.egsCoop}
        icons={[
          <LuGoal
            className="pb-2 h-12 w-12 text-jobloop-primary-orange"
            key="goal-icon"
          />,
          <MdAllInclusive
            className="pb-2 h-12 w-12 text-jobloop-primary-orange"
            key="all-inclusive-icon"
          />,
          <MdAutoGraph
            className="pb-2 h-12 w-12 text-jobloop-primary-orange"
            key="auto-graph-icon"
          />,
          <RiTeamFill
            className="pb-2 h-12 w-12 text-jobloop-primary-orange"
            key="team-fill-icon"
          />,
        ]}
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
    </main>
  );
}
