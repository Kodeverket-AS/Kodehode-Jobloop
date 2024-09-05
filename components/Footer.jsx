"use client";

import Link from "next/link";
import Image from "next/image";
// import logoJobloopHvit from "../public/logoJobloopHvit.svg";
// import logoKodeverketHvit from "../public/logoKodeverketHvit.svg";
import { MdOutlineOpenInNew } from "react-icons/md";

// Contact information for the footer
const contactInformation = [
  {
    name: "Deltaker",
    email: "team@jobloop.no ",
  },
  {
    name: "Bedrifter",
    email: "christer@jobloop.no",
    phoneDisplay: "+47 92 88 28 04",
    phoneLink: "+4792882804",
  },
  {
    name: "Oppdragsgiver",
    email: "inger-johanne@jobloop.no ",
    phoneDisplay: "+47 48 35 87 03",
    phoneLink: "+4748358703",
  },
];

export default function Footer() {
  return (
    <footer className="w-full pb-8 text-kv-black bg-jobloop-primary-green/10 border-t border-jobloop-primary-green">
      <div className="container flex flex-col md:flex-row mx-auto  pt-8 pb-24 gap-12">
        <address className="w-full flex flex-col items-center text-center gap-8 order-1">
          <h2 className="text-3xl">Kontakt for</h2>
          <ul className="w-full flex flex-col items-center gap-8">
            {contactInformation.map((person) => (
              <li
                className="flex flex-col pb-4 border-b-2 border-kv-white border-opacity-40"
                key={person.name}>
                <b className="text-lg">{person.name}</b>
                <a
                  href={`mailto:${person.email}`}
                  className="py-1 cursor-pointer hover:underline active:underline"
                  target="_blank"
                  aria-label={`Åpner email for å opprette epost til ${person.name}`}>
                  {person.email}
                </a>
                <a
                  href={`tel:${person.phoneLink}`}
                  className="md:hover:underline md:active:underline"
                  aria-label={`Åpner telefon for å ringe ${person.name}`}>
                  {person.phoneDisplay}
                </a>
              </li>
            ))}
          </ul>
        </address>
        <div className="w-full flex flex-col items-center gap-8 mx-auto text-center text-kv-black order-2">
          <h2 className="text-3xl">Linker </h2>

          <ul className="w-full flex flex-col items-center gap-8 ">
            <li>
              <a
                href="https://jobloop.no/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lenke til Jobloops nettside"
                className="flex items-center gap-1 group w-fit py-3 px-6 rounded-full shadow-sm shadow-jobloop-primary-green hover:shadow-lg bg-kv-black hover:bg-kv-black/90 transition-all scale-100 hover:scale-105 text-kv-white">
                <h4> Jobloop.no</h4>
                <div className="relative">
                  <MdOutlineOpenInNew />
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.kodeverketbergen.no/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lenke til Kodeverkets nettside"
                className="group flex items-center gap-1 w-fit py-3 px-6 rounded-full bg-kv-black hover:bg-kv-black/90 transition-all scale-100 hover:scale-105 text-kv-white">
                <h4 className="w-full">Kodeverket.no</h4>
                <div className="relative">
                  <MdOutlineOpenInNew />
                </div>
              </a>
            </li>
            <p className="text-sm">eller</p>
            <li>
              <Link
                href="/FAQ"
                aria-label="Gå til FAQ siden"
                className="group flex items-center gap-1 w-fit py-3 px-6 rounded-full transition-all border border-kv-black scale-100 hover:scale-105 text-kv-black">
                <h4 className="w-full">Gå til FAQ</h4>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col text-center items-center order-3 gap-8">
          <div>
            <h2 className="text-3xl">Side for</h2>
          </div>
          <ul className="w-full flex flex-col items-center gap-8">
            <li>
              <Link
                className="transition-all duration-200 underline underline-offset-2 lg:hover:underline-offset-4"
                href="/arbeidsgiver"
                aria-label="Gå til underside for arbeidsgiver">
                Arbeidsgiver
              </Link>
            </li>
            <li>
              <Link
                className="transition-all duration-200 underline underline-offset-2 lg:hover:underline-offset-4"
                href="/deltaker"
                aria-label="Gå til underside for deltaker">
                Deltaker
              </Link>
            </li>
            <li>
              <Link
                className="transition-all duration-200 underline underline-offset-2 lg:hover:underline-offset-4"
                href="/samarbeidspartner"
                aria-label="Gå til underside for samarbeidspartner">
                Samarbeidspartner
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-sm">
        &copy; {new Date().getFullYear()} Kodehode
      </p>
    </footer>
  );
}
