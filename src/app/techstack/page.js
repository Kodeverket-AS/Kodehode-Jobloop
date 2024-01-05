import Image from "next/image";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/navigation/Navbar";
import Wordcloud from "../../../public/wordcloud.png";

export default function Techstack() {
  return (
    <main className=" flex flex-col items-center min-h-screen pt-12 pb-8 px-4 md:p-24">
      <section className="flex flex-col gap-32 pb-16">
        <div className="max-w-prose flex flex-col gap-6 md:gap-8 ">
          <h1
            className="font-head text-3xl font-bold md:text-5xl"
            /*
              MESSAGE FROM KRISTIAN:
              Style below is added inline styling to change the color of the 
              text because not defined/extended in tailwind or global css.
              Color taken from figma design file.
              Should update tailwind or global css with this color as main orange.
              - Kristian
            */
            style={{ color: "#F4A366" }}>
            Våre kodespråk
          </h1>
          <p className="text-base md:text-xl">
            Våre studenter lærer de <strong>viktigste</strong> teknologiene og
            rammeverkene innen <strong>frontend</strong>, og de har mulighet til
            å lære grunnleggende <strong>backend</strong>. Målet er at de skal
            få en forståelse som gjør det enklere å lære seg nye språk når det
            trengs, og før de begynner i <strong>praksis</strong> vil de få
            mulighet til å få kjennskap til <strong>tech-stacken</strong> til
            deres bedrift slik at de kan komme seg i gang så fort som mulig.
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
