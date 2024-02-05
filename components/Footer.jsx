"use client";

import Link from "next/link";
import Image from "next/image";
import logoJobloopHvit from "../public/logoJobloopHvit.svg";
import logoKodeverketHvit from "../public/logoKodeverketHvit.svg";

// Contact information for the footer
const contactInformation = [
  {
    name: "Stefan",
    email: "stefan@jobloop.no",
    phoneDisplay: "+47 40 06 64 13",
    phoneLink: "+4740066413",
  },
  {
    name: "Sina",
    email: "sina@jobloop.no",
    phoneDisplay: "+47 41 08 68 27",
    phoneLink: "+4741086827",
  },
  {
    name: "Karl",
    email: "karl@jobloop.no",
    phoneDisplay: "+47 95 90 40 52",
    phoneLink: "+4795904052",
  },
];

export default function Footer() {
  return (
    <footer className="text-white bg-jobloop-tertiary-purple pb-8">
      <div className=" flex flex-row justify-between items-start flex-wrap gap-y-20 gap-x-8 pt-8 pb-24 px-12  md:px-12">
        <div className="flex flex-col gap-8 ">
          <h2 className="text-3xl">Kontakt</h2>
          {contactInformation.map((person) => (
            <div
              className="flex flex-col border-b-2 border-white border-opacity-40 pb-4 "
              key={person.name}>
              <b className="text-lg">{person.name}</b>
              <a
                href={`mailto:${person.email}`}
                className="cursor-pointer py-1 hover:underline active:underline"
                target="_blank"
                aria-label="Åpner email for å opprette epost til valgt person">
                {person.email}
              </a>
              <a
                href={`tel:${person.phoneLink}`}
                className="md:hover:underline md:active:underline"
                aria-label="Åpner telefon for å ringe valgt person">
                {person.phoneDisplay}
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-8 ">
          <h2 className="text-3xl text-center">Linker</h2>
          <div className="w-32">
            <Image
              alt="Jobloop logo"
              src={logoJobloopHvit}
              width={350}
              height={250}
            />
          </div>
          <div className="w-32">
            <Image
              alt="Kodeverket logo"
              src={logoKodeverketHvit}
              width={350}
              height={250}
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 ">
          <h2 className="text-3xl">Sider</h2>
          <Link
            className="hover:underline"
            href="/bedrift"
            aria-label="Gå til underside for bedrift">
            Bedrift
          </Link>
          <Link
            className="hover:underline"
            href="/deltaker"
            aria-label="Gå til underside for deltaker">
            Deltaker
          </Link>
          <Link
            className="hover:underline"
            href="/virksomhet"
            aria-label="Gå til underside for virksomhet">
            Virksomhet
          </Link>
        </div>
      </div>
      <p className="text-center">&copy; {new Date().getFullYear()} Kodehode</p>
    </footer>
  );
}
