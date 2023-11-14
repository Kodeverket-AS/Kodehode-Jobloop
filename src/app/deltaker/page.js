import Image from "next/image";
import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import { NavbarAlt } from "../../../components/navigation/Navbar";

export default async function Deltaker() {
  const data = await getData();
  //console.log(data.heroSub);
  return (
    <>
      <div className="block md:hidden">
        <Navbar />
      </div>
      <div className="hidden md:block">
        <NavbarAlt subpage="Deltaker" />
      </div>
      <main className="flex flex-col items-center min-h-screen p-24">
        <HeroSub content={data.heroSub[1]} key={data.heroSub[1]._id} />
        <div className="flex flex-col items-center mt-80 md:mt-0">
          <p>Denne siden er under oppbygging!</p>
          <p>Dette blir Viksomhetssiden til Kodehode</p>
        </div>
      </main>
    </>
  );
}
