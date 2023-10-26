import { Client } from '../../lib/sanity';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen p-24">
      <p className='font-extrabold '>Denne siden er under oppbygging!</p>
      <p>Dette blir Kodehodes nye nettside på kodehode.no</p>
    </main>
  )
}

export async function getData() {
  return Client.fetch(`{
    "heroSub": *[_type == "heroSub"]{title, "image":image.asset->url, content, _id},
  }`)
}