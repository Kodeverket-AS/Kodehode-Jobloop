import HeroSub from "../../../components/HeroSub";
import { getData } from "../page";

export default async function Deltaker() {
  const data = await getData();
  return (
    <>
      <main className="flex flex-col items-center min-h-screen p-24">
        <HeroSub
          content={data.heroSub[1]}
          key={data.heroSub[1]._id}
        />
        <div className="flex flex-col items-center mt-80 md:mt-0">
          <p>Denne siden er under oppbygging!</p>
          <p>Dette blir Viksomhetssiden til Kodehode</p>
        </div>
      </main>
    </>
  );
}
