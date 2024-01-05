import Image from "next/image";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/navigation/Navbar";

export default function Techstack() {
  return (
    <main className="flex flex-col items-center min-h-screen p-24">
      <section className="max-w-2xl flex flex-col gap-8">
        <h1 className="font-head text-5xl font-bold text-jobloop-orange">
          Våre kodespråk
        </h1>
        <p>
          Våre studenter lærer de viktigste teknologiene og rammeverkene innen
          frontend, og de har mulighet til å lære grunnleggende backend. Målet
          er at de skal få en forståelse som gjør det enklere å lære seg nye
          språk når det trengs, og før de begynner i praksis vil de få mulighet
          til å få kjennskap til tech-stacken til deres bedrift slik at de kan
          komme seg i gang så fort som mulig.
        </p>
      </section>
    </main>
  );
}
