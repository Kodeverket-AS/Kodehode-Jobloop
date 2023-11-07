import Image from "next/image";
import { NavbarAlt } from "../../../components/navigation/Navbar";

export default function Vision() {
  return (
    <>
      <NavbarAlt />
      <main className="flex flex-col items-center min-h-screen p-24">
        <p className="font-bold bg-red-700">Denne siden er under oppbygging!</p>
        <p>Her kommer Vår Visjon hos Kodehode</p>
      </main>
    </>
  );
}