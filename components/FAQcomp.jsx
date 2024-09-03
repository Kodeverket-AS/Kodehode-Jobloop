"use client";
import { Accordion } from "flowbite-react";
import { useState, useEffect } from "react";

// ======================
// TOGGLE BUTTONS / TABS
// ======================
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
      <Accordion.Title className="py-4 focus:bg-jobloop-primary-green/10 hover:bg-jobloop-primary-green/10">
        <h3 className="text-kv-black">{element}</h3>
      </Accordion.Title>
      <Accordion.Content className="w-full ">
        <p className="md:text-lg text-kv-black/70 leading-relaxed md:leading-loose">
          {contentS[index]}
        </p>
      </Accordion.Content>
    </Accordion.Panel>
  ));

  return (
    <div className="flex justify-center w-screen">
      <Accordion
        theme={arrowStyle}
        className="w-full max-w-5xl lg:mx-auto"
        collapseAll>
        {data}
      </Accordion>
    </div>
  );
}

function FaqBedrift({ contentQ, contentS }) {
  const data = contentQ.map((element, index) => (
    <Accordion.Panel key={index}>
      <Accordion.Title className="py-4 focus:bg-jobloop-primary-green/10 hover:bg-jobloop-primary-green/10">
        <h3 className="text-kv-black">{element}</h3>
      </Accordion.Title>
      <Accordion.Content className="w-full ">
        <p className="md:text-lg text-kv-black/70 leading-relaxed md:leading-loose">
          {contentS[index]}
        </p>
      </Accordion.Content>
    </Accordion.Panel>
  ));

  return (
    <div className="flex justify-center w-screen">
      <Accordion
        theme={arrowStyle}
        className="w-full max-w-5xl lg:mx-auto"
        collapseAll>
        {data}
      </Accordion>
    </div>
  );
}

function FaqVirk({ contentQ, contentS }) {
  const data = contentQ.map((element, index) => (
    <Accordion.Panel key={index}>
      <Accordion.Title className="py-4 focus:bg-jobloop-primary-green/10 hover:bg-jobloop-primary-green/10">
        <h3 className="text-kv-black">{element}</h3>
      </Accordion.Title>
      <Accordion.Content className="w-full ">
        <p className="md:text-lg text-kv-black/70 leading-relaxed md:leading-loose">
          {contentS[index]}
        </p>
      </Accordion.Content>
    </Accordion.Panel>
  ));

  return (
    <div className="flex justify-center w-screen">
      <Accordion
        theme={arrowStyle}
        className="w-full max-w-5xl lg:mx-auto"
        collapseAll>
        {data}
      </Accordion>
    </div>
  );
}

// ==============================
// ACCORDION COMPONENT WITH TABS
// ==============================
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
    <div className="flex flex-col w-full gap-8">
      <div className="flex justify-center w-full">
        <div className="text-kv-black/70 flex flex-row flex-wrap divide-x rounded-full overflow-hidden border-2 border-jobloop-primary-green w-fit items-start justify-start sm:justify-center md:flex-row ">
          {tabs.map((tab) => (
            <div key={tab.id}>
              <button
                onClick={() => handleTabChange(tab.id)}
                className={`flex p-4 gap-2 items-center
                  ${
                    activeTab === tab.id
                      ? "border-neutral-200 bg-jobloop-primary-green/10"
                      : " border-neutral-200"
                  }`}>
                <div
                  className={`hidden md:flex items-center justify-center rounded-full ${
                    activeTab === tab.id
                      ? " bg-jobloop-primary-green "
                      : " bg-neutral-200"
                  }`}>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      activeTab === tab.id
                        ? " bg-joblog-primary-green "
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
