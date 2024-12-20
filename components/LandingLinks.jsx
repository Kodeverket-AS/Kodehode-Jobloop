"use client";
import Image from "next/image";
import dokument from "../public/dokument.svg";
import koffert from "../public/koffert.svg";
import hatt from "../public/hatt.svg";
import Link from "next/link";

const LinkCard = ({ href, src, title, description }) => {
  return (
    <li className="w-full">
      <Link
        href={href}
        prefetch={true}
        className="group h-full bg-kv-white transition-all duration-300 flex flex-col p-4 gap-2 sm:flex-row w-full md:flex-col md:align-start xl:flex-row md:p-6 shadow-sm shadow-jobloop-primary-green rounded-lg xl:gap-8 hover:shadow-lg">
        <Image
          src={src}
          width={64}
          height={64}
          className=" h-20 w-16 group-hover:-rotate-2 transition-transform duration-300 ease-in-out"
          alt={`Grafikkikon av ${src}`}
        />
        {/* Text */}
        <div>
          <div className="w-full ">
            <h4 className="text-xl">{title}</h4>
            <p className="text-base text-kv-black/70">{description}</p>
            <div className="font-normal group-hover:font-bold group-hover:underline text-blue-600">
              <p>Les mer</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default function LandingLinks() {
  return (
    <section className="w-screen py-24  bg-jobloop-primary-green/10">
      <div className=" flex flex-col justify-center gap-12 max-w-screen-2xl mx-auto px-2">
        <h2 className="text-center text-2xl md:text-3xl underline underline-offset-8 decoration-jobloop-primary-green">
          Hvordan kan vi hjelpe deg?
        </h2>
        <menu className="flex flex-col lg:flex-row gap-4 xl:gap-8">
          <LinkCard
            href="/arbeidsgiver"
            src={koffert}
            title="Arbeidsgiver"
            description="For bedrifter som er interessert i utviklere"
          />

          <LinkCard
            href="/deltaker"
            src={hatt}
            title="Deltaker"
            description="For deg som vil delta på Kodehode"
          />

          <LinkCard
            href="/samarbeidspartner"
            src={dokument}
            title="Samarbeidspartner"
            description="For virksomheter som ønsker å samarbeide"
          />
        </menu>
      </div>
    </section>
  );
}
