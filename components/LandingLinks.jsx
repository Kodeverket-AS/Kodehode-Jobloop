"use client";
import Image from "next/image";
import dokument from "../public/dokument.svg";
import koffert from "../public/koffert.svg";
import hatt from "../public/hatt.svg";

const LinkCard = ({ href, src, alt, title, description }) => {
  return (
    <a
      href={href}
      className="flex flex-row md:flex-col md:align-start lg:flex-row p-6 shadow-md rounded-lg gap-8">
      <Image
        src={src}
        width={500}
        height={500}
        className="h-20 w-16"
        alt={alt}
      />

      <div>
        <div className="w-full ">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-lg">{description}</p>
          <div className="hover:underline text-blue-500">Les mer</div>
        </div>
      </div>
    </a>
  );
};

export default function LandingLinks() {
  return (
    <div className="flex flex-col justify-center gap-8 w-full px-8 pb-12 pt-8">
      <h2 className="text-center underline underline-offset-8 decoration-jobloop-primary-green">
        Hvordan kan vi hjelpe deg?
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        <LinkCard
          href="/arbeidsgiver"
          src={koffert}
          alt=""
          title="Arbeidsgiver"
          description="For bedrifter som er interessert i utviklere"
        />
        <LinkCard
          href="/deltaker"
          src={hatt}
          alt=""
          title="Deltaker"
          description="For deg som vil delta på Kodehode"
        />
        <LinkCard
          href="/samarbeidspartner"
          src={dokument}
          alt=""
          title="Samarbeidspartner"
          description="For virksomheter som ønsker å samarbeide"
        />
      </div>
    </div>
  );
}
