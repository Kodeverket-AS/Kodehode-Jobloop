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
    <footer className="w-screen bg-jobloop-primary-grey/5 border-t border-jobloop-primary-green/20">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 ">
          <div>
            <h3 className="text-xl font-bold mb-4 text-jobloop-primary-green">Kontakt</h3>
            <div className="space-y-3">
              {contactInformation.map((person) => (
                <div key={person.name}>
                  <h4 className="font-semibold text-kv-black mb-2">{person.name}</h4>
                  <a 
                    href={`mailto:${person.email}`} 
                    className="block text-kv-black/70 hover:text-kv-black transition-all duration-200 mb-1 relative group w-fit"
                  >
                    {person.email}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-jobloop-primary-orange transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a 
                    href={`tel:${person.phoneLink}`} 
                    className="block text-kv-black/70 hover:text-kv-black transition-all duration-200 relative group w-fit"
                  >
                    {person.phoneDisplay}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-jobloop-primary-orange transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-jobloop-primary-green">Linker</h3>
                <div className="space-y-2">
                  <a 
                    href="https://jobloop.no/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-kv-black/70 hover:text-kv-black transition-all duration-200 relative group w-fit"
                  >
                    Jobloop.no
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-jobloop-primary-orange transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <a 
                    href="https://www.kodeverketbergen.no/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-kv-black/70 hover:text-kv-black transition-all duration-200 relative group w-fit"
                  >
                    Kodeverket.no
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-jobloop-primary-orange transition-all duration-300 group-hover:w-full"></span>
                  </a>
                  <Link 
                    href="/FAQ" 
                    className="block text-kv-black/70 hover:text-kv-black transition-all duration-200 relative group w-fit"
                  >
                    FAQ
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-jobloop-primary-orange transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 text-jobloop-primary-green">Sider</h3>
                <div className="space-y-2">
                  <Link 
                    href="/arbeidsgiver" 
                    className="block text-kv-black/70 hover:text-kv-black transition-all duration-200 relative group w-fit"
                  >
                    Arbeidsgiver
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-jobloop-primary-orange transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <Link 
                    href="/deltaker" 
                    className="block text-kv-black/70 hover:text-kv-black transition-all duration-200 relative group w-fit"
                  >
                    Deltaker
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-jobloop-primary-orange transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                  <Link 
                    href="/samarbeidspartner" 
                    className="block text-kv-black/70 hover:text-kv-black transition-all duration-200 relative group w-fit"
                  >
                    Samarbeidspartner
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-jobloop-primary-orange transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </div>
              </div>
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
