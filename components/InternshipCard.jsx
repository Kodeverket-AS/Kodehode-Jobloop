"use client";

import Link from "next/link";
import Image from "next/image";

export default function InternshipCard({ content }) {
  return (
    <div className="flex flex-col px-5 py-3 bg-white shadow-md">
      <h3 className="font-bold ">{content.title}</h3>
      <p className="pb-3 border-b-4 border-black">{content.subheader}</p>
      <h3 className="font-bold">Forutsetninger</h3>
      <p>{content.expectations}</p>
      <h3 className="font-bold">Tidsplan</h3>
      <p>{content.schedule}</p>
      <h3 className="font-bold">Veiledning</h3>
      <p>{content.guidance}</p>
      <h3 className="font-bold">Tilbud om fast stilling?</h3>
      <p>{content.jobOffer}</p>
      <h3 className="font-bold">Hjelp til å bli godkjent lærlingbedrift</h3>
      <p>{content.help}</p>
    </div>
  );
}
