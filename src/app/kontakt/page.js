import Image from "next/image";
import { NavbarAlt } from "../../../components/navigation/Navbar";
import { LocationCheck } from "../../../components/ContactUsSection";
import { getData } from "../page";

export const metadata = {
  title: "Kontakt oss | Kodehode",
};

export default async function Contact() {
  const data = await getData();

  return (
    <div>
      <main className="flex flex-col items-center min-h-screen py-20 md:py-40">
        <h1 className="text-center underline decoration-4 pb-8 underline-offset-8 decoration-jobloop-primary-green">
          Kontakt oss
        </h1>

        <LocationCheck content={data.personDatabase}></LocationCheck>
      </main>
    </div>
  );
}
