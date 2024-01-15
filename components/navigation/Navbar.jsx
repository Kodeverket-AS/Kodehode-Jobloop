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
              className="px-4">
              <b className="text-white">Vår Visjon</b>
            </Link>
            <Link
              href="/FAQ"
              aria-label="gå til denne undersiden for å få svar på ofte stilte spørsmål"
              className="px-4">
              <b className="text-white">FAQ</b>
            </Link>
            <Link
              href="/about"
              aria-label="gå til denne undersiden for å lese mer om oss"
              className="px-4">
              <b className="text-white">Om Oss</b>
            </Link>
            <Link
              href="/techstack"
              aria-label="gå til denne undersiden for å lese mer om kodespråkene våre"
              className="px-4">
              <b className="text-white">Kodespråk</b>
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
          <b className="text-jobloop-orange text-2xl">
            <em>{subpage}</em>
          </b>
        </div>
        <div>
          <div className="hidden h-auto p-4 md:block">
            <Link
              href="/visjon"
              aria-label="gå til denne undersiden for å lese om vår visjon"
              className="px-4">
              <b className="text-jobloop-green">Vår Visjon</b>
            </Link>
            <Link
              href="/FAQ"
              aria-label="gå til denne undersiden for å få svar på ofte stilte spørsmål"
              className="px-4">
              <b className="text-jobloop-green">FAQ</b>
            </Link>
            <Link
              href="/about"
              aria-label="gå til denne undersiden for å lese mer om oss"
              className="px-4">
              <b className="text-jobloop-green">Om Oss</b>
            </Link>
            <Link
              href="/techstack"
              aria-label="gå til denne undersiden for å lese mer om kodespråkene våre"
              className="px-4">
              <b className="text-jobloop-green">Kodespråk</b>
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
