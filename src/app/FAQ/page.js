

import Image from "next/image";
import { NavbarAlt } from "../../../components/navigation/Navbar";
import { FaqDeltager } from "../../../components/FAQcomp";
import { FaqBedrift } from "../../../components/FAQcomp";
import { FaqVirk } from "../../../components/FAQcomp";
import { getData } from "../page";
import { ToggleBtn } from "../../../components/Buttons";
import HeroSub from "../../../components/HeroSub";





export default async function FAQ() {

  
   

  const faqData = await getData('FAQ');
  
  const HeroData = await getData('heroSub');



 

   return (
    <>
      <main className="w-full flex flex-col justify-center items-center min-h-screen md:p-24 gap-20">
        {/* <HeroSub content={HeroData.heroSub[3]}></HeroSub> */}
        <h1 className="font-bold text-3xl text-center">Spørsmål og svar</h1>
        <div className="w-full flex flex-row justify-center gap-7 md:gap-10 ">
          <ToggleBtn titleDel={faqData.FAQ[0].title} titleBed={faqData.FAQ[1].title} titleVirk={faqData.FAQ[2].title} contentQuestOne={faqData.FAQ[0].question} contentSvarOne={faqData.FAQ[0].svar} idOne={faqData.FAQ[0]._id}  contentQuestTwo={faqData.FAQ[1].question} contentSvarTwo={faqData.FAQ[1].svar} idTwo={faqData.FAQ[1]._id} contentQuestThree={faqData.FAQ[2].question} contentSvarThree={faqData.FAQ[2].svar} idThree={faqData.FAQ[2]._id}></ToggleBtn>
        </div>
 
      </main>
    </>
  );



}
 
  