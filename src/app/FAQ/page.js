import Image from "next/image";
import { NavbarAlt } from "../../../components/navigation/Navbar";

export default function FAQ() {
  return (
    <>
      <NavbarAlt subpage="" />
      <main className="flex flex-col items-center min-h-screen p-24">
        <p className="font-bold">Denne siden er under oppbygging!</p>
        <p>Her kommer noen spørsmål og svar hos Kodehode</p>
      </main>
    </>
  );
}