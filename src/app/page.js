import { Client } from '../../lib/sanity';
import Image from 'next/image';
import "./globals.css";
import LandingHero from '../../components/LandingHero';

export default function Home() {
  return (
      <div>
      <LandingHero></LandingHero>
      </div>
  )
}

export async function getData() {
  return Client.fetch(`
  {
    "heroSub": *[_type == "heroSub"]{title, "image":image.asset->url, content, _id},
    "egsCoop": *[_type == "egsCoop"]{header, content, _id},
    "origin": *[_type == "origin"]{title, mobileTitle, content1, content2, content3, _id},
    "courseTypes": *[_type == "courseTypes"]{title, subheader, duration, expectations, schedule, educationStyle, jobMarket, place, _id},
    "VisionSections": *[_type =="VisionSections"]{"ImageOne":ImageOne.asset->url, "ImageTwo":ImageTwo.asset->url, title, content,_id},
    "CourseSections": *[_type == "CourseSections"]{title, "image":image.asset->url, content, _id},
    "mainTech": *[_type == "mainTech"]{title, "logo":logo.asset->url, content, _id},
    "relevantCompetence": *[_type == "relevantCompetence"]{title, content, _id},
    "competenceIcons": *[_type == "competenceIcons"]{title, "logo":logo.asset->url, content, _id},
    "OurLocals": *[_type == "OurLocals"]{title, "image":image.asset->url, adresse, postnr, _id},
    "ImageGallery": *[_type == "imageGallery"]{"image1":image1.asset->url, "image2":image2.asset->url, "image3":image3.asset->url, _id},
    "endorsement": *[_type == "endorsement"]{"image":image.asset->url, navn, firma, content, _id},
    "kontaktseksjon": *[_type == "kontaktseksjon"]{"ImageOne":ImageOne.asset->url, content, title, _id},
    "samarbeid":*[_type == "samarbeid"]{title, "image":image.asset->url, content, _id},
  }`);
}
