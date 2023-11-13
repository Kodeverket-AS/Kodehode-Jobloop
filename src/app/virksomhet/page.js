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
        <HeroSub content={data.heroSub[2]} key={data.heroSub[2]._id} />
        <div className="flex flex-col items-center mt-80 md:mt-0">
          <EgenskapCoop content={data.egsCoop} />
          <p>Denne siden er under oppbygging!</p>
          <p>Dette blir Viksomhetssiden til Kodehode</p>
        </div>
      </main>
    </>
  );
}
