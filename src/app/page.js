import { Client } from '../../lib/sanity';
import Image from 'next/image';
import "./globals.css";
import LandingHero from '../../components/LandingHero';
import { LinkButton } from '../../components/Buttons';

export default function Home() {
  return (
    <>
      <div>
        <LandingHero></LandingHero>
      </div>
      <div className="flex flex-col gap-32">
        <div className="flex justify-center w-screen ">
          <div className="flex flex-row justify-center w-5/6 gap-x-10">
            <div className="flex flex-col w-3/6 gap-20">
              <div>
                <p>
                  Vi rekrutterer kandidater som av ulike grunner har havnet
                  utenfor arbeidslivet og lærer dem opp til å bli frontend
                  utviklere. Gjennom en kombinasjon av teoretisk opplæring og
                  praksis vil kandidatene lære seg de viktigste teknologiene og
                  bli klar for en karriere innen utvikling. Vi vil gjerne høre
                  fra deg, enten du vil bli et kodehode, eller om du er en
                  bedrift som vil samarbeide med oss og hjelpe våre kandidater,
                  og om du er fra NAV eller andre tiltak og er nysgjerrig på vår
                  virksomhet
                </p>
              </div>
              <div>
                <ContactBtn></ContactBtn>
              </div>
            </div>
            <div className="h-2/6">
              <Image
                width={800}
                alt="kodemiljø"
                src={danialigdery}
                style={{ objectFit: "contain" }}
              ></Image>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-28">
          <div className="flex justify-center w-full">
            <h1 className="text-5xl font-extrabold">
              Hvordan kan vi hjelpe deg?
            </h1>
          </div>

          <div className="flex justify-center">
            <div className="flex flex-row gap-4">
              <div className="flex flex-col items-center gap-8">
                <Image src={koffert2}></Image>
                <h5 className="text-xl font-bold text-center">Arbeidsgiver</h5>
                <p className="w-3/6 text-center">
                  For bedrifter som er interessert i samarbeide
                </p>
                <div>
                  <LinkButton Path={"/arbeidsgiver"} Text={"Se mer"} />
                </div>
              </div>

              <div className="flex flex-col items-center gap-8">
                <Image src={hatt}></Image>
                <h5 className="text-xl font-bold text-center ">Deltager</h5>
                <p className="w-3/6 text-center">
                  For deg som vil delta i Kodehode kurset
                </p>
                <div>
                  <LinkButton Path={"/deltaker"} Text={"Se mer"} />
                </div>
              </div>

              <div className="flex flex-col items-center gap-8 mt-1">
                <Image src={mappe}></Image>
                <h5 className="text-xl font-bold text-center">
                  Samarbeidspartner
                </h5>
                <p className="w-3/6 text-center">
                  {" "}
                  For offentlig etat, skole, eller fylkeskommune
                </p>
                <div>
                  <LinkButton Path={"/samarbeidspartner"} Text={"Se mer"} />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center w-5/6 gap-10 mb-20">
            <div className="w-3/6">
              <Image src={visjonlanding2}></Image>
            </div>

            <div className="flex flex-col gap-4">
              <h2>Inkludering lønner seg.</h2>
              <p>
                Tekst om visjon kommer her.
              </p>
              <div>
                <LinkButton Path={"/visjon"} Text={"Se mer"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getData() {
  return Client.fetch(`
  {
    "heroSub": *[_type == "heroSub"] | order(index) {title, "image":image.asset->url, content, index, _id},
    "egsCoop": *[_type == "egsCoop"] | order(index) {title, content, "logo":logo.asset->url, index, _id},
    "origin": *[_type == "origin"]{title, mobileTitle, content1, content2, content3, _id},
    "courseTypes": *[_type == "courseTypes"]{title, subheader, duration, expectations, schedule, educationStyle, jobMarket, place, _id},
    "VisionSections": *[_type =="VisionSections"]{"ImageOne":ImageOne.asset->url, "ImageTwo":ImageTwo.asset->url, title, content,_id},
    "CourseSections": *[_type == "CourseSections"]{title, "image":image.asset->url, content, _id},
    "mainTech": *[_type == "mainTech"] | order(index) {title, "logo":logo.asset->url, content, index, _id},
    "relevantCompetence": *[_type == "relevantCompetence"] | order(index) {title, content, index, _id},
    "competenceIcons": *[_type == "competenceIcons"] | order(index) {title, "logo":logo.asset->url, content, index, _id},
    "OurLocals": *[_type == "OurLocals"] | order(index) {title, "image":image.asset->url, adresse, postnr, index, _id},
    "ImageGallery": *[_type == "imageGallery"]{"image1":image1.asset->url, "image2":image2.asset->url, "image3":image3.asset->url, _id},
    "endorsement": *[_type == "endorsement"]{"image":image.asset->url, navn, firma, content, _id},
    "kontaktseksjon": *[_type == "kontaktseksjon"]{"ImageOne":ImageOne.asset->url, content, title, _id},
    "samarbeid":*[_type == "samarbeid"]{title, "image":image.asset->url, content, _id},
    "internship":*[_type == "internship"]{title, subheader, expectations, schedule, guidance, jobOffer, help, _id},
    "competenceIconsBuissness":*[_type == "competenceIconsBuissness"] | order(index) {title, "logo":logo.asset->url, content, index, _id},
    "adaptTech":*[_type == "adaptTech"]{title, content, _id},
    "companyLogos":*[_type == "companyLogos"]{title, "logo":logo.asset->url, _id},
    "results":*[_type == "results"]{title, "image":image.asset->url, content, person, link, _id},
    "samarbeid":*[_type == "samarbeid"]{title, "image":image.asset->url, content, _id},
    "FAQ":*[_type == "FAQ"]{title, question, svar, _id},
    "personDatabase":*[_type == "personDatabase"] | order(index) {navn, stilling, lokasjon, henvendelse, mail, tlf_nummer, "image":image.asset->url, role, index, _id},
    "about":*[_type == "about"]{title, content, "image":image.asset->url, _id},
  }`);
}
