// import { Checkbox } from "@mui/material";
// import FormGroup from "@mui/material";
// import FormControlLabel from "@mui/material";
"use client"

import { Checkbox, Label } from 'flowbite-react';
import { useState, useEffect } from 'react';

export function ContactUsCheck(){
    const items = [
        {
          name: "Prada",
          category: "Bags"
        },
        {
          name: "Gucci",
          category: "Bags"
        },
        {
          name: "Guess",
          category: "Bags"
        },
        {
          name: "Rolex",
          category: "Watches"
        },
        {
          name: "Timex",
          category: "Watches"
        },
        {
          name: "Nike",
          category: "Sports"
        },
        {
          name: "Adidas",
          category: "Sports"
        },
        {
          name: "Fila",
          category: "Sports"
        },
        {
          name: "Ray Ban",
          category: "Sunglasses"
        },
        {
          name: "Aldo",
          category: "Sunglasses"
        },
        {
          name: "Polaroid",
          category: "Sunglasses"
        }
      ];


      const [selectedFilters, setSelectedFilters] = useState([]);
      const [filteredItems, setFilteredItems] = useState(items);
    
      let filters = ["Bags", "Watches", "Sports", "Sunglasses"];
    
      const handleFilterButtonClick = (selectedCategory) => {
        if (selectedFilters.includes(selectedCategory)) {
          let filters = selectedFilters.filter((el) => el !== selectedCategory);
          setSelectedFilters(filters);
        } else {
          setSelectedFilters([...selectedFilters, selectedCategory]);
        }
      };
    
      useEffect(() => {
        filterItems();
      }, [selectedFilters]);
    
      const filterItems = () => {
        if (selectedFilters.length > 0) {
          let tempItems = selectedFilters.map((selectedCategory) => {
            let temp = items.filter((item) => item.category === selectedCategory);
            return temp;
          });
          setFilteredItems(tempItems.flat());
        } else {
          setFilteredItems([...items]);
        }
      };
    
      return (
        <div>
          <div className="buttons-container">
            {filters.map((category, idx) => (
            
                <div className="flex items-center gap-2">
                <Checkbox id="Bergen" onClick={() => handleFilterButtonClick(category)} key={`filters-${idx}`} />
                 <Label htmlFor="location">{category}</Label>            
                 
                 </div>

                
            ))}
          </div>
    
          <div className="flex flew-row gap-10">
            {filteredItems.map((item, idx) => (
              <div key={`items-${idx}`} className="flex  w-full">
                <p>{item.name}</p>
                <p className="category">{item.category}</p>
              </div>
            ))}
          </div>
        </div>)



}

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