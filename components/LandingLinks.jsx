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
        className="group block p-8 bg-kv-white rounded-2xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-jobloop-primary-green group-hover:scale-105 transition-all duration-300">
            <Image
              src={src}
              width={40}
              height={40}
              className="group-hover:brightness-0 group-hover:invert transition-all duration-300"
              alt={`Grafikkikon av ${src}`}
            />
          </div>
          <h3 className="text-2xl font-bold text-kv-black mb-3">{title}</h3>
          <p className="text-kv-black/60 mb-6 text-lg leading-relaxed">{description}</p>
          <div className="inline-flex items-center gap-2 text-jobloop-primary-green font-semibold text-lg group-hover:gap-3 transition-all duration-300">
            <span>Les mer</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default function LandingLinks() {
  return (
    <section className="w-screen py-16 bg-gray-50">
      <div className="flex flex-col justify-center gap-12 max-w-screen-2xl mx-auto px-6">
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold text-kv-black">
            Hvordan kan vi hjelpe deg?
          </h2>
          <p className="text-base text-kv-black/60 max-w-2xl mx-auto">
            Uansett om du er bedrift, deltaker eller samarbeidspartner - vi har løsninger for deg
          </p>
        </div>
        <menu className="grid grid-cols-1 lg:grid-cols-3 gap-4">
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
