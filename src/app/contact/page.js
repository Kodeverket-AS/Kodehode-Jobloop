import Image from "next/image";
import { NavbarAlt } from "../../../components/navigation/Navbar";
import { LocationCheck } from "../../../components/ContactUsSection";
import { getData } from "../page";

export default async function Contact() {
  const data = await getData();


  return (
    <div>
      <NavbarAlt/>
      <main className="flex flex-col items-center min-h-screen p-20">
      <div className="p-32">
        <h1 className="text-jobloop-primary-green text-4xl">Kontakt oss</h1>
      </div>
        
      <LocationCheck content={data.personDatabase}></LocationCheck>
      </main>
    </div>
  );
}
