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
    <footer className="py-8 text-kv-white bg-neutral-600">
      <div className="flex flex-col px-4 py-8 md:flex-row justify-around gap-8 md:mx-auto">
        <div className="flex flex-col justify-center gap-8">
          <h3>Kontakt</h3>
          {contactInformation.map((person) => (
            <div
              className="flex flex-col gap-2 pb-4 justify-center md:border-b-2 md:border-kv-white"
              key={person.name}>
              <b>{person.name}</b>
              <a
                href={`mailto:${person.email}`}
                className="cursor-pointer hover:underline active:underline"
                target="_blank"
                aria-label={`Åpner email for å opprette epost til ${person.name}`}>
                {person.email}
              </a>
              <p aria-label={`telefonnummer til ${person.name}`}>
                {person.phoneDisplay}
              </p>
            </div>
          ))}
        </div>
        <div className="items-left gap-8 flex flex-col md:items-center">
          <h3>Linker</h3>
          <div className="w-28">
            <a
              href="https://jobloop.no/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lenke til Jobloops nettside">
              <Image
                alt="Jobloop logo"
                src={logoJobloopHvit}
                width={350}
                height={250}
              />
            </a>
          </div>
          <div className="w-28">
            <a
              href="https://www.kodeverketbergen.no/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lenke til Kodeverkets nettside">
              <Image
                alt="Kodeverket logo"
                src={logoKodeverketHvit}
                width={350}
                height={250}
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h3>Gå til</h3>
          <Link
            className="hover:underline"
            href="/arbeidsgiver"
            aria-label="Gå til underside for arbeidsgiver">
            Arbeidsgiver
          </Link>
          <Link
            className="hover:underline"
            href="/deltaker"
            aria-label="Gå til underside for deltaker">
            Deltaker
          </Link>
          <Link
            className="hover:underline"
            href="/samarbeidspartner"
            aria-label="Gå til underside for samarbeidspartner">
            Samarbeidspartner
          </Link>
        </div>
      </div>

      <p className="text-center py-8">
        &copy; {new Date().getFullYear()} Kodehode
      </p>
    </footer>
  );
}
