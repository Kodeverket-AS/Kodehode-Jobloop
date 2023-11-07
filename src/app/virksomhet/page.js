import Image from "next/image";
import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import { NavbarAlt } from "../../../components/navigation/Navbar";

export default async function Virksomhet() {
  const data = await getData();
  return (
    <>
      <NavbarAlt />
      <main className="flex flex-col items-center min-h-screen p-24">
        <HeroSub content={data.heroSub[1]} key={data.heroSub[1]._id} />
        <p>Denne siden er under oppbygging!</p>
        <p>Dette blir Viksomhetssiden til Kodehode</p>
      </main>
    </>
  );
}
