"use client";
import Image from "next/image";
import dokument from "../../public/dokument.svg";
import koffert from "../../public/koffert.svg";
import hatt from "../../public/hatt.svg";
import Miquelena from "../../public/miguelAngelMiquelena.jpg"
import Kenny from "../../public/kennyEliason.jpg"
import Kraken from "../../public/krakenimages.jpg"
import { SmallButton } from "../Buttons";

const LinkCard = ({ href, src, title, description }) => {
  return (
    <a
      href={href}
      className="w-full"
      >
      <div className="w-5/6 bg-kv-white flex flex-col gap-2 sm:flex-col w-full md:flex-col md:align-start lg:flex-col  shadow-md rounded-lg md:gap-8 hover:shadow-lg ">
          <div >
              <Image
                src={src}
                width={200}
                height={200}
                className=" h-full w-full rounded-t-lg"
                alt={`Grafikkikon av ${src}`}
              />
          </div>
      {/* Text */}
          <div>
            <div className="w-full p-5 flex flex-col gap-4  lg:pb-5">
              <div>
                <h4 className="text-lg">{title}</h4>
                <p className="text-base">{description}</p>
              </div>

              <div>
                <SmallButton  text={"Les mer"}/>
              </div>
              {/* <div className="font-normal group-hover:font-bold group-hover:underline text-blue-500">
                <p>Les mer</p>
              </div> */}
            </div>
          </div>
       </div>
    </a>
  );
};

export default function LandingLinks() {
  return (
    <section className="w-full  py-12">
      <div className=" flex flex-col justify-center items-center gap-12 max-w-screen-2xl mx-auto px-4">
        <h2 className="md:text-left lg:text-center pb-4 border-b-8 border-jobloop-primary-green w-fit">
          Hvordan kan vi hjelpe deg?
        </h2>
        <div className="flex w-full flex-col justify-center lg:flex-row gap-8">
          <LinkCard
            href="/arbeidsgiver"
            src={Kraken}
            title="Arbeidsgiver"
            description="For bedrifter som er interessert i utviklere"
          />
          <LinkCard
            href="/deltaker"
            src={Miquelena}
            title="Deltaker"
            description="For deg som vil delta på Kodehode"
          />
          <LinkCard
            href="/samarbeidspartner"
            src={Kenny}
            title="Samarbeidspartner"
            description="For virksomheter som ønsker å samarbeide"
          />
        </div>
      </div>
    </section>
  );
}
