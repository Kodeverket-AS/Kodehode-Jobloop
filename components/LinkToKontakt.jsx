"use client";

import Link from "next/link";
import Image from "next/image";
import { LinkButtonContained } from "./Buttons";

export default function LinkToKontakt() {
  return (
    <div className="w-full py-8 h-full">
      <div className="group bg-kv-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-jobloop-primary-green/10 hover:border-jobloop-primary-green/30 p-8 md:p-12 w-full h-full flex flex-col">
          <div className="text-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-kv-black underline underline-offset-8 decoration-jobloop-primary-green group-hover:decoration-jobloop-primary-orange transition-all duration-300">
              Ta kontakt med oss!
            </h2>
            <p className="text-kv-black/70 text-lg leading-relaxed">
              Vi gleder oss til å høre fra nettopp deg!
              <br />
              <br />
            </p>
          </div>

          <div className="flex justify-center mt-8 flex-shrink-0">
            <LinkButtonContained
              path="/kontakt"
              text="Kontakt Oss"
            />
          </div>
      </div>
    </div>
  );
}
