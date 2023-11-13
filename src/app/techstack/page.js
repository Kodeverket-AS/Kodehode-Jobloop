import Image from "next/image";
import { NavbarAlt } from "../../../components/navigation/Navbar";

export default function Techstack() {
  return (
    <>
      <NavbarAlt />
      <main className="flex flex-col items-center min-h-screen p-24">
        <p className="font-bold">Denne siden er under oppbygging!</p>
        <p>Her kommer techstacken hos Kodehode</p>
      </main>
    </>
  );
}