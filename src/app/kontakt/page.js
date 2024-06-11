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
      <main className="flex flex-col pt-10 mb-20 items-center min-h-screen ">
        <div className="mb-16 ml-4 md:p-32 md:mb-0 ">
          <div className="border-b-8 pb-2 border-jobloop-primary-green">
            <h1 className="text-4xl text-black md:text-5xl">Kontakt oss</h1>
          </div>
        </div>

        <LocationCheck content={data.personDatabase}></LocationCheck>
      </main>
    </div>
  );
}
