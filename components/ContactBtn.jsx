import Link from "next/link";

export function ContactBtn() {
  return (
    <Link href="/kontakt">
      <button className="rounded-3xl w-52 h-12 border-solid border-kv-black border-2 bg-kv-white transition-all duration-600  hover:bg-jobloop-orange hover:border-none hover:text-kv-white">
        Kontakt oss
      </button>
    </Link>
  );
}
