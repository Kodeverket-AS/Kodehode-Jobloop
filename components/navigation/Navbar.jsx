"use client";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "./Hamburger";

//Nye logoer importert her. De er nå svg filer, så de kan skaleres uten å miste kvalitet.
import logoDesktopHvit from "../../public/logoDesktopHvit.svg";
import logoDesktopFarge from "../../public/logoDesktopFarge.svg";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="flex items-center justify-between">
        <div className="p-4">
          <Link
            href="/"
            aria-label="Gå til landingssiden">
            <Image
              className="w-60 md:w-80"
              src={logoDesktopHvit}
              width={350}
              height={220}
              alt="Logo"
            />
          </Link>
        </div>
        <div>
          <div className="hidden h-auto p-4 md:block">
            <Link
              href="/visjon"
              aria-label="gå til denne undersiden for å lese om vår visjon"
              className="text-white font-bold px-4 md:hover:underline">
              Vår Visjon
            </Link>
            <Link
              href="/FAQ"
              aria-label="gå til denne undersiden for å få svar på ofte stilte spørsmål"
              className="text-white font-bold px-4 md:hover:underline">
              FAQ
            </Link>
            <Link
              href="/about"
              aria-label="gå til denne undersiden for å lese mer om oss"
              className="text-white font-bold px-4 md:hover:underline">
              Om Oss
            </Link>
            <Link
              href="/techstack"
              aria-label="gå til denne undersiden for å lese mer om kodespråkene våre"
              className="text-white font-bold px-4 md:hover:underline">
              Kodespråk
            </Link>
          </div>
          <div className="px-4">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}

export function NavbarAlt({ subpage }) {
  return (
    <nav className="w-full">
      <div className="flex items-center justify-between">
        <div className="p-4 flex flex-row items-end">
          <Link
            href="/"
            aria-label="Gå til landingssiden">
            <Image
              className="w-60 md:w-80"
              src={logoDesktopFarge}
              width={350}
              height={220}
              alt="Logo"
            />
          </Link>
          <b className="text-2xl text-jobloop-primary-orange mb-1">
            <em>{subpage}</em>
          </b>
        </div>
        <div>
          <div className="hidden h-auto p-4 md:block">
            <Link
              href="/visjon"
              aria-label="gå til denne undersiden for å lese om vår visjon"
              className="text-jobloop-primary-green font-bold px-4 md:hover:underline">
              Vår Visjon
            </Link>
            <Link
              href="/FAQ"
              aria-label="gå til denne undersiden for å få svar på ofte stilte spørsmål"
              className="text-jobloop-primary-green font-bold px-4 md:hover:underline">
              FAQ
            </Link>
            <Link
              href="/about"
              aria-label="gå til denne undersiden for å lese mer om oss"
              className="text-jobloop-primary-green font-bold px-4 md:hover:underline">
              Om Oss
            </Link>
            <Link
              href="/techstack"
              aria-label="gå til denne undersiden for å lese mer om kodespråkene våre"
              className="text-jobloop-primary-green font-bold px-4 md:hover:underline">
              Kodespråk
            </Link>
          </div>
          <div className="px-4">
            <HamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
