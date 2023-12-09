import Image from "next/image";
import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";

export default async function FAQ() {
  const data = await getData();
  return (
    <main className="flex flex-col items-center min-h-screen p-24">
      <HeroSub content={data.heroSub[0]} key={data.heroSub[0]._id}></HeroSub>
      <p className="font-bold">Denne siden er under oppbygging!</p>
      <p>Her kommer noen spørsmål og svar hos Kodehode</p>
    </main>
  );
}