"use client";

import Link from "next/link";
import Image from "next/image";

export default function InternshipCard({ content }) {
  return (
    <div className="flex flex-col px-5 py-3 shadow-md md:py-5 bg-kv-white">
      <h3>{content.title}</h3>
      <p className="pb-3 border-b-4 md:pt-5 border-kv-black">{content.subheader}</p>
      <h4 className="pt-3 md:py-5">Forutsetninger</h4>
      <p>{content.expectations}</p>
      <h4 className="pt-3 md:pb-5">Tidsplan</h4>
      <p>{content.schedule}</p>
      <h4 className="pt-3 md:py-5">Veiledning</h4>
      <p>{content.guidance}</p>
      <h4 className="pt-3 md:py-5">Tilbud om fast stilling?</h4>
      <p>{content.jobOffer}</p>
      <h4 className="pt-3 md:py-5">Hjelp til å bli godkjent lærlingbedrift</h4>
      <p>{content.help}</p>
    </div>
  );
}
