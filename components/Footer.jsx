"use client";

import Link from "next/link";
import Image from "next/image";
import jobloopHvit from "../public/jobloopHvit.png";
import kodeverketHvit from "../public/kodeverketHvit.png";

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
    <footer className=" flex flex-row justify-between items-start flex-wrap gap-8 py-8 px-12 text-white bg-alt-purple md:px-12">
      <div className="flex flex-col gap-8">
        <h2 className="font-head">Kontakt</h2>
        {contactInformation.map((person) => (
          <div
            className="flex flex-col"
            key={person.name}>
            <b>{person.name}</b>
            <a
              className="underline cursor-pointer"
              target="_blank"
              href={`mailto:${person.email}`}>
              {person.email}
            </a>
            <a href={`tel:${person.phoneLink}`}>{person.phoneDisplay}</a>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-head mx-auto">Linker</h2>
        <div className="mx-auto">
          <Image
            alt="Jobloop logo"
            src={jobloopHvit}
            width={350}
            height={250}
            className="w-[150px]"
          />
        </div>
        <div className="mx-auto">
          <Image
            alt="Kodeverket logo"
            src={kodeverketHvit}
            width={350}
            height={250}
            className="w-[150px]"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        <h2 className="font-head">Sider</h2>
        <Link
          href="/bedrift"
          aria-label="Gå til underside for bedrift">
          Bedrift
        </Link>
        <Link
          href="/deltaker"
          aria-label="Gå til underside for deltaker">
          Deltaker
        </Link>
        <Link
          href="/virksomhet"
          aria-label="Gå til underside for virksomhet">
          Virksomhet
        </Link>
      </div>
    </footer>
  );
}
