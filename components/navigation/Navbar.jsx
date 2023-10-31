"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoHvit from "../../public/logoHvit.png";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="flex items-center justify-between">
        <div className="p-4">
          <Link href="/" aria-label="Lenke til hovedside">
            <Image
              className=" w-80"
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
        <div className="h-auto p-4">
          <Link
            href="/visjon"
            aria-label="gå til denne undersiden for å lese om vår visjon"
            className="px-4"
          >
            Vår Visjon
          </Link>
          <Link
            href="/FAQ"
            aria-label="gå til denne undersiden for å få svar på ofte stilte spørsmål"
            className="px-4"
          >
            FAQ
          </Link>
          <Link
            href="/about"
            aria-label="gå til denne undersiden for å lese mer om oss"
            className="px-4"
          >
            Om Oss
          </Link>
          <Link
            href="/techstack"
            aria-label="gå til denne undersiden for å lese mer om kodespråkene våre"
            className="px-4"
          >
            Kodespråk
          </Link>
        </div>
      </div>
    </nav>
  );
}
