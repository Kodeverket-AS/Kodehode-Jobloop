"use client";
import { Accordion } from "flowbite-react";
import { useState } from "react";

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

export function FaqDeltager({ contentQ, contentS }) {
  const data = contentQ.map((element, index) => (
    <Accordion.Panel key={index}>
      <Accordion.Title className="py-4 focus:bg-jobloop-primary-orange/10 hover:bg-jobloop-primary-orange/10">
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

export function FaqBedrift({ contentQ, contentS }) {
  const data = contentQ.map((element, index) => (
    <Accordion.Panel key={index}>
      <Accordion.Title className="py-4 focus:bg-jobloop-primary-orange/10 hover:bg-jobloop-primary-orange/10">
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

export function FaqVirk({ contentQ, contentS }) {
  const data = contentQ.map((element, index) => (
    <Accordion.Panel key={index}>
      <Accordion.Title className="py-4 focus:bg-jobloop-primary-orange/10 hover:bg-jobloop-primary-orange/10">
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
