import Image from "next/image";
import HeroSub from "../../../components/HeroSub";
import EgenskapCoop from "../../../components/EgenskapCoop";
import { getData } from "../page";
import Navbar, { NavbarAlt } from "../../../components/navigation/Navbar";

export default async function Virksomhet() {
  const data = await getData();
  //console.log(data.egsCoop);
  return (
    <>
      <div className="block md:hidden">
        <Navbar />
      </div>
      <div className="hidden md:block">
        <NavbarAlt subpage="Virksomhet" />
      </div>
      <main className="flex flex-col items-center min-h-screen p-24">
        <HeroSub content={data.heroSub[1]} key={data.heroSub[1]._id} />
        <EgenskapCoop content={data.egsCoop}/>
        <p>Denne siden er under oppbygging!</p>
        <p>Dette blir Viksomhetssiden til Kodehode</p>
      </main>
    </>
  );
}
