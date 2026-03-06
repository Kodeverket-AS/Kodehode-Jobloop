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

export function NavbarWhite({ pathname, scrolled }) {
  const linkClass = scrolled ? "text-kv-black" : "text-kv-white";
  return (
    <nav className="max-w-screen-2xl mx-auto mt-4">
      <div className="flex items-center justify-between">
        <div className="pl-4">
          <Link
            href="/"
            aria-label="Gå til landingssiden"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-jobloop-primary-green focus-visible:ring-offset-2 rounded"
          >
            <Image
              className="w-52 lg:w-60 cursor-pointer"
              src={scrolled ? logoDesktopFarge : logoDesktopHvit}
              width={350}
              height={220}
              alt="Kodehode Logo"
            />
          </Link>
        </div>
        <div>
          <menu className="hidden h-auto p-4 md:flex md:items-center md:gap-1">
            {PagesArray.map((page) => {
              const isActive = pathname === page.href;
              return page.href === "/kontakt" ? (
                <Link
                  key={page.name}
                  href={page.href}
                  aria-label={page.label}
                  className="py-2 px-6 rounded-full border-2 border-jobloop-primary-green font-semibold text-kv-white bg-jobloop-primary-green/20 hover:bg-jobloop-primary-green hover:border-jobloop-primary-orange transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-jobloop-primary-green focus-visible:ring-offset-2"
                >
                  {page.name}
                </Link>
              ) : (
                <Link
                  key={page.name}
                  href={page.href}
                  aria-label={page.label}
                  className={`px-4 text-lg ${linkClass} transition-all duration-300 rounded py-2 ${
                    isActive ? "underline underline-offset-4 decoration-jobloop-primary-green decoration-2" : "md:hover:underline underline-offset-4"
                  }`}
                >
                  {page.name}
                </Link>
              );
            })}
          </menu>
          <div className="px-4">
            <HamburgerMenu hamFill="white" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export function NavbarColor({ textWhite, pathname }) {
  return (
    <nav className="max-w-screen-2xl mx-auto mt-4">
      <div className="flex items-center justify-between 3xl:justify-around">
        <div className="flex flex-row items-end p-4">
          <Link
            href="/"
            aria-label="Gå til landingssiden"
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-jobloop-primary-green focus-visible:ring-offset-2 rounded"
          >
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
          <menu className="hidden h-auto p-4 md:flex md:items-center md:gap-1">
            {PagesArray.map((page) => {
              const isActive = pathname === page.href;
              return page.href === "/kontakt" ? (
                <Link
                  key={page.name}
                  href={page.href}
                  aria-label={page.label}
                  className={`py-2 px-6 rounded-full border-2 border-jobloop-primary-green bg-jobloop-primary-green/10 font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:bg-jobloop-primary-green hover:border-jobloop-primary-orange cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-jobloop-primary-green focus-visible:ring-offset-2 ${
                    !textWhite ? "text-neutral-950 hover:text-kv-white" : "text-kv-black hover:text-kv-white"
                  }`}
                >
                  {page.name}
                </Link>
              ) : (
                <Link
                  key={page.name}
                  href={page.href}
                  aria-label={page.label}
                  className={`px-4 md:portrait:pl-4 md:portrait:pr-2 lg:px-4 text-lg font-medium cursor-pointer transition-all duration-300 rounded py-2 ${
                    !textWhite ? "text-neutral-900" : "text-kv-white"
                  } ${isActive ? "underline underline-offset-4 decoration-jobloop-primary-green decoration-2" : "md:hover:underline underline-offset-4"}`}
                >
                  {page.name}
                </Link>
              );
            })}
          </menu>
          <div className="px-4">
            <HamburgerMenu hamFill="colour" />
          </div>
        </div>
      </div>
    </nav>
  );
}
