"use client";

import Link from "next/link";
import Image from "next/image";
import { LinkButtonContained } from "./Buttons";

export default function LinkToFaq() {
  return (
    <section className="w-screen py-12">
      <div className="w-full pb-28">
        <div className="flex flex-col gap-12 max-w-lg m-auto rounded-md bg-jobloop-primary-green/10 p-12">
          <div>
            <h2 className="text-center underline underline-offset-8 decoration-jobloop-primary-green">
              Har du flere spørsmål?
            </h2>
            <p className="text-center">
              Vi har samlet de mest stilte spørsmålene i FAQ-seksjonen.
            </p>
          </div>

          <div className="m-auto">
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
