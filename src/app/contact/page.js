import Image from "next/image";
import { NavbarAlt } from "../../../components/navigation/Navbar";

export default function Contact() {
  return (
    <>
      <NavbarAlt subpage="" />
      <main className="flex flex-col items-center min-h-screen p-24">
        <p>Denne siden er under oppbygging!</p>
        <p>Her kommer et kontaktskjema hos Kodehode</p>
      </main>
    </>
  );
}