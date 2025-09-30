"use client";

import Image from "next/image";
import Link from "next/link";

export default function Offices({ content }) {
  return (
    <section className="w-screen py-16 bg-gradient-to-br from-jobloop-primary-orange/5 to-jobloop-primary-green/5">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-kv-black mb-4">
            Våre lokaler
          </h2>
          <p className="text-kv-black/70 text-lg max-w-2xl mx-auto">
            Besøk oss i våre moderne lokaler i Bergen og Oslo
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {content.map((offices, index) => (
            <Link
              href="/kontakt"
              key={offices.id + index}
              className="group bg-kv-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="relative h-32 md:h-48 overflow-hidden">
                <Image
                  src={offices.image}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  alt={offices.alt || ""}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kv-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-4 md:p-6">
                <h3 className="text-xl font-bold text-kv-black mb-3 group-hover:text-jobloop-primary-orange transition-colors duration-300">
                  {offices.title}
                </h3>
                <div className="space-y-1 text-kv-black/70">
                  <p className="text-sm">{offices.adresse}</p>
                  <p className="text-sm font-medium">{offices.postnr}</p>
                </div>
                
                <div className="mt-4 flex items-center text-jobloop-primary-orange font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                  <span>Besøk oss</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
