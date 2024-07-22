"use client";
import { Accordion } from "flowbite-react";
import { useState } from "react";

const customTheme = {
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
    <Accordion.Panel key={index} className="w-2/3">
      <Accordion.Title className="gap-3 p-2 text-sm focus:bg-gray-100 hover:bg-gray-100">
        {element}
      </Accordion.Title>
      <Accordion.Content className="w-full">{contentS[index]}</Accordion.Content>
    </Accordion.Panel>
  ));

  return (
    <div className="flex justify-center w-screen">
      <Accordion
        theme={customTheme}
        className=" w-2/3  lg:w-2/3 lg:max-w-[1600px] lg:mx-auto"
        collapseAll
      >
        {data}
      </Accordion>
    </div>
  );
}

export function FaqBedrift({ contentQ, contentS }) {
  const data = contentQ.map((element, index) => (
    <Accordion.Panel className="w-2/3" key={index}>
      <Accordion.Title className="gap-3 p-2 focus:border-none focus:bg-gray-100 hover:bg-gray-100">
        {element}
      </Accordion.Title>
      <Accordion.Content className="w-full">{contentS[index]}</Accordion.Content>
    </Accordion.Panel>
  ));
  return (
    <div className="flex justify-center w-screen">
      <Accordion
        theme={customTheme}
        className=" w-2/3  lg:w-2/3 lg:max-w-[1600px] lg:mx-auto"
        collapseAll
      >
        {data}
      </Accordion>
    </div>
  );
}

export function FaqVirk({ contentQ, contentS }) {
  const data = contentQ.map((element, index) => (
    <Accordion.Panel className="w-5/6" key={index}>
      <Accordion.Title className="gap-3 p-2 focus:border-none focus:bg-gray-100 hover:bg-gray-100">
        {element}
      </Accordion.Title>
      <Accordion.Content className="w-full">{contentS[index]}</Accordion.Content>
    </Accordion.Panel>
  ));
  return (
    <div className="flex justify-center w-screen">
      <Accordion
        theme={customTheme}
        className=" w-2/3  lg:w-2/3 lg:max-w-[1600px] lg:mx-auto"
        collapseAll
      >
        {data}
      </Accordion>
    </div>
  );
}

//   return (

//   <div
//   id={id}
//   className="flex flex-col px-3 lg:px-9 mb-40 gap-7 lg:w-full lg:lg:max-w-[1100px] lg:mx-auto"
// >
//   <h2 className="font-bold text-center">Spørsmål og svar</h2>
//   <Accordion collapseAll >
//       <Accordion.Panel >
//           <Accordion.Title className="test">{question}</Accordion.Title>
//           <Accordion.Content className="font-bold">{answer}</Accordion.Content>
//       </Accordion.Panel>
//   </Accordion>

// </div>
// );

//     <div
//     className="flex flex-col px-3 lg:px-9 mb-40 gap-7 lg:w-full lg:lg:max-w-[1100px] lg:mx-auto"
//   >
//     <h2 className="font-bold text-center">Spørsmål og svar</h2>
//     <Accordion>
//       <Accordion.Panel >
//         <Accordion.Title >{content[0].question}</Accordion.Title>
//         <Accordion.Content> {content[0].svar} </Accordion.Content>
//       </Accordion.Panel>
//       <Accordion.Panel >
//         <Accordion.Title >{content[1].question}</Accordion.Title>
//         <Accordion.Content> {content[1].svar} </Accordion.Content>
//       </Accordion.Panel>
//     </Accordion>
//     </div>
//   );
// }

// }

// const data = content.reverse().map((item) => {
