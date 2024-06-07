"use client";

import Link from "next/link";
import Image from "next/image";
import dokument from "../public/dokument.svg";
import koffert from "../public/koffert.svg";
import hatt from "../public/hatt.svg";
import { LinkButton } from "./Buttons";

export default function LandingLinks() {
    return (
        <div className='flex flex-col w-full px-8 pt-20 sm:px-10 md:px-12 lg:px-24'>
            <div className='flex justify-center w-full'>
                <h2 className='text-center'>Hvordan kan vi hjelpe deg?</h2>
            </div>
            <div className='flex flex-col w-full gap-20 pt-10 pb-20 justify-evenly md:flex-row md:gap-0 xl:max-w-[800px] xl:justify-between xl:mx-auto'>
                <div className='flex flex-col items-start w-40 gap-4 px-0 mx-auto text-left md:w-52 md:pr-5 lg:pr-5 md:mx-0'>
                    <Image
                        src={koffert}
                        width={500}
                        height={300}
                        className='w-auto h-24 md:h-20'
                        alt=''
                    />
                    <h5 className='text-xl font-bold text-left'>
                        Arbeidsgiver
                    </h5>
                    <p className='text-left'>
                        For bedrifter som er interessert i utviklere
                    </p>
                    <div>
                        <LinkButton Path={"/arbeidsgiver"} Text={"Les mer"} />
                    </div>
                </div>
                <div className='flex flex-col items-start w-40 gap-4 px-0 mx-auto text-left md:w-52 md:px-5 lg:px-5 md:mx-0'>
                    <Image
                        src={hatt}
                        width={500}
                        height={300}
                        alt=''
                        className='w-auto h-24 md:h-20'
                    />
                    <h5 className='text-xl font-boldtext-left '>Deltager</h5>
                    <p className='text-left'>
                        For deg som vil delta på Kodehode
                    </p>
                    <div>
                        <LinkButton Path={"/deltaker"} Text={"Les mer"} />
                    </div>
                </div>
                <div className='flex flex-col items-start w-40 gap-4 px-0 mx-auto text-left md:w-52 md:pl-5 lg:pl-5 md:mx-0'>
                    <Image
                        src={dokument}
                        width={500}
                        height={300}
                        alt=''
                        className='w-auto h-24 md:h-20'
                    />
                    <h5 className='text-xl font-bold text-left'>
                        Samarbeidspartner
                    </h5>
                    <p className='text-left'>
                        For andre virksomheter som vil samarbeide
                    </p>
                    <div>
                        <LinkButton
                            Path={"/samarbeidspartner"}
                            Text={"Les mer"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
