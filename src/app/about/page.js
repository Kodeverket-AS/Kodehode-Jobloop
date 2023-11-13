import Image from "next/image";
import { NavbarAlt } from "../../../components/navigation/Navbar";

export default function About() {
  return (
    <>
      <NavbarAlt subpage="" />
      <main className="flex flex-col items-center min-h-screen p-24">
        <p className="p-4 font-bold bg-jobloop-green">
          Denne siden er under oppbygging!
        </p>
        <p>Dette blir Om oss-siden til Kodehode</p>
      </main>
    </>
  );
}