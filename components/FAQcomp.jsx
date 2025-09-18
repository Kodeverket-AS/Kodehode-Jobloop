"use client";
import { Accordion } from "flowbite-react";
import { useState, useEffect } from "react";

const arrowStyle = {
  title: {
    arrow: {
      base: "h-6 w-6 shrink-0",
      open: {
        off: "",
        on: "rotate-180",
      },
    },
  },
};

function FaqDeltager({ contentQ, contentS }) {
  const data = contentQ.map((element, index) => (
    <Accordion.Panel key={index}>
      <Accordion.Title className="py-6 px-6 focus:bg-jobloop-primary-green/10 hover:bg-jobloop-primary-green/10 transition-all duration-300 border-b border-gray-100 last:border-b-0">
        <h3 className="text-kv-black font-semibold text-lg">{element}</h3>
      </Accordion.Title>
      <Accordion.Content className="w-full px-6 py-6 bg-gray-50/50">
        <p className="md:text-lg text-kv-black/80 leading-relaxed md:leading-loose">
          {contentS[index]}
        </p>
      </Accordion.Content>
    </Accordion.Panel>
  ));

  return (
    <div className="flex justify-center w-full">
      <Accordion
        theme={arrowStyle}
        className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
        collapseAll>
        {data}
      </Accordion>
    </div>
  );
}

function FaqBedrift({ contentQ, contentS }) {
  const data = contentQ.map((element, index) => (
    <Accordion.Panel key={index}>
      <Accordion.Title className="py-6 px-6 focus:bg-jobloop-primary-green/10 hover:bg-jobloop-primary-green/10 transition-all duration-300 border-b border-gray-100 last:border-b-0">
        <h3 className="text-kv-black font-semibold text-lg">{element}</h3>
      </Accordion.Title>
      <Accordion.Content className="w-full px-6 py-6 bg-gray-50/50">
        <p className="md:text-lg text-kv-black/80 leading-relaxed md:leading-loose">
          {contentS[index]}
        </p>
      </Accordion.Content>
    </Accordion.Panel>
  ));

  return (
    <div className="flex justify-center w-full">
      <Accordion
        theme={arrowStyle}
        className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
        collapseAll>
        {data}
      </Accordion>
    </div>
  );
}

function FaqVirk({ contentQ, contentS }) {
  const data = contentQ.map((element, index) => (
    <Accordion.Panel key={index}>
      <Accordion.Title className="py-6 px-6 focus:bg-jobloop-primary-green/10 hover:bg-jobloop-primary-green/10 transition-all duration-300 border-b border-gray-100 last:border-b-0">
        <h3 className="text-kv-black font-semibold text-lg">{element}</h3>
      </Accordion.Title>
      <Accordion.Content className="w-full px-6 py-6 bg-gray-50/50">
        <p className="md:text-lg text-kv-black/80 leading-relaxed md:leading-loose">
          {contentS[index]}
        </p>
      </Accordion.Content>
    </Accordion.Panel>
  ));

  return (
    <div className="flex justify-center w-full">
      <Accordion
        theme={arrowStyle}
        className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
        collapseAll>
        {data}
      </Accordion>
    </div>
  );
}

export function FAQComponent({
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

  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    setActiveTab(tabs[0].id);
  }, []);

  const handleTabChange = (id) => {
    setActiveTab(id);
  };

  return (
    <div className="flex flex-col w-full gap-12">
      <div className="flex justify-center w-full px-4">
        <div className="inline-flex flex-wrap sm:flex-nowrap gap-6 md:gap-12 justify-center">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`relative flex flex-col items-center gap-3 px-4 py-6 font-medium text-base md:text-lg lg:text-xl transition-all duration-300 group ${
                activeTab === tab.id
                  ? "text-jobloop-primary-green"
                  : "text-kv-black/60 hover:text-kv-black"
              }`}>
              
              <span className="relative z-10 whitespace-nowrap">
                {tab.title}
              </span>
              
              <div
                className={`h-1 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? "w-full bg-jobloop-primary-green"
                    : "w-0 bg-jobloop-primary-green group-hover:w-8"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center w-full">
        <div className="w-full max-w-4xl">
          {tabs.map((tab) => (
            <div 
              key={tab.id}
              className={`transition-all duration-500 transform ${
                activeTab === tab.id 
                  ? "opacity-100 translate-y-0 scale-100" 
                  : "opacity-0 translate-y-4 scale-95 absolute -z-10"
              }`}
            >
              {activeTab === tab.id && (
                <div className="animate-in fade-in duration-500">
                  <tab.component
                    id={tab.id}
                    contentQ={tab.contentQ}
                    contentS={tab.contentS}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
