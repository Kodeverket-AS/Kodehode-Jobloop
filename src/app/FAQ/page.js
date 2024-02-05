

import Image from "next/image";
import { NavbarAlt } from "../../../components/navigation/Navbar";
import { FaqDeltager } from "../../../components/FAQcomp";
import { FaqBedrift } from "../../../components/FAQcomp";
import { FaqVirk } from "../../../components/FAQcomp";
import { getData } from "../page";
import { ToggleBtn } from "../../../components/Buttons";





export default async function FAQ() {

  
   

  const faqData = await getData('FAQ');
  
  



 

   return (
    <>
      <main className="flex flex-col items-center min-h-screen p-24">
        <h2 className="font-bold text-center">Spørsmål og svar</h2>
        <div className="flex flex-row gap-10 ">
          <ToggleBtn titleDel={faqData.FAQ[0].title} titleBed={faqData.FAQ[1].title} titleVirk={faqData.FAQ[2].title} contentQuestOne={faqData.FAQ[0].question} contentSvarOne={faqData.FAQ[0].svar} idOne={faqData.FAQ[0]._id}  contentQuestTwo={faqData.FAQ[1].question} contentSvarTwo={faqData.FAQ[1].svar} idTwo={faqData.FAQ[1]._id} contentQuestThree={faqData.FAQ[2].question} contentSvarThree={faqData.FAQ[2].svar} idThree={faqData.FAQ[2]._id}></ToggleBtn>
        </div>
 
      </main>
    </>
  );



}
 
  // function organizeFAQData(faqData, blockCount = 3) {
  //   const organizedBlocks = [];
  
  //   for (let i = 0; i < blockCount; i++) {
  //     organizedBlocks.push({
  //       blockTitle: `Block ${i + 1}`,
  //       qaPairs: [],
  //     });
  //   }
  
  //   faqData.forEach((faqItem, index) => {
  //     const blockIndex = index % blockCount;
  //     organizedBlocks[blockIndex].qaPairs.push({
  //       question: faqItem.question,
  //       answer: faqItem.svar,
  //     });
  //   });
  
  //   return organizedBlocks;
  // }

  // // Process the FAQ data as needed
  // const organizedFAQBlocks = organizeFAQData(faqData);

  // // Display the organized FAQ blocks
  // organizedFAQBlocks.forEach((block, index) => {
  //   console.log(`${block.blockTitle}:`);
  //   block.qaPairs.forEach(qaPair => {
  //     console.log(`  Q: ${qaPair.question}`);
  //     console.log(`  A: ${qaPair.answer}`);
  //   });
  //   console.log('\n');
  // });


// Optionally, you might want to call the FAQ function
// FAQ();


// });
  
  // // Example usage
  // console.log(nextJsQAPerSets[0].title); // Output: Getting Started
  // console.log(nextJsQAPerSets[0].qaPairs[0].question); // Output: What is Next.js?
  // console.log(nextJsQAPerSets[0].qaPairs[0].answer); // Output: Next.js is a React framework...
//   const faqData = await getData('FAQ');

//   function organizeFAQData(faqData, blockCount = 3) {
//     const organizedBlocks = [];
  
//     for (let i = 0; i < blockCount; i++) {
//       organizedBlocks.push({
//         blockTitle: `Block ${i + 1}`,
//         qaPairs: [],
//       });
//     }
  
//     faqData.forEach((faqItem, index) => {
//       const blockIndex = index % blockCount;
//       organizedBlocks[blockIndex].qaPairs.push({
//         question: faqItem.question,
//         answer: faqItem.svar,
//       });
//     });
  
//     return organizedBlocks;
//   }

// // Process the FAQ data as needed
// // For example, you can use the organizeFAQData function mentioned earlier
// const organizedFAQBlocks = organizeFAQData(faqData);

// // Display the organized FAQ blocks
// organizedFAQBlocks.forEach((block, index) => {
//   console.log(`${block.blockTitle}:`);
//   block.qaPairs.forEach(qaPair => {
//     console.log(`  Q: ${qaPair.question}`);
//     console.log(`  A: ${qaPair.answer}`);
//   });
//   console.log('\n');
  

// Define the original array with questions and answers
// const qaSets = [
//   {
//     title: "Getting Started",
//     qaPairs: [
//       {
//         question: "What is Next.js?",
//         answer: "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for your React applications."
//       },
//       {
//         question: "How do I create a new Next.js project?",
//         answer: "You can create a new Next.js project by using the command `npx create-next-app` followed by your project name."
//       },
//       // Add more questions and answers as needed
//     ]
//   },
//   {
//     title: "Routing",
//     qaPairs: [
//       {
//         question: "How does routing work in Next.js?",
//         answer: "Next.js uses a file-system-based router. Create files in the 'pages' directory, and each file automatically becomes a route in your application."
//       },
//       {
//         question: "Can I create nested routes in Next.js?",
//         answer: "Yes, you can create nested routes by organizing your files in a nested structure within the 'pages' directory."
//       },
//       // Add more questions and answers as needed
//     ]
//   },
//   {
//     title: "Data Fetching",
//     qaPairs: [
//       {
//         question: "How can I fetch data in Next.js?",
//         answer: "You can use the `getStaticProps` or `getServerSideProps` functions to fetch data during the build or on each request, respectively."
//       },
//       {
//         question: "What is the purpose of getStaticPaths?",
//         answer: "The `getStaticPaths` function is used with dynamic routes in Next.js to specify which paths should be pre-rendered at build time."
//       },
//       // Add more questions and answers as needed
//     ]
//   },
// ];

// // Specify the number of blocks you want to organize the questions and answers into
// const blockCount = 3;

// // Initialize an array to hold the organized blocks
// const organizedBlocks = [];

// // Create blocks with titles and empty QA pairs arrays
// for (let i = 0; i < blockCount; i++) {
//   organizedBlocks.push({
//     blockTitle: `Block ${i + 1}`,
//     qaPairs: []
//   });
// }

// // Iterate through the original QA sets and distribute them into blocks
// qaSets.forEach((qaSet, index) => {
//   // Determine the index of the block for the current QA set
//   const blockIndex = index % blockCount;

//   // Push the QA pairs from the current set into the corresponding block
//   organizedBlocks[blockIndex].qaPairs.push(...qaSet.qaPairs);
// });

// // Display the organized blocks with questions and answers
// organizedBlocks.forEach((block, index) => {
//   console.log(`${block.blockTitle}:`);
//   block.qaPairs.forEach(qaPair => {
//     console.log(`  Q: ${qaPair.question}`);
//     console.log(`  A: ${qaPair.answer}`);
//   });
//   console.log('\n');
// });



  // const data = await getData();

  // console.log(data.FAQ[0])
  

  // return (
  //   <>
  //     <NavbarAlt />
  //     <main className="flex flex-col items-center min-h-screen p-24">
  //       <p className="font-bold">Denne siden er under oppbygging!</p>
  //       <p>Her kommer noen spørsmål og svar hos Kodehode</p>
  //       <SelectBtn content={data.FAQ}></SelectBtn>
  //       <Faq  content={data.FAQ}></Faq>
  //     </main>
  //   </>
  // );




// <div className="flex flex-row justify-center">
//           {content2.map((item) => (
//             <button
//               key={item._id}
//               active={active === item}
//               onClick={() => setActive(item)}
//               className="px-2 mx-3 mb-3 border-2 border-black rounded-full md:py-2 md:px-3 active:bg-jobloop-orange"
//             >
//               {item.duration}
//             </button>
//           ))}
// </div>