import Image from "next/image";
import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import { NavbarAlt } from "../../../components/navigation/Navbar";

export default async function Bedrift() {
  const data = await getData();
  console.log(data.heroSub[2])
  return (
    <>
      <NavbarAlt />
      <main className="flex flex-col items-center min-h-screen p-24">
        <HeroSub content={data.heroSub[2]} key={data.heroSub[2]._id} />
        <p>Denne siden er under oppbygging!</p>
        <p>Dette blir bedriftssiden til Kodehode</p>
      </main>
    </>
  );
}