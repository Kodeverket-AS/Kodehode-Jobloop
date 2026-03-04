//import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import Offices from "../../../components/Offices";
import Teachers from "../../../components/Teachers";
import JobloopPodium from "../../../components/JobloopPodium";
import { SectionComponent, TextBlock } from "../../../components/SectionComponents";
import Image from "next/image";
import LinkToFaq from "../../../components/LinkToFaq";

export const metadata = {
  title: "Om oss | Kodehode",
};

export default async function About() {
  const data = await getData();
  const heroSubData = data.heroSub[7];
  const selectedTeachersData = [
    data.personDatabase[0],
    data.personDatabase[1],
    data.personDatabase[6],
    data.personDatabase[7],
  ];

  return (
    <>
      <main className="flex flex-col items-center justify-between min-h-screen pt-28 space-y-16 lg:space-y-24 my-12 px-4">
          <SectionComponent
            reverseLayoutOrder={true}
            leftContent={
              <TextBlock
                title={heroSubData.title}
                content={heroSubData.content}
                isButton={true}
                path="/kontakt"
                text="Kontakt oss"
                isContained={true}
                isOrange={false}
              />
            }
            rightContent={
              <Image
                src={heroSubData.image}
                width={1080}
                height={964}
                className="mx-auto w-full my-auto rounded-xl"
                alt={heroSubData.alt || ""}
              />
            }
          />

          <section className="w-full max-w-screen-2xl mx-auto px-4">
            <article className="flex flex-col gap-6 w-full my-auto py-10 px-6 md:py-12 md:px-10 rounded-2xl bg-jobloop-primary-green/5 border-l-4 border-jobloop-primary-green shadow-sm">
              <h2 className="text-kv-black text-2xl md:text-3xl xl:text-4xl underline underline-offset-8 pb-2 decoration-jobloop-primary-green">
                Tilpasning til et AI-drevet arbeidsliv
              </h2>
              <div className="text-kv-black/70 text-base xl:text-xl xl:leading-relaxed space-y-4">
                <p>
                  Arbeidslivet endrer seg raskt som følge av kunstig intelligens og ny teknologi. JobLoop
                  videreutvikler derfor kontinuerlig det faglige innholdet i Kodehode for å sikre at kompetansen
                  vi utvikler er relevant for virksomhetenes behov – både i dag og i årene som kommer.
                </p>
                <p>
                  Gjennom smidige læreplaner, tett samarbeid med IT-bransjen og innsikt fra forskningsmiljøer
                  ved NTNU og SINTEF, identifiserer vi ferdigheter med varig verdi og tilpasser opplæringen til
                  endrede kompetansebehov. Samtidig arbeider en dedikert prosjektleder med å integrere
                  kunstig intelligens og ny teknologi i læreplaner og undervisning, i tråd med JobLoops
                  KI-strategi og tydelige styringsmål fulgt opp av styret.
                </p>
                <p>
                  Kodehode utvikles derfor løpende mot kompetanse innen AI-assistert arbeid,
                  systemforståelse, sikker drift, dataforståelse og digital implementering. Tett dialog med
                  arbeidslivet sikrer at opplæringen dreies mot roller med varig etterspørsel og bort fra sårbar
                  spesialisering.
                </p>
                <p>
                  Slik sikrer JobLoop at deltakerne utvikler kompetanse virksomheter faktisk trenger – og at
                  Kodehode til enhver tid møter kompetansebehovene i et stadig mer digitalt og AI-drevet
                  arbeidsliv.
                </p>
              </div>
            </article>
          </section>

          <JobloopPodium content={data.about}           />
      </main>
    </>
  );
}
