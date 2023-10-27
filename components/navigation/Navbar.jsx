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
    </nav>
  );
}
