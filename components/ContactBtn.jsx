import Link from "next/link"



export function ContactBtn(){



    return(
        <Link
        href="/contact">
            <button 
            className="rounded-3xl w-52 h-12 border-solid border-black border-2 bg-white transition-all duration-600  hover:bg-jobloop-orange hover:border-none hover:text-white"
        
            >
                Kontakt oss
            </button>
        </Link>
    )


} 