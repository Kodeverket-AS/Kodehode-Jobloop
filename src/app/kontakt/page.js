import Image from "next/image";
import { LocationCheck } from "../../../components/ContactUsSection";
import { getData } from "../page";
import {
    AlertInfo,
    AlertWarning,
    AlertSuccess,
} from "../../../components/AlertComponent";

export const metadata = {
    title: "Kontakt oss | Kodehode",
};

export default async function Contact() {
    const data = await getData();

    return (
        <div className='min-h-screen bg-kv-white'>
            <section className='relative h-[60vh] w-screen overflow-hidden !p-0'>
                <Image
                    src={data.heroSub[1].image}
                    height={800}
                    width={1200}
                    alt='Kontakt Kodehode'
                    className='absolute inset-0 h-full w-full object-cover'
                    priority
                />
                <div className='absolute inset-0 bg-kv-black/70 flex flex-col items-center justify-center text-center group'>
                    <div className='max-w-4xl mx-auto space-y-6'>
                        <h1 className="text-4xl text-kv-white underline transition-all duration-500 underline-offset-8 decoration-jobloop-primary-green group-hover:decoration-jobloop-primary-orange md:text-5xl lg:text-7xl">
                            Kontakt oss
                        </h1>
                        
                        <p className='text-xl md:text-2xl text-kv-white/90 max-w-2xl mx-auto'>
                            Ta kontakt med oss for å lære mer om Kodehode-programmet
                        </p>
                    </div>
                </div>
            </section>

            <main className='flex flex-col items-center justify-between min-h-screen pt-28 space-y-16 mb-12 px-4'>
                <section className='text-center space-y-8'>
                    <div className='max-w-4xl mx-auto space-y-6'>
                        <div className='space-y-4'>
                            <h2 className='text-3xl md:text-4xl font-bold text-kv-black underline underline-offset-8 decoration-jobloop-primary-green'>
                                Kontaktinformasjon
                            </h2>
                           
                        </div>
                        <div className='max-w-2xl mx-auto'>
                            <div className="bg-jobloop-primary-orange rounded-lg p-6 text-kv-black shadow-lg">
                                <h3 className="text-lg font-bold mb-3">
                                    Alle henvendelser rundt Kodehode rettes til Inger Johanne Mørk
                                </h3>
                                <div className="space-y-2 text-base">
                                    <p><strong>E-post:</strong> inger-johanne@jobloop.no</p>
                                    <p><strong>Mobil:</strong> +47 483 58 703</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='w-full md:p-8 rounded-2xl'>
                    <div className=' w-full mx-auto '>
                        <div className='text-center mb-8'>
                            <h2 className='text-3xl md:text-4xl font-bold text-kv-black underline underline-offset-8 decoration-jobloop-primary-orange mb-4'>
                                Vårt team
                            </h2>
                            <p className='text-lg text-kv-black/70 max-w-2xl mx-auto'>
                                Møt de fantastiske menneskene bak Kodehode-programmet
                            </p>
                        </div>
                        <LocationCheck content={data.personDatabase} />
                    </div>
                </div>
            </main>
        </div>
    );
}
