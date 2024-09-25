import Image from "next/image";
import { LocationCheck } from "../../../components/ContactUsSection";
import { getData } from "../page";
// Kommentar for å lure systemet.

export const metadata = {
  title: "Kontakt oss | Kodehode",
};

export default async function Contact() {
  const data = await getData();

  return (
    <div className="flex flex-col items-center min-h-screen">
      <div className="group relative h-80 md:h-96 w-screen">
        <Image
          src={data.heroSub[1].image}
          height={500}
          width={500}
          alt="Scenic landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm p-6 text-center text-white">
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-7xl text-kv-white underline underline-offset-8 decoration-jobloop-primary-green group-hover:decoration-jobloop-primary-orange ">
              Kontakt oss
            </h2>
          </div>
        </div>
      </div>
      <main className="flex flex-col items-center min-h-screen pb-20 md:pb-40">
        {/* <h1 className="text-center underline decoration-4 pb-8 underline-offset-8 decoration-jobloop-primary-green">
          Kontakt oss
        </h1> */}

        <LocationCheck content={data.personDatabase}></LocationCheck>
      </main>
    </div>
  );
}
