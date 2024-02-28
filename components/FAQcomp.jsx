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
    <Accordion.Panel key={index}>
      <Accordion.Title className="gap-3 p-2 text-sm focus:bg-gray-100 hover:bg-gray-100">
        {element}
      </Accordion.Title>
      <Accordion.Content className="w-full mt-5">{contentS[index]}</Accordion.Content>
    </Accordion.Panel>
  ));

  return (
    <div className="flex justify-center w-full">
      <Accordion
        theme={customTheme}
        className=" w-full  lg:w-full lg:max-w-[1600px] lg:mx-auto"
        collapseAll
      >
        {data}
      </Accordion>
    </div>
  );
}

export function FaqBedrift({ contentQ, contentS }) {
  const data = contentQ.map((element, index) => (
    <Accordion.Panel key={index}>
      <Accordion.Title className="gap-3 p-2 focus:border-none focus:bg-gray-100 hover:bg-gray-100">
        {element}
      </Accordion.Title>
      <Accordion.Content className="w-full">{contentS[index]}</Accordion.Content>
    </Accordion.Panel>
  ));
  return (
    <div className="flex justify-center w-full">
      <div
        key={data._id}
        className="flex flex-col px-3 lg:px-9 mb-40 gap-7 w-full lg:w-full lg:lg:max-w-[1100px] lg:mx-auto"
      >
        <Accordion collapseAll className="faq-title">
          {data}
        </Accordion>
      </div>
    </div>
  );
}

export function FaqVirk({ contentQ, contentS }) {
  const data = contentQ.map((element, index) => (
    <Accordion.Panel key={index}>
      <Accordion.Title className="gap-3 p-2 text-sm focus:border-none focus:bg-gray-100 hover:bg-gray-100">
        {element}
      </Accordion.Title>
      <Accordion.Content className="w-full">{contentS[index]}</Accordion.Content>
    </Accordion.Panel>
  ));
  return (
    <div className="flex justify-center w-full">
      <div
        key={data._id}
        className="flex flex-col px-3 lg:px-9 mb-40 gap-7 w-full lg:w-full lg:lg:max-w-[1100px] lg:mx-auto"
      >
        <Accordion collapseAll className="faq-title">
          {data}
        </Accordion>
      </div>
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
