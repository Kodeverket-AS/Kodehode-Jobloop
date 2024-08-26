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
      className={` z-50 p-4 fixed md:bottom-8 bottom-4 md:right-8 right-4 transition-all duration-200  bg-neutral-900 text-kv-white rounded-full hover:scale-[0.90] border border-kv-white shadow ${
        isVisible ? "opacity-100 " : "opacity-0 cursor-default"
      }`}>
      <FaArrowUp
        className="w-6 h-6 "
        strokeWidth={1.5}
      />
    </button>
  );
}

export function LinkButton({ path, text }) {
  return (
    <Link
      href={path}
      title={`Gå til ${path}`}
      aria-label={`Lenke til underside ${path}`}
      className="px-8 py-4 text-sm md:text-base transition-all text-neutral-900 border-2 bg-kv-white/0 border-neutral-900 rounded-full hover:bg-neutral-900 hover:border-2 hover:border-neutral-900 hover:text-kv-white focus:bg-neutral-900 focus:border-neutral-900 focus:text-kv-white">
      {text}
    </Link>
  );
}
export function LinkButtonContained({ path, text }) {
  return (
    <Link
      href={path}
      title={`Gå til ${path}`}
      aria-label={`Lenke til underside ${path}`}
      className="px-8 py-4 text-sm md:text-base text-kv-white border-2 rounded-full bg-neutral-900 border-neutral-900 hover:bg-kv-white/0 hover:border-neutral-900 hover:text-neutral-900 focus:bg-kv-white focus:border-neutral-900 focus:text-neutral-900 ">
      {text}
    </Link>
  );
}

export function ExternalLinkButton({ path, text, ariaLabel }) {
  return (
    <a
      href={path}
      title={`Gå til ${path}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="px-8 py-4 text-sm md:text-base w-full md:w-auto text-neutral-900 border-2 bg-kv-white border-neutral-900 rounded-md hover:bg-neutral-900 hover:border-2 hover:border-neutral-900 hover:text-kv-white focus:bg-neutral-900 focus:border-neutral-900 focus:text-kv-white">
      {text}
    </a>
  );
}

export function LinkButtonColour({ path, text }) {
  return (
    <Link
      href={path}
      title={`Gå til ${path}`}
      className="px-8 py-4 text-sm md:text-base text-neutral-900 border-neutral-900 rounded-full hover:bg-neutral-900 hover:border-none hover:text-kv-white focus:bg-neutral-900 focus:text-kv-white">
      {text}
    </Link>
  );
}

export function ToggleButton({
  titleDel,
  titleBed,
  titleVirk,
  idOne,
  idTwo,
  idThree,
  contentQuestOne,
  contentSvarOne,
  contentQuestTwo,
  contentSvarTwo,
  contentQuestThree,
  contentSvarThree,
}) {
  const tabs = [
    {
      id: "del",
      title: titleDel,
      id: idOne,
      contentQ: contentQuestOne,
      contentS: contentSvarOne,
      component: FaqDeltager,
    },
    {
      id: "bed",
      title: titleBed,
      id: idTwo,
      contentQ: contentQuestTwo,
      contentS: contentSvarTwo,
      component: FaqBedrift,
    },
    {
      id: "virk",
      title: titleVirk,
      id: idThree,
      contentQ: contentQuestThree,
      contentS: contentSvarThree,
      component: FaqVirk,
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id); // Set the initial value to "del"

  const handleTabChange = (id) => {
    setActiveTab(id);
  };

  console.log("Only a mother can love this following code, lol");

  return (
    <div className="flex flex-col w-full gap-8">
      <div className="flex justify-center w-full">
        <div className="text-kv-black/70 flex flex-row flex-wrap divide-x rounded-full overflow-hidden border-2 border-jobloop-primary-orange w-fit items-start justify-start sm:justify-center md:flex-row ">
          {tabs.map((tab) => (
            <div key={tab.id}>
              <button
                onClick={() => handleTabChange(tab.id)}
                className={`flex p-4 gap-2 items-center
                  ${
                    activeTab === tab.id
                      ? "border-neutral-200 bg-jobloop-primary-orange/10"
                      : " border-neutral-200"
                  }`}>
                <div
                  className={`hidden md:flex items-center justify-center rounded-full ${
                    activeTab === tab.id
                      ? " bg-jobloop-primary-orange "
                      : " bg-neutral-200"
                  }`}>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      activeTab === tab.id
                        ? " bg-joblog-primary-orange "
                        : " bg-transparent"
                    }`}>
                    {" "}
                  </div>
                </div>
                <p
                  className={`text-sm md:text-base ${
                    activeTab === tab.id && "text-kv-black/100  "
                  }`}>
                  {tab.title}
                </p>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center w-full">
        {tabs.map((tab) => (
          <div key={tab.id}>
            {activeTab === tab.id && (
              <tab.component
                id={tab.id}
                contentQ={tab.contentQ}
                contentS={tab.contentS}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
