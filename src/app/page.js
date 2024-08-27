import { Client } from "../../lib/sanity";
import "./globals.css";
import LandingHero from "../../components/LandingHero";
import LandingLinks from "../../components/LandingLinks";
import LandingVisjon from "../../components/LandingVisjon";
import imageUrlBuilder from "@sanity/image-url";
import LinkToFaq from "../../components/LinkToFaq";

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex flex-col items-center min-h-screen">
      <LandingHero content={data.heroSub[1]} />
      <section className=" flex flex-col px-4 pb-12 items-center">
        <LandingLinks />
        <LandingVisjon content={data.visionLanding[0]} />
      </section>
      <LinkToFaq />
    </main>
  );
}

const builder = imageUrlBuilder(Client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getData() {
  return Client.fetch(`{
    "heroSub": *[_type == "heroSub"] | order(index) {title, "image":image.asset->url, "alt":image.alt, content, index, _id},
    "egsCoop": *[_type == "egsCoop"] | order(index) {title, content, "logo":logo.asset->url, "alt":logo.alt, index, _id},
    "origin": *[_type == "origin"]{title, mobileTitle, content1, content2, content3, _id},
    "courseTypes": *[_type == "courseTypes"]{title, subheader, duration, expectations, schedule, educationStyle, jobMarket, place, _id},
    "VisionSections": *[_type =="VisionSections"]{"ImageOne":ImageOne.asset->url, "AltOne":ImageOne.alt, "ImageTwo":ImageTwo.asset->url, "AltTwo":ImageTwo.alt, title, content,_id},
    "CourseSections": *[_type == "CourseSections"]{title, "image":image.asset->url, "alt":image.alt, content, _id},
    "mainTech": *[_type == "mainTech"] | order(index) {title, "logo":logo.asset->url, "alt":logo.alt, content, index, _id},
    "relevantCompetence": *[_type == "relevantCompetence"] | order(index) {title, content, index, _id},
    "competenceIcons": *[_type == "competenceIcons"] | order(index) {title, "logo":logo.asset->url, "alt":logo.alt, content, index, _id},
    "OurLocals": *[_type == "OurLocals"] | order(index) {title, "image":image.asset->url, "alt":image.alt, adresse, postnr, index, _id},
    "ImageGallery": *[_type == "imageGallery"]{"image1":image1.asset->url, "alt1":image1.alt, "image2":image2.asset->url, "alt2":image2.alt, "image3":image3.asset->url, "alt3":image3.alt, _id},
    "endorsement": *[_type == "Endorsement"]{"image":image.asset->url, "alt":image.alt, navn, firma, content, _id},
    "kontaktseksjon": *[_type == "kontaktseksjon"]{"ImageOne":ImageOne.asset->url, "altOne":ImageOne.alt, content, title, _id},
    "samarbeid":*[_type == "samarbeid"]{title, "image":image.asset->url, "alt":image.alt, content, _id},
    "internship":*[_type == "internship"]{title, subheader, expectations, schedule, guidance, jobOffer, help, _id},
    "competenceIconsBuissness":*[_type == "competenceIconsBuissness"] | order(index) {title, "logo":logo.asset->url, "alt":logo.alt, content, index, _id},
    "adaptTech":*[_type == "adaptTech"]{title, content, _id},
    "companyLogos":*[_type == "companyLogos"]{title, "logo":logo.asset->url, "alt":logo.alt, _id},
    "results":*[_type == "results"]{title, "image":image.asset->url, "alt":image.alt, content, person, link, _id},
    "samarbeid":*[_type == "samarbeid"]{title, "image":image.asset->url, "alt":image.alt, content, _id},
    "FAQ":*[_type == "FAQ"]{title, question, svar, _id},
    "personDatabase":*[_type == "personDatabase"] | order(index) {navn, stilling, lokasjon, henvendelse, mail, tlf_nummer, "image":image.asset->url, "alt":image.alt, "crop":image.crop, "hotspot":image.hotspot, role, index, _id},
    "about":*[_type == "about"]{title, content, "image":image.asset->url, "alt":image.alt, _id},
    "visionLanding":*[_type == "visionLanding"]{title, content, "image":image.asset->url, "alt":image.alt, _id},
  }`);
  //{ cache: "no-cache" }
}
