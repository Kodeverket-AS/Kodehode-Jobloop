"use client";
import Image from "next/image";
import dokument from "../public/dokument.svg";
import koffert from "../public/koffert.svg";
import hatt from "../public/hatt.svg";

const LinkCard = ({ href, src, title, description }) => {
  return (
    <a
      href={href}
      className="group bg-kv-white flex flex-col p-4 gap-2 sm:flex-row w-full md:flex-col md:align-start lg:flex-row md:p-6 shadow-md rounded-lg md:gap-8 hover:shadow-lg">
      <Image
        src={src}
        width={64}
        height={64}
        className="stroke-2 stroke-jobloop-primary-green h-20 w-16 group-hover:rotate-3 transition-transform duration-300 ease-in-out"
        alt={`Grafikkikon av ${src}`}
      />
      {/* Text */}
      <div>
        <div className="w-full ">
          <h2 className="text-xl font-bold ">{title}</h2>
          <p className="text-lg">{description}</p>
          <div className="group-hover:underline text-blue-500">Les mer</div>
        </div>
      </div>
    </a>
  );
};

export default function LandingLinks() {
  return (
    <section className="w-screen py-12">
      <div className=" flex flex-col justify-center gap-8 max-w-screen-2xl mx-auto px-4">
        <h2 className="text-center underline underline-offset-8 decoration-jobloop-primary-green">
          Hvordan kan vi hjelpe deg?
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
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
        </div>
      </div>
    </section>
  );
}
