import Image from "next/image";
import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";

export default async function Virksomhet() {
  const data = await getData();
  return (
    <main className="flex flex-col items-center min-h-screen p-24">
      <HeroSub content={data.herosub[2]} />
      <p>Denne siden er under oppbygging!</p>
      <p>Dette blir Viksomhetssiden til Kodehode</p>
    </main>
  );
}
