"use client";

import Link from "next/link";
import Image from "next/image";

export default function InternshipCard({ content }) {
  return (
    <div className="flex flex-col px-5 py-3 bg-white shadow-md">
      <h3>{content.title}</h3>
      <p className="pb-3 border-b-4 border-black">{content.subheader}</p>
      <h4>Forutsetninger</h4>
      <p>{content.expectations}</p>
      <h4>Tidsplan</h4>
      <p>{content.schedule}</p>
      <h4>Veiledning</h4>
      <p>{content.guidance}</p>
      <h4>Tilbud om fast stilling?</h4>
      <p>{content.jobOffer}</p>
      <h4>Hjelp til å bli godkjent lærlingbedrift</h4>
      <p>{content.help}</p>
    </div>
  );
}
