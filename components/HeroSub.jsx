"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSub({content}) {
  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.content}</p>
    </div>
  );
}
