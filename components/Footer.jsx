"use client";

import Link from "next/link";
import Image from "next/image";
// import logoJobloopHvit from "../public/logoJobloopHvit.svg";
// import logoKodeverketHvit from "../public/logoKodeverketHvit.svg";
import { MdOutlineOpenInNew } from "react-icons/md";

// Contact information for the footer
const contactInformation = [
  {
    name: "Deltaker",
    email: "inger-johanne@jobloop.no ",
    phoneDisplay: "+47 48 35 87 03",
    phoneLink: "+4748358703",
  },
  {
    name: "Bedrifter",
    email: "christer@jobloop.no",
    phoneDisplay: "+47 92 88 28 04",
    phoneLink: "+4792882804",
  },
  {
    name: "Oppdragsgiver",
    email: "inger-johanne@jobloop.no ",
    phoneDisplay: "+47 48 35 87 03",
    phoneLink: "+4748358703",
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-jobloop-primary-green/5 to-jobloop-primary-orange/5 border-t border-jobloop-primary-green/20">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-jobloop-primary-green">Kontakt</h3>
            <div className="space-y-3">
              {contactInformation.map((person) => (
                <div key={person.name}>
                  <h4 className="font-semibold text-kv-black mb-2">{person.name}</h4>
                  <a 
                    href={`mailto:${person.email}`} 
                    className="block text-kv-black/70 hover:text-jobloop-primary-green transition-colors duration-200 mb-1"
                  >
                    {person.email}
                  </a>
                  <a 
                    href={`tel:${person.phoneLink}`} 
                    className="block text-kv-black/70 hover:text-jobloop-primary-green transition-colors duration-200"
                  >
                    {person.phoneDisplay}
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-jobloop-primary-green">Linker</h3>
            <div className="space-y-2">
              <a 
                href="https://jobloop.no/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-kv-black/70 hover:text-jobloop-primary-green transition-colors duration-200"
              >
                Jobloop.no
              </a>
              <a 
                href="https://www.kodeverketbergen.no/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-kv-black/70 hover:text-jobloop-primary-green transition-colors duration-200"
              >
                Kodeverket.no
              </a>
              <Link 
                href="/FAQ" 
                className="block text-kv-black/70 hover:text-jobloop-primary-green transition-colors duration-200"
              >
                FAQ
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-jobloop-primary-green">Sider</h3>
            <div className="space-y-2">
              <Link 
                href="/arbeidsgiver" 
                className="block text-kv-black/70 hover:text-jobloop-primary-green transition-colors duration-200"
              >
                Arbeidsgiver
              </Link>
              <Link 
                href="/deltaker" 
                className="block text-kv-black/70 hover:text-jobloop-primary-green transition-colors duration-200"
              >
                Deltaker
              </Link>
              <Link 
                href="/samarbeidspartner" 
                className="block text-kv-black/70 hover:text-jobloop-primary-green transition-colors duration-200"
              >
                Samarbeidspartner
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-jobloop-primary-green/20 text-center">
          <p className="text-kv-black/60">
            &copy; {new Date().getFullYear()} Kodehode. Alle rettigheter forbeholdt.
          </p>
        </div>
      </div>
    </footer>
  );
}
