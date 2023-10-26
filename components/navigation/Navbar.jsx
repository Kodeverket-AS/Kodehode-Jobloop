"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoHvit from "../../public/logoHvit.png";

export default function Navbar() {
  return (
    <nav className="flex h-20">
      <div className="">
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
      </div>
      <div className="flex justify-end lg:justify-between">
        <ul className="justify-end hidden md:flex gap-11">
          <Link
            href="/visjon"
            aria-label="Gå til denne undersiden for å lese om vår visjon"
            className="relative text-xl transition-all group hover:text-dark-blue"
          >
            <li>Vår Visjon</li>
          </Link>
          <Link
            href="/FAQ"
            aria-label="Gå til denne undersiden for å få svar på ofte stilte spørsmål"
            className="relative text-xl transition-all group hover:text-dark-blue"
          >
            <li>FAQ</li>
          </Link>
          <Link
            href="/about"
            aria-label="Gå til denne undersiden for å lese mer om oss"
            className="relative text-xl transition-all group hover:text-dark-blue"
          >
            <li>Om Oss</li>
          </Link>
          <Link
            href="/techstack"
            aria-label="Gå til denne undersiden for å lese mer om oss"
            className="relative text-xl transition-all group hover:text-dark-blue"
          >
            <li>Kodespråk</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
