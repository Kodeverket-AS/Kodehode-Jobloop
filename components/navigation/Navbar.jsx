"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoHvit from "../../public/logoHvit.png";

export default function Navbar() {
  return (
    <nav className="flex h-20">
      <div className="flex flex-row justify-between">
        <Link href="/" aria-label="Lenke til hovedside">
          <Image
            className="md:w-[240px] max-w-[200px] hidden sm:block"
            src={logoHvit}
            width={350}
            height={220}
            alt="Logo"
          />
          {/*<Image
                className="max-w-[100px] block sm:hidden"
                src="/images/HaWii-Analyse_mobile.png"
                width={350}
                height={220}
                alt="Logo"
              />*/}
        </Link>
        <div className="">
          <Link href="/visjon" aria-label="gå til denne undersiden for å lese om vår visjon">Vår Visjon</Link>
          <Link href="/FAQ" aria-label="gå til denne undersiden for å få svar på ofte stilte spørsmål">FAQ</Link>
          <Link href="/about" aria-label="gå til denne undersiden for å lese mer om oss">Om Oss</Link>
          <Link href="/techstack" aria-label="gå til denne undersiden for å lese mer om kodespråkene våre">Kodespråk</Link>
        </div>
      </div>
    </nav>
  );
}
