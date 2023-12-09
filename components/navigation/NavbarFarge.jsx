"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import HamburgerMenu from "./Hamburger";
import LogoFarge from "../../public/LogoFarge.png"

export default function NavbarFarge() {
  return (
    <nav className="w-full">
      <div className="flex items-center justify-between">
        <div className="p-4">
          <Link href="/" aria-label="Gå til landingssiden">
            <Image
              className=" w-80"
              src={LogoFarge}
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
        <div>
          <div className="hidden h-auto p-4 md:block">
            <Link
              href="/visjon"
              aria-label="gå til denne undersiden for å lese om vår visjon"
              className="px-4"
            >
              <b className="text-white">Vår Visjon</b>
            </Link>
            <Link
              href="/FAQ"
              aria-label="gå til denne undersiden for å få svar på ofte stilte spørsmål"
              className="px-4"
            >
              <b className="text-['jobloop-green']">FAQ</b>
            </Link>
            <Link
              href="/about"
              aria-label="gå til denne undersiden for å lese mer om oss"
              className="px-4"
            >
              <b className="text-white">Om Oss</b>
            </Link>
            <Link
              href="/techstack"
              aria-label="gå til denne undersiden for å lese mer om kodespråkene våre"
              className="px-4"
            >
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
