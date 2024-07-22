"use client";

import Link from "next/link";
import Image from "next/image";

export default function InternshipCard({ content }) {
  return (
    <div className="flex flex-col rounded-md px-5 py-3 shadow-md md:py-5 bg-kv-white">
      <h3 className="tracking-tight">{content.title}</h3>
      <p className="pb-3 border-b-4 border-jobloop-primary-orange md:pt-5">
        {content.subheader}
      </p>
      <h4 className="pt-3 md:pt-5">Forutsetninger</h4>
      <p>{content.expectations}</p>
      <div className="border-b-2 pt-2"></div>
      <h4 className="pt-3 md:pt-5">Tidsplan</h4>
      <p>{content.schedule}</p>
      <div className="border-b-2 pt-2"></div>
      <h4 className="pt-3 md:pt-5">Veiledning</h4>
      <p>{content.guidance}</p>
      <div className="border-b-2 pt-2"></div>
      <h4 className="pt-3 md:pt-5">Tilbud om fast stilling?</h4>
      <p>{content.jobOffer}</p>
      <div className="border-b-2 pt-2"></div>
      <h4 className="pt-3 md:pt-5">Hjelp til å bli godkjent lærlingbedrift</h4>
      <p>{content.help}</p>
    </div>
  );
}
