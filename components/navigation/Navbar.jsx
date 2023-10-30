"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoHvit from "../../public/logoHvit.png";

export default function Navbar() {
  return (
    <nav className="flex w-full bg-blue-600">
      <div className="flex justify-center bg-jobloop-orange">
        <div className="p-4">
          <Link href="/" aria-label="Lenke til hovedside">
            <Image
              className=""
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
        <div className="">
          <Link
            href="/visjon"
            aria-label="gå til denne undersiden for å lese om vår visjon"
          >
            Vår Visjon
          </Link>
          <Link
            href="/FAQ"
            aria-label="gå til denne undersiden for å få svar på ofte stilte spørsmål"
          >
            FAQ
          </Link>
          <Link
            href="/about"
            aria-label="gå til denne undersiden for å lese mer om oss"
          >
            Om Oss
          </Link>
          <Link
            href="/techstack"
            aria-label="gå til denne undersiden for å lese mer om kodespråkene våre"
          >
            Kodespråk
          </Link>
        </div>
      </div>
    </nav>
  );
}
