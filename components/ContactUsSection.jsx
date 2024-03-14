// import { Checkbox } from "@mui/material";
// import FormGroup from "@mui/material";
// import FormControlLabel from "@mui/material";
"use client";

import { Checkbox, Label } from "flowbite-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export function LocationCheck({ content }) {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredItems, setFilteredItems] = useState(content);

  let filters = [...new Set(content.map((item) => item.lokasjon))];

  const handleFilterButtonClick = (selectedLocation) => {
    if (selectedFilters.includes(selectedLocation)) {
      let filters = selectedFilters.filter((el) => el !== selectedLocation);
      setSelectedFilters(filters);
    } else {
      setSelectedFilters([...selectedFilters, selectedLocation]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters.flatMap((selectedLocation) => {
        return content.filter((item) => item.lokasjon === selectedLocation);
      });
      setFilteredItems(tempItems);
    } else {
      setFilteredItems([...content]);
    }
  };

  return (
    <div className="flex flex-row justify-center w-full gap-16 md:w-4/6 md:gap-20 max-w-[1600px]">
      <div className="flex flex-col w-1/6 gap-2 ">
        {filters.map((location, idx) => (
          <div className="flex items-center gap-3" key={`filters-${idx}`}>
            <Checkbox
              className="w-7 h-7 rounded-xl checked:bg-jobloop-primary-green"
              id={location}
              onClick={() => handleFilterButtonClick(location)}
            />
            <Label htmlFor={location}>{location}</Label>
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full gap-2 md:gap-10 md:w-4/6 md:ml-10">
        {filteredItems.map((item, idx) => (
          <div
            key={`items-${idx}`}
            className="flex flex-col justify-center w-full max-w-3xl md:flex-row md:gap-10"
          >
            <Image
              width={700}
              height={700}
              className="w-4/6 h-4/6 md:w-3/6 md:h-full"
              alt={`Profilbilde ${item.navn}` || "profilbilder"}
              src={item.image || ""}
            />
            <div className="flex flex-col w-full md:w-2/6">
              <h3 className="mb-5 text-xl">{item.navn}</h3>
              <p>Avdeling: {item.lokasjon}</p>
              <p>{item.mail}</p>
              <p>{item.tlf_nummer}</p>
              <p>Om:{item.om}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

//   console.log(content)

//   const [selectedFilters, setSelectedFilters] = useState([]);
//   const [filteredItems, setFilteredItems] = useState(content);

//       useEffect(() => {
//           filterItems();
//       }, [selectedFilters]);

//       const filterItems = () => {
//         console.log('Selected filters:', selectedFilters);

//         if (selectedFilters.length > 0) {
//             let tempItems = selectedFilters.map((selectedFilter) => { // Here 'selectedFilter' is defined
//                 const filteredItems = content.filter((item) => {
//                     console.log(`Checking item ${item.navn} for filter ${selectedFilter}:`, item[selectedFilter]);
//                     return item[selectedFilter];
//                 });
//                 console.log(`Filtered items for ${selectedFilter}:`, filteredItems);
//                 return filteredItems;
//             });
//             console.log('Temp items:', tempItems);

//             // Flatten the array of arrays into a single array
//             tempItems = tempItems.flat();
//             console.log('Flattened temp items:', tempItems);

//             setFilteredItems(tempItems);
//         } else {
//             console.log('No filters selected. Showing all items.');
//             setFilteredItems([...content]);
//         }
//     };

//       const generateFilterOptions = (property) => {
//           // Extract unique values for the specified property from the content
//           const values = [...new Set(content.map((item) => item[property]))];
//           return values;
//       };

//       const handleFilterButtonClick = (selectedFilter) => {
//           if (selectedFilters.includes(selectedFilter)) {
//               setSelectedFilters(selectedFilters.filter((filter) => filter !== selectedFilter));
//           } else {
//               setSelectedFilters([...selectedFilters, selectedFilter]);
//           }

//       };

//       return (
//           <div>
//               <div className="buttons-container">
//                   {/* Dynamically generate checkboxes for 'lokasjon' filter options */}
//                   {generateFilterOptions('lokasjon').map((location, idx) => (
//                       <div className="flex items-center gap-2" key={`lokasjon-${idx}`}>
//                           <Checkbox id={location} onClick={() => handleFilterButtonClick(location)} />
//                           <Label htmlFor={location}>{location}</Label>
//                       </div>
//                   ))}

//                   {/* Dynamically generate checkboxes for 'henvendelser' filter options */}
//                   {generateFilterOptions('henvendelser').map((inquiry, idx) => (
//                       <div className="flex items-center gap-2" key={`inquiry-${idx}`}>
//                           <Checkbox id={inquiry} onClick={() => handleFilterButtonClick(inquiry)} />
//                           <Label htmlFor={inquiry}>{inquiry}</Label>
//                       </div>
//                   ))}
//               </div>

//               <div className="flex gap-10 flew-row">
//                   {filteredItems.map((item, idx) => (
//                       <div key={`items-${idx}`} className="flex w-full">
//                           <p>{item.navn}</p>
//                           <p>{item.stilling}</p>
//                       </div>
//                   ))}
//               </div>
//           </div>
//       );
//   }

//       const [selectedFilters, setSelectedFilters] = useState([]);
//       const [filteredItems, setFilteredItems] = useState(content);

//       let filters = ["Bergen", "Stavanger", "Haugesund", "Tønsberg"];

//       const handleFilterButtonClick = (selectedCategory) => {
//         if (selectedFilters.includes(selectedCategory)) {
//           let filters = selectedFilters.filter((el) => el !== selectedCategory);
//           setSelectedFilters(filters);
//         } else {
//           setSelectedFilters([...selectedFilters, selectedCategory]);
//         }
//       };

//       useEffect(() => {
//         filterItems();
//       }, [selectedFilters]);

//       const filterItems = () => {
//         if (selectedFilters.length > 0) {
//             let tempItems = [];
//             selectedFilters.forEach((selectedCategory) => {
//                 let temp = content.filter((item) => content.lokasjon === selectedCategory);
//                 tempItems = [...tempItems, ...temp];
//             });
//             setFilteredItems(tempItems);
//         } else {
//             setFilteredItems([...items]);
//         }
//     };

//       return (
//         <div className='flex flex-row gap-20'>
//           <div className="buttons-container">
//             {filters.map((category, idx) => (

//                 <div className="flex items-center gap-2">
//                 <Checkbox id="Bergen" onClick={() => handleFilterButtonClick(category)} key={`filters-${idx}`} />
//                  <Label htmlFor="location">{category}</Label>

//                  </div>

//             ))}
//           </div>

//           <div className="flex flex-col gap-10">
//             {filteredItems.map((item, idx) => (
//               <div key={`items-${idx}`} className="flex w-full">
//                 <p className="category">{item.category}</p>
//               </div>
//             ))}
//           </div>
//         </div>)

// }

// const [isBergenChecked, setIsBergenChecked] = useState(false);
// const [isStavangerChecked, setIsStavangerChecked] = useState(false);

// const [bergenIsVisible, setIsBergenVisible] = useState(true)
// const [stavangerIsVisible, setIsStavangerVisible] = useState(true)
// const [haugesundIsVisible, setIsHaugesundVisible] = useState(true)
// const [tonsbergIsVisible, setIsTonsbergVisible] = useState(true)

// function checkBergen(){
// // setIsBergenChecked(!isBergenChecked);
// setIsBergenVisible(!bergenIsVisible)
// setIsStavangerVisible(false)
// setIsHaugesundVisible(false)
// setIsTonsbergVisible(false)
// }

// function checkStavanger(){
//     // setIsStavangerChecked(!isStavangerChecked);
//     setIsStavangerVisible(!stavangerIsVisible)
//     setIsBergenVisible(false)
//     setIsHaugesundVisible(false)
//     setIsTonsbergVisible(false)
//     }

// function checkHaugesund(){
//         // setIsStavangerChecked(!isStavangerChecked);
//     setIsHaugesundVisible(!haugesundIsVisible)
//     setIsBergenVisible(false)
//     setIsStavangerVisible(false)
//     setIsTonsbergVisible(false)
//         }

// function checkTonsberg(){
//             // setIsStavangerChecked(!isStavangerChecked);
//     setIsTonsbergVisible(!tonsbergIsVisible)
//     setIsBergenVisible(false)
//     setIsStavangerVisible(false)
//     setIsHaugesundVisible(false)
//             }

//     return(
//    <div className='flex flex-row '>
//         <div className='flex flex-col'>
//             <div className="flex items-center gap-2">
//                     <Checkbox id="Bergen" onChange={checkBergen}  />
//                     <Label htmlFor="location">Bergen</Label>
//             </div>

//             <div className="flex items-center gap-2">
//                         <Checkbox id="Stavanger" onChange={checkStavanger}  />
//                         <Label htmlFor="location">Stavanger</Label>
//             </div>

//             <div className="flex items-center gap-2">
//                         <Checkbox id="Haugesund"  onChange={checkHaugesund}  />
//                         <Label htmlFor="location">Haugesund</Label>
//             </div>
//             <div className="flex items-center gap-2">
//                         <Checkbox id="Tønsberg" onChange={checkTonsberg}  />
//                         <Label htmlFor="location">Tønsberg</Label>
//             </div>
//         </div>

//         <div>
//               {bergenIsVisible && <h1>Bergen</h1>}

//               {stavangerIsVisible && <h1>Stavanger</h1>}

//               {haugesundIsVisible && <h1>Haugesund</h1>}

//               {tonsbergIsVisible && <h1>Tonsberg</h1>}

//         </div>
//     </div>
// )
// }
