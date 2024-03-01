import Image from "next/image";
import { NavbarAlt } from "../../../components/navigation/Navbar";
import { FaqDeltager } from "../../../components/FAQcomp";
import { FaqBedrift } from "../../../components/FAQcomp";
import { FaqVirk } from "../../../components/FAQcomp";
import { getData } from "../page";
import { ToggleBtn } from "../../../components/Buttons";
import HeroSub from "../../../components/HeroSub";

export default async function FAQ() {
  const faqData = await getData("FAQ");

  const HeroData = await getData("heroSub");

  return (
    <>
      <main className="flex flex-col items-center justify-center w-full min-h-screen gap-20 pt-7 md:p-24">
        {/* <HeroSub content={HeroData.heroSub[3]}></HeroSub> */}
        <h1 className="text-3xl font-bold text-center">Spørsmål og svar</h1>
        <div className="flex flex-row justify-center w-screen gap-7 md:gap-10 min-h-[640px] mb-4 md:mb-0">
          <ToggleBtn
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
          ></ToggleBtn>
        </div>
      </main>
    </>
  );
}
