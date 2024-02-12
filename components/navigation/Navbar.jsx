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
          <Link href="/" aria-label="Gå til landingssiden">
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
              className="px-4 font-bold text-white md:hover:underline"
            >
              Vår Visjon
            </Link>
            <Link
              href="/FAQ"
              aria-label="gå til denne undersiden for å få svar på ofte stilte spørsmål"
              className="px-4 font-bold text-white md:hover:underline"
            >
              FAQ
            </Link>
            <Link
              href="/about"
              aria-label="gå til denne undersiden for å lese mer om oss"
              className="px-4 font-bold text-white md:hover:underline"
            >
              Om Oss
            </Link>
            <Link
              href="/techstack"
              aria-label="gå til denne undersiden for å lese mer om kodespråkene våre"
              className="px-4 font-bold text-white md:hover:underline"
            >
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
        <div className="flex flex-row items-end p-4">
          <Link href="/" aria-label="Gå til landingssiden">
            <Image
              className="w-60 md:w-80"
              src={logoDesktopFarge}
              width={350}
              height={220}
              alt="Logo"
            />
          </Link>
          <b className="mb-1 text-2xl text-jobloop-primary-orange">
            <em>{subpage}</em>
          </b>
        </div>
        <div>
          <div className="hidden h-auto p-4 md:block">
            <Link
              href="/visjon"
              aria-label="gå til denne undersiden for å lese om vår visjon"
              className="px-4 font-bold text-jobloop-primary-green md:hover:underline"
            >
              Vår Visjon
            </Link>
            <Link
              href="/FAQ"
              aria-label="gå til denne undersiden for å få svar på ofte stilte spørsmål"
              className="px-4 font-bold text-jobloop-primary-green md:hover:underline"
            >
              FAQ
            </Link>
            <Link
              href="/about"
              aria-label="gå til denne undersiden for å lese mer om oss"
              className="px-4 font-bold text-jobloop-primary-green md:hover:underline"
            >
              Om Oss
            </Link>
            <Link
              href="/techstack"
              aria-label="gå til denne undersiden for å lese mer om kodespråkene våre"
              className="px-4 font-bold text-jobloop-primary-green md:hover:underline"
            >
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
