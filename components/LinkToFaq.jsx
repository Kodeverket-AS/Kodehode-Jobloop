"use client";

import Link from "next/link";
import Image from "next/image";
import { LinkButtonContained } from "./Buttons";

export default function LinkToFaq() {
  return (
    <section className="w-screen py-12">
      <div className="w-full pb-28">
        <div className="group flex flex-col gap-8 max-w-lg m-auto border-2 border-jobloop-primary-green/0 hover:border-jobloop-primary-green/30 rounded-md bg-jobloop-primary-green/10 p-12">
          <div>
            <h2 className="text-center underline underline-offset-8 text-kv-black decoration-jobloop-primary-green">
              Har du flere spørsmål?
            </h2>
            <p className="text-center">
              Vi har samlet de mest stilte spørsmålene i FAQ-seksjonen.
            </p>
          </div>

          <div className="flex justify-center">
            <LinkButtonContained
              path="/FAQ"
              text="Gå til FAQ"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
