"use client";

import Link from "next/link";
import Image from "next/image";

export default function ImageGallery({ content }) {
  return (
    <section className="w-screen py-16 bg-gradient-to-br from-jobloop-primary-green/5 to-jobloop-primary-orange/5">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-kv-black mb-4">
            Se hvordan vi jobber
          </h2>
          <p className="text-kv-black/70 text-lg max-w-2xl mx-auto">
            Praktisk undervisning, digitale verktøy og prosjektarbeid
          </p>
        </div>
        
        <div className="flex gap-2 md:gap-4 h-[800px]">
          <div className="flex flex-col gap-2 md:gap-4 w-2/3">
            <figure className="relative rounded-2xl overflow-hidden cursor-pointer flex-1">
              <Link href="/visjon" className="block h-full">
                <Image
                  src={content[0].image1}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full transition-all saturate-0 hover:saturate-100 brightness-100 hover:brightness-105"
                  alt={content[0].alt1 || ""}
                />
              </Link>
              <figcaption className="group hidden xl:flex absolute text-kv-white bottom-0 left-0 flex-col items-start justify-end p-4 bg-black/70">
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
            <figure className="relative rounded-2xl overflow-hidden cursor-pointer flex-1">
              <Link href="/arbeidsgiver" className="block h-full">
                <Image
                  src={content[0].image2}
                  width={500}
                  height={500}
                  className="object-cover w-full h-full transition-all saturate-0 hover:saturate-100 brightness-100 hover:brightness-105"
                  alt={content[0].alt2 || ""}
                />
              </Link>
              <figcaption className="group hidden xl:flex absolute text-kv-white bottom-0 left-0 flex-col items-start justify-end p-4 bg-black/70">
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
          <figure className="relative rounded-2xl overflow-hidden cursor-pointer w-1/3">
            <Link href="/kontakt" className="block h-full">
              <Image
                src={content[0].image3}
                width={500}
                height={500}
                className="object-cover w-full h-full transition-all saturate-0 hover:saturate-100 brightness-100 hover:brightness-105 hover:sepia hover:hue-rotate-12"
                alt={content[0].alt3 || ""}
              />
            </Link>
            <figcaption className="group hidden xl:flex absolute text-kv-white bottom-0 left-0 flex-col items-start justify-end p-4 bg-black/70">
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
      </div>
    </section>
  );
}
