"use client";

import Link from "next/link";
import Image from "next/image";
import { LinkButtonContained } from "./Buttons";

export default function LinkToKontakt() {
  return (
    <section className="w-screen py-24">
      <div className="w-full">
        <div className="group flex flex-col gap-12 max-w-lg m-auto border-2 border-jobloop-primary-green/0 hover:border-jobloop-primary-green/30 rounded-md bg-jobloop-primary-green/10 p-12">
          <div>
            <h2 className="text-center underline underline-offset-8 text-kv-black decoration-jobloop-primary-green">
              Ta kontakt med oss!
            </h2>
            <p className="text-center">
              Vi gleder oss til å høre fra nettopp deg!
            </p>
          </div>

          <div className="m-auto">
            <LinkButtonContained
              path="/Kontakt"
              text="Kontakt Oss"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
