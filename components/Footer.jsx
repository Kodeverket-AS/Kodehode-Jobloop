"use client";

import Link from "next/link";
import Image from "next/image";
// import logoJobloopHvit from "../public/logoJobloopHvit.svg";
// import logoKodeverketHvit from "../public/logoKodeverketHvit.svg";
import { MdOutlineOpenInNew, MdEmail, MdPhone } from "react-icons/md";

// Contact information for the footer.
const contactInformation = [
  {
    name: "Deltaker/Oppdragsgiver",
    email: "inger-johanne@jobloop.no ",
    phoneDisplay: "+47 48 35 87 03",
    phoneLink: "+4748358703",
  },
  {
    name: "Bedrifter",
    email: "daniel.g@jobloop.no",
    phoneDisplay: "+47 923 52 363",
    phoneLink: "+4792352363",
  },
  
];

export default function Footer() {
  return (
    <footer className="w-screen bg-jobloop-primary-grey/10 border-t border-jobloop-primary-green/20">
      <div className="container mx-auto md:px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-8 ">
          <div>
            <h3 className="text-xl font-bold mb-4 text-jobloop-primary-green">Kontakt</h3>
            <div className="space-y-3">
              {contactInformation.map((person) => (
                <div key={person.name}>
                  <h4 className="font-semibold text-kv-black mb-2">{person.name}</h4>
                  <a 
                    href={`mailto:${person.email}`} 
                    className="flex items-center gap-2 text-kv-black/70 hover:text-jobloop-primary-orange transition-colors duration-200 mb-1 w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-jobloop-primary-green focus-visible:ring-offset-2 rounded"
                  >
                    <MdEmail className="w-5 h-5 text-jobloop-primary-green shrink-0" aria-hidden />
                    {person.email}
                  </a>
                  <a 
                    href={`tel:${person.phoneLink}`} 
                    className="flex items-center gap-2 text-kv-black/70 hover:text-jobloop-primary-orange transition-colors duration-200 w-fit cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-jobloop-primary-green focus-visible:ring-offset-2 rounded"
                  >
                    <MdPhone className="w-5 h-5 text-jobloop-primary-green shrink-0" aria-hidden />
                    {person.phoneDisplay}
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
                    className="block text-kv-black/70 hover:text-jobloop-primary-orange transition-colors duration-200 w-fit cursor-pointer"
                  >
                    Jobloop.no
                  </a>
                  <a 
                    href="https://www.kodeverketbergen.no/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="block text-kv-black/70 hover:text-jobloop-primary-orange transition-colors duration-200 w-fit cursor-pointer"
                  >
                    Kodeverket.no
                  </a>
                  <Link 
                    href="/FAQ" 
                    className="block text-kv-black/70 hover:text-jobloop-primary-orange transition-colors duration-200 w-fit cursor-pointer"
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
                    className="block text-kv-black/70 hover:text-jobloop-primary-orange transition-colors duration-200 w-fit cursor-pointer"
                  >
                    Arbeidsgiver
                  </Link>
                  <Link 
                    href="/deltaker" 
                    className="block text-kv-black/70 hover:text-jobloop-primary-orange transition-colors duration-200 w-fit cursor-pointer"
                  >
                    Deltaker
                  </Link>
                  <Link 
                    href="/samarbeidspartner" 
                    className="block text-kv-black/70 hover:text-jobloop-primary-orange transition-colors duration-200 w-fit cursor-pointer"
                  >
                    Samarbeidspartner
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-jobloop-primary-green/20 md:text-center mx-auto">
          <p className="text-kv-black/60">
            &copy; {new Date().getFullYear()} Kodehode. Alle rettigheter forbeholdt.
          </p>
        </div>
      </div>
    </footer>
  );
}
