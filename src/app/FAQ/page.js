import Image from "next/image";
import { NavbarAlt } from "../../../components/navigation/Navbar";
// import FAQComponent, { FaqDeltager } from "../../../components/FAQcomp";
import { FaqBedrift } from "../../../components/FAQcomp";
import { FaqVirk } from "../../../components/FAQcomp";
import { getData } from "../page";
// import { ToggleButton } from "../../../components/Buttons";
import { FAQComponent } from "../../../components/FAQcomp";
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
      <main className="flex flex-col items-center justify-start w-full min-h-screen">
        <section className="w-full  pt-32 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-6">
             
                <h1 className="text-2xl underline underline-offset-8 decoration-jobloop-primary-green text-kv-black md:text-5xl font-bold leading-tight">
                Ofte stilte spørsmål
                </h1>
              <p className="text-lg md:text-xl text-kv-black/70 max-w-2xl mx-auto leading-relaxed">
                Finn svar på de mest stilte spørsmålene om våre kurs, praktikplasser og samarbeidspartnere
              </p>
            </div>
          </div>
        </section>

        <section className="w-full ">
          <div className="container mx-auto max-w-6xl">
            <FAQComponent
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
        </section>

        <section className="w-full py-16 bg-gradient-to-r from-jobloop-primary-green/5 to-jobloop-primary-orange/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-kv-black mb-4">
              Fant du ikke svaret du lette etter?
            </h2>
            <p className="text-lg text-kv-black/70 mb-8 max-w-2xl mx-auto">
              Ta gjerne kontakt med oss direkte, så hjelper vi deg videre
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md sm:max-w-none mx-auto">
              <a 
                href="/kontakt" 
                className="inline-flex items-center justify-center px-8 py-3 bg-jobloop-primary-green text-white font-medium rounded-full hover:bg-kv-white hover:border-2 hover:border-jobloop-primary-green hover:text-jobloop-primary-green transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
              >
                Kontakt oss
              </a>
              <a 
                href="mailto:kontakt@kodehode.no" 
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-jobloop-primary-green text-jobloop-primary-green font-medium rounded-full hover:bg-jobloop-primary-green hover:text-white transition-colors duration-200 w-full sm:w-auto"
              >
                Send e-post
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
