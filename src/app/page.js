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
  }`)
}