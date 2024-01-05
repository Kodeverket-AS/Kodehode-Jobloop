"use client";

import Link from "next/link";
import Image from "next/image";
import jobloopHvit from "../public/jobloopHvit.png";
import kodeverketHvit from "../public/kodeverketHvit.png";

export default function Footer() {
  return (
    <footer className=" flex flex-row justify-between items-start flex-wrap gap-8 py-8 px-12 text-white bg-alt-purple md:px-12">
      <div className="">
        <h2 className="font-head">Kontakt</h2>
        <div className="flex flex-col py-3">
          <b>stefan@jobloop.no</b>
          <b>+47 40 06 64 13</b>
        </div>
        <div className="flex flex-col py-3">
          <b>sina@jobloop.no</b>
          <b>+47 41 08 68 27</b>
        </div>
        <div className="flex flex-col py-3">
          <b>karl@jobloop.no</b>
          <b>+47 95 90 40 52</b>
        </div>
      </div>
      <div className="flex flex-col ">
        {/* <h2 className="font-head mx-auto">Linker</h2> */}
        <div className=" mx-auto">
          <Image
            alt="Jobloop logo"
            src={jobloopHvit}
            width={350}
            height={250}
            className="w-[150px]"
          />
        </div>
        <div className="py-3 mx-auto">
          <Image
            alt="Kodeverket logo"
            src={kodeverketHvit}
            width={350}
            height={250}
            className="w-[150px]"
          />
        </div>
      </div>
      <div className="flex flex-col ">
        <h2 className="font-head">Sider</h2>
        <Link
          href="/bedrift"
          aria-label="Gå til underside for bedrift"
          className="py-3">
          Bedrift
        </Link>
        <Link
          href="/deltaker"
          aria-label="Gå til underside for deltaker"
          className="py-3">
          Deltaker
        </Link>
        <Link
          href="/virksomhet"
          aria-label="Gå til underside for virksomhet"
          className="py-3">
          Virksomhet
        </Link>
      </div>
    </footer>
  );
}
