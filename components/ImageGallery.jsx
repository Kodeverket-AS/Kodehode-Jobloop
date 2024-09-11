"use client";

import Link from "next/link";
import Image from "next/image";

export default function ImageGallery({ content }) {
  return (
    <section className=" w-screen py-12">
      <div className="flex px-4 gap-2 md:gap-4 max-w-screen-2xl mx-auto">
        <div className="flex flex-col gap-2 md:gap-4 justify-between w-1/2 md:w-2/3 ">
          <figure className="relative rounded-xl overflow-hidden h-1/2">
            <Image
              src={content[0].image1}
              width={500}
              height={500}
              className="object-cover w-full h-full transition-all saturate-0 brightness-100 hover:brightness-105"
              alt={content[0].alt1 || ""}
            />
            <figcaption className="group hidden xl:flex absolute bg-kv-black/80 hover:bg-kv-black/90 text-kv-white bottom-0 left-0 flex-col items-start justify-end p-4">
              <h2>
                Undervisningen kombinerer praktisk undervisning med digitale
                læringsverktøy og prosjektarbeid.
              </h2>
              <Link
                href="/visjon"
                className="underline underline-offset-2 hover:underline-offset-4 group-hover:animate-pulse hover:group-hover:animate-none">
                Les om vår visjon!
              </Link>
            </figcaption>
          </figure>
          <figure className="relative rounded-xl overflow-hidden h-1/2">
            <Image
              src={content[0].image2}
              width={500}
              height={500}
              className="object-cover w-full h-full transition-all saturate-0 brightness-100 hover:brightness-105"
              alt={content[0].alt2 || ""}
            />
            <figcaption className="group hidden xl:flex absolute bg-kv-black/80 hover:bg-kv-black/90 text-kv-white bottom-0 left-0 flex-col items-start justify-end p-4">
              <h2>
                Deltakere får introduksjon til frontend og UX/UI, i tillegg til
                backend for de som ønsker det.
              </h2>
              <Link
                href="/arbeidsgiver"
                className="underline underline-offset-2 hover:underline-offset-4 group-hover:animate-pulse hover:group-hover:animate-none">
                Les mer her!
              </Link>
            </figcaption>
          </figure>
        </div>
        <figure className="relative rounded-xl overflow-hidden h-full w-1/2 md:w-1/3">
          <Image
            src={content[0].image3}
            width={500}
            height={500}
            className="object-cover w-full h-full transition-all saturate-0 brightness-100 hover:brightness-110"
            alt={content[0].alt3 || ""}
          />
          <figcaption className="group hidden xl:flex absolute bg-kv-black/80 hover:bg-kv-black/90 text-kv-white bottom-0 left-0 flex-col items-start justify-end p-4">
            <h2>
              Jobbmarkedet i dag skriker etter kompetanse på alle områder!
            </h2>
            <Link
              href="/kontakt"
              className="underline underline-offset-2 hover:underline-offset-4 group-hover:animate-pulse hover:group-hover:animate-none">
              Kontakt Oss!
            </Link>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
