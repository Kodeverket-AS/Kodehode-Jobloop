import { Client } from "../../lib/sanity";
import Image from "next/image";
import "./globals.css";
import LandingHero from "../../components/LandingHero";
import LandingLinks from "../../components/LandingLinks";
import LandingVisjon from "../../components/LandingVisjon";
import { LinkButton } from "../../components/Buttons";

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex flex-col items-center min-h-screen p-0">
      <LandingHero content={data.heroSub[1]} />
      <div className="flex flex-col items-center mt-[370px] md:mt-20">
        <LandingLinks />
        <LandingVisjon content={data.visionLanding[0]}/>
      </div>
    </main>
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
    "visionLanding":*[_type == "visionLanding"]{title, content, "image":image.asset->url, _id},
  }`,
  //{ cache: "no-cache" }
  );
}
