"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoHvit from "../../public/logoHvit.png";

export default function Navbar() {
  return (
    <nav className="h-[80px] grid place-items-center 2xl:px-8 xl:px-0 lg:px-3 px-3 relative z-10">
      <div className="xl:w-[90%] lg:w-[95%] w-full">
        <div className="grid items-center justify-between h-full grid-flow-col">
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
                href="/vision"
                aria-label="Gå til denne undersiden for å lese om vår visjon"
                className="relative text-xl transition-all group hover:text-dark-blue"
                //onClick={(event) => scrollToSection(event, "services")}
                //scroll={false}
              >
                <li>Vår Visjon</li>
                {/*<div className="absolute w-full h-0 transition-all bg-hawii-darkBlue group-hover:h-2" />*/}
              </Link>
              <Link
                href="/faq"
                aria-label="Gå til denne undersiden for å få svar på ofte stilte spørsmål"
                className="relative text-xl transition-all group hover:text-dark-blue"
                //onClick={(event) => scrollToSection(event, "media")}
                //scroll={false}
              >
                <li>FAQ</li>
                {/*<div className="absolute w-full h-0 transition-all bg-hawii-darkBlue group-hover:h-2" />*/}
              </Link>
              <Link
                href="/about"
                aria-label="Gå til denne undersiden for å lese mer om oss"
                className="relative text-xl transition-all group hover:text-dark-blue"
                //onClick={(event) => scrollToSection(event, "faq")}
                //scroll={false}
              >
                <li>Om Oss</li>
                {/*<div className="absolute w-full h-0 transition-all bg-hawii-darkBlue group-hover:h-2" />*/}
              </Link>
              <Link
                href="/"
                aria-label="Gå til denne undersiden for å lese mer om oss"
                className="relative text-xl transition-all group hover:text-dark-blue"
                //onClick={(event) => scrollToSection(event, "faq")}
                //scroll={false}
              >
                <li>Kodespråk</li>
                {/*<div className="absolute w-full h-0 transition-all bg-hawii-darkBlue group-hover:h-2" />*/}
              </Link>
            </ul>
          </div>
          {/*<MainPageNavLinks
            isMainPage={isMainPage}
            scrollToSection={scrollToSection}
          />
          <HamburgerMenu
            isMainPage={isMainPage}
            scrollToSection={scrollToSection}
          />*/}
        </div>
      </div>
    </nav>
  );
}