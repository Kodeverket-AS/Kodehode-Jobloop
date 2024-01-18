import { Client } from '../../lib/sanity';
import Image from 'next/image';
import "./globals.css";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-24">
      <h1 className=' bg-jobloop-orange'>Denne siden er under oppbygging!</h1>
      <p className=' text-alt-purple bg-jobloop-green'>Dette blir Kodehodes nye nettside på kodehode.no</p>
    </main>
  )
}

export async function getData() {
  return Client.fetch(`{
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
  }`);
}