import Image from "next/image";
import { NavbarAlt } from "../../../components/navigation/Navbar";
import { FaqDeltager } from "../../../components/FAQcomp";
import { FaqBedrift } from "../../../components/FAQcomp";
import { FaqVirk } from "../../../components/FAQcomp";
import { getData } from "../page";
import { ToggleButton } from "../../../components/Buttons";
import HeroSub from "../../../components/HeroSub";
import LinkToKontakt from "../../../components/LinkToKontakt";
import LandingLinks from "../../../components/LandingLinks";

export const metadata = {
  title: "FAQ: Ofte stitle spørsmål | Kodehode",
};

export default async function FAQ() {
  const faqData = await getData("FAQ");

  const HeroData = await getData("heroSub");

  return (
    <>
      <main className="flex flex-col items-center justify-start w-full min-h-screen gap-12 px-4 pt-32 ">
        {/* <HeroSub content={HeroData.heroSub[3]}></HeroSub> */}
        <h1 className="text-3xl font-bold text-center underline underline-offset-8 decoration-jobloop-primary-orange">
          Spørsmål og svar
        </h1>
        <div className="flex flex-row justify-center w-screen gap-7 md:gap-10  mb-4 md:mb-0">
          <ToggleButton
            titleDel={faqData.FAQ[0].title}
            titleBed={faqData.FAQ[1].title}
            titleVirk={faqData.FAQ[2].title}
            contentQuestOne={faqData.FAQ[0].question}
            contentSvarOne={faqData.FAQ[0].svar}
            idOne={faqData.FAQ[0]._id}
            contentQuestTwo={faqData.FAQ[1].question}
            contentSvarTwo={faqData.FAQ[1].svar}
            idTwo={faqData.FAQ[1]._id}
            contentQuestThree={faqData.FAQ[2].question}
            contentSvarThree={faqData.FAQ[2].svar}
            idThree={faqData.FAQ[2]._id}
          />
        </div>
        <LandingLinks />
        <LinkToKontakt />
      </main>
    </>
  );
}
