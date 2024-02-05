"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaqDeltager } from "./FAQcomp";
import { FaqBedrift } from "./FAQcomp";
import { FaqVirk } from "./FAQcomp";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll til toppen"
      className={` z-50 p-4 fixed md:bottom-8 bottom-4 md:right-8 right-4 transition-all duration-200  bg-jobloop-primary-green text-white rounded-full hover:scale-[0.90] border shadow ${
        isVisible ? "opacity-100 " : "opacity-0 cursor-default"
      }`}
    >
      <FaArrowUp className="w-6 h-6 " strokeWidth={1.5} />
    </button>
  );
}

export function ContactBtn() {
  return (
    <Link href="/contact">
      <button className="w-32 h-10 transition-all bg-transparent border-2 border-black border-solid rounded-3xl lg:w-52 lg:h-12 duration-600 hover:bg-jobloop-orange hover:border-none hover:text-white">
        Kontakt oss
      </button>
    </Link>
  );
}

export function SeMerBtn() {
  return (
    <button className="w-20 text-sm transition-all bg-transparent border-2 border-black border-solid rounded-3xl lg:w-32 h-7 lg:h-10 duration-600 hover:bg-alt-purple hover:border-none hover:text-white">
      Se Mer
    </button>
  );
} 

export function LinkButton({ Path, Text }) {
  return (
    <Link
      href={Path}
      className="px-8 py-2 transition-all bg-white border-2 border-black border-solid rounded-3xl hover:bg-jobloop-primary-orange hover:border-none hover:text-white"
    >
      {Text}
    </Link>
  );
}

export function LinkButtonColour({ Path, Text }) {
  return (
    <Link
      href={Path}
      className={`md:px-8 py-2 text-white transition-all border-2 border-white rounded-3xl hover:bg-white hover:border-none hover:text-black px-6`}
    >
      {Text}
    </Link>
  );
}


export function ToggleBtn({titleDel, titleBed, titleVirk, idOne, idTwo, idThree, contentQuestOne, contentSvarOne, contentQuestTwo, contentSvarTwo, contentQuestThree, contentSvarThree}) {
  const [isDelVisible, setDelIsVisible] = useState(true);
  const [isBedVisible, setBedIsVisible] = useState(false);
  const [isVirkVisible, setVirkIsVisible] = useState(false)


  function handleDelToggle() {
    setDelIsVisible(!isDelVisible);
    setBedIsVisible(false)
    setVirkIsVisible(false)
    
  };

  function handleBedToggle() {
    setBedIsVisible(!isBedVisible);
    setDelIsVisible(false)
    setVirkIsVisible(false)
    
  };

  function handleVirkToggle() {
    setVirkIsVisible(!isVirkVisible);
    setDelIsVisible(false)
    setBedIsVisible(false)
    
  };

  return (
  <div>

        <div className=" w-full flex flex-row justify-center p-20 gap-7">
        <div>

                

              <button onClick={handleDelToggle} className={`p-7 flex flex-row gap-3 items-center rounded-3xl lg:w-44 w-20 h-7 lg:h-10 border-solid border-black border-2  transition-all duration-600 text-sm
               ${isDelVisible ?'border-jobloop-orange border-solid  border-2 '  : ' border-none'}`}>  
                <div className={`flex items-center justify-center w-7 h-7 rounded-full ${isDelVisible ?' bg-jobloop-orange ': ' bg-gray-200'}`} >
                   <div className={`w-2 h-2 rounded-full ${isDelVisible ?' bg-white ': ' bg-transparent'}`} > </div>
                 </div>
              <p>{titleDel}</p>
              </button>
            </div>

            <div>
              <button onClick={handleBedToggle} className={`p-7 flex flex-row gap-3 items-center rounded-3xl lg:w-44 w-20 h-7 lg:h-10 border-solid border-black border-2  transition-all duration-600 text-sm
               ${isBedVisible ?'border-jobloop-orange border-solid  border-2 '  : ' border-none'}`}>
              <div className={` flex items-center justify-center w-7 h-7  rounded-full ${isBedVisible ?' bg-jobloop-orange ': ' bg-gray-200'}`} >
                  <div className={`w-2 h-2 rounded-full ${isBedVisible ?' bg-white ': ' bg-transparent'}`} > </div>
              </div>
              <p>{titleBed}</p>
              </button>
            </div>

            <div>
                  <button onClick={handleVirkToggle} className={`p-7 flex flex-row gap-3 items-center rounded-3xl lg:w-48 w-20 h-7 lg:h-10 border-solid border-black border-2  transition-all duration-600 text-sm 
                  ${isVirkVisible ? 'border-jobloop-orange border-solid  border-2'  : ' border-none'}`}>
                  <div className={ ` flex items-center justify-center w-7 h-7 rounded-full ${isVirkVisible ?' bg-jobloop-orange ': ' bg-gray-200'}`}>
                        <div className={`w-2 h-2 rounded-full ${isVirkVisible ?' bg-white ': ' bg-transparent'}`} > </div>
                  </div>
                  <p>{titleVirk}</p>
                  </button>
            </div>
        </div>

    
        <div>
         {isDelVisible && <FaqDeltager id={idOne} contentQ={contentQuestOne}  contentS={contentSvarOne}/>}
        </div>

        
        <div>
         {isBedVisible && <FaqBedrift id={idTwo} contentQ={contentQuestTwo}  contentS={contentSvarTwo} />}
        </div>

       
     

        <div>
         {isVirkVisible && <FaqVirk id={idThree} contentQ={contentQuestThree}  contentS={contentSvarThree} />}
        </div>
  </div>

      );
}



