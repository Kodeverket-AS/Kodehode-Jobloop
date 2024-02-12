"use client";

import Link from "next/link";
import Image from "next/image";
import Discord from "../public/Discord.svg";
import Figma from "../public/Figma.svg";
import Scrimba from "../public/Scrimba.svg";
import VSCode from "../public/VSCode.svg";


export default function Platforms() {
  return (
    <>
      <div className="py-10 text-center md:pt-20">
        <h1>Programmer vi bruker</h1>
      </div>
      <div className="flex pt-0 pb-10 md:py-20">
        <div className="flex flex-col items-center mr-4 w-14 md:mr-12 md:w-48">
          <Image
            src={Figma}
            width={300}
            height={300}
            className="w-auto h-24 mb-2"
          />
          <h2 className="text-center">Figma</h2>
          <p className="hidden text-center md:block">
            Designverktøy for å tegne opp websider
          </p>
        </div>
        <div className="flex flex-col items-center mx-4 w-14 md:mx-12 md:w-48">
          <Image
            src={Scrimba}
            width={300}
            height={300}
            className="w-auto h-24 mb-2"
          />
          <h2 className="text-center">Scrimba</h2>
          <p className="hidden text-center md:block">
            Online interaktiv plattform for å lære HTML, CSS og Javascript
          </p>
        </div>
        <div className="flex flex-col items-center mx-4 w-14 md:mx-12 md:w-48">
          <Image
            src={Discord}
            width={300}
            height={300}
            className="w-auto h-24 mb-2"
          />
          <h2 className="text-center">Discord</h2>
          <p className="hidden text-center md:block">
            Plattform for å kommunisere med andre deltagere og lærere
          </p>
        </div>
        <div className="flex flex-col items-center ml-4 w-14 md:ml-12 md:w-48">
          <Image
            src={VSCode}
            width={300}
            height={300}
            className="w-auto h-24 mb-2"
          />
          <h2 className="text-center">VS Code</h2>
          <p className="hidden text-center md:block">
            Verktøy hvor man skriver kode
          </p>
        </div>
      </div>
    </>
  );
}