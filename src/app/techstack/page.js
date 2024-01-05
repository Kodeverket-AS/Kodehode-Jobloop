import Image from "next/image";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/navigation/Navbar";
import Wordcloud from "../../../public/wordcloud.png";

export default function Techstack() {
  return (
    <main className="flex flex-col items-center min-h-screen py-8 px-4 md:p-24">
      <section className="flex flex-col gap-14">
        <div className="max-w-xl flex flex-col gap-6 md:gap-8">
          <h1 className="font-head text-2xl font-bold text-jobloop-orange md:text-5xl">
            Våre kodespråk
          </h1>
          <p className="text-base md:text-xl">
            Våre studenter lærer de viktigste teknologiene og rammeverkene innen
            frontend, og de har mulighet til å lære grunnleggende backend. Målet
            er at de skal få en forståelse som gjør det enklere å lære seg nye
            språk når det trengs, og før de begynner i praksis vil de få
            mulighet til å få kjennskap til tech-stacken til deres bedrift slik
            at de kan komme seg i gang så fort som mulig.
          </p>
        </div>
        <div className="max-w-5xl">
          <Image
            alt="Wordcloud of languages"
            src={Wordcloud}
          />
        </div>
      </section>
    </main>
  );
}
