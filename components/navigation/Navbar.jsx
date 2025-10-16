"use client";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "./Hamburger";

//Nye logoer importert her. De er nå svg filer, så de kan skaleres uten å miste kvalitet.
import logoDesktopHvit from "../../public/logoDesktopHvit.svg";
import logoDesktopFarge from "../../public/logoDesktopFarge.svg";

const PagesArray = [
  {
    name: "Vår Visjon",
    href: "/visjon",
    label: "Gå til denne undersiden for å lese om vår visjon",
  },
  {
    name: "FAQ",
    href: "/FAQ",
    label: "Gå til denne undersiden for å få svar på ofte stilte spørsmål",
  },
  {
    name: "Om Oss",
    href: "/om-oss",
    label: "Gå til denne undersiden for å lese mer om oss",
  },
  {
    name: "Kodespråk",
    href: "/kodesprak",
    label: "Gå til denne undersiden for å lese mer om kodespråkene våre",
  },
  {
    name: "Kontakt Oss",
    href: "/kontakt",
    label: "Gå til denne undersiden for å lese mer om kodespråkene våre",
  },
];

export function NavbarWhite() {
  return (
    <nav className="max-w-screen-2xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="pl-4">
          <Link
            href="/"
            aria-label="Gå til landingssiden">
            <Image
              className="w-52 lg:w-60 cursor-pointer"
              src={logoDesktopHvit}
              width={350}
              height={220}
              alt="Kodehode Logo"
            />
          </Link>
        </div>
        <div>
          <menu className="hidden h-auto p-4 md:block">
            {PagesArray.map((page) =>
              page.href === "/kontakt" ? (
                <Link
                  key={page.name}
                  href={page.href}
                  aria-label={page.label}
                  className="py-2 px-6 rounded-full border-2 border-jobloop-primary-green font-semibold text-kv-white bg-jobloop-primary-green/20 hover:bg-jobloop-primary-green hover:border-jobloop-primary-orange transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
                  {page.name}
                </Link>
              ) : (
                <Link
                  key={page.name}
                  href={page.href}
                  aria-label={page.label}
                  className="px-4  text-lg  text-kv-white md:hover:underline underline-offset-4 cursor-pointer">
                  {page.name}
                </Link>
              )
            )}
          </menu>
          <div className="px-4">
            <HamburgerMenu hamFill="white" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export function NavbarColor({ textWhite }) {
  return (
    <nav className="max-w-screen-2xl mx-auto">
      <div className="flex items-center justify-between 3xl:justify-around">
        <div className="flex flex-row items-end p-4">
          <Link
            href="/"
            aria-label="Gå til landingssiden">
            <Image
              className="w-52 lg:w-60 cursor-pointer"
              src={logoDesktopFarge}
              width={350}
              height={220}
              alt="Kodehode Logo"
            />
          </Link>
        </div>
        <div>
          <menu className="hidden h-auto p-4 md:block">
            {PagesArray.map((page) =>
              page.href === "/kontakt" ? (
                <Link
                  key={page.name}
                  href={page.href}
                  aria-label={page.label}
                  className={`py-2 px-6 rounded-full border-2 border-jobloop-primary-green bg-jobloop-primary-green/10 font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:bg-jobloop-primary-green hover:border-jobloop-primary-orange cursor-pointer ${
                    !textWhite ? "text-neutral-950 hover:text-kv-white" : "text-kv-black hover:text-kv-white"
                  }`}>
                  {page.name}
                </Link>
              ) : (
                <Link
                  key={page.name}
                  href={page.href}
                  aria-label={page.label}
                  className={`px-4 md:portrait:pl-4 md:portrait:pr-2 lg:px-4 text-lg font-medium cursor-pointer ${
                    !textWhite ? "text-neutral-900" : "text-kv-white"
                  } md:hover:underline underline-offset-4`}>
                  {page.name}
                </Link>
              )
            )}
          </menu>
          <div className="px-4">
            <HamburgerMenu hamFill="colour" />
          </div>
        </div>
      </div>
    </nav>
  );
}
