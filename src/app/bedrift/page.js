import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";
import EgenskapCoop from "../../../components/EgenskapCoop";

export default async function Bedrift() {
  const data = await getData();
  return (
    <>
      <main className="flex flex-col items-center min-h-screen p-24">
        <HeroSub
          content={data.heroSub[3]}
          key={data.heroSub[3]._id}
        />
        <div className="flex flex-col items-center mt-80 md:mt-0">
          <EgenskapCoop content={data.egsCoop} />
          <p>Denne siden er under oppbygging!</p>
          <p>Dette blir Viksomhetssiden til Kodehode</p>
        </div>
      </main>
    </>
  );
}
