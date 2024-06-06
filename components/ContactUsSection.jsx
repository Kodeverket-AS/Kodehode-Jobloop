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
          <div
            className="flex items-center gap-3"
            key={`filters-${idx}`}>
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
            className="flex flex-col justify-center w-full max-w-3xl mb-3 md:flex-row md:gap-10">
            <Image
              width={700}
              height={700}
              className="w-4/6 h-4/6 md:w-3/6 object-cover md:h-full"
              alt={`Profilbilde ${item.navn}` || "profilbilder"}
              src={item.image || ""}
            />
            <div className="flex flex-col w-full md:w-2/6">
              <div className="border-b-4 border-jobloop-primary-green mb-1 w-4/6">
                <h3 className="text-xl">{item.navn}</h3>
              </div>
              <p>Avdeling: {item.lokasjon}</p>
              <p>{item.mail}</p>
              <p>{item.tlf_nummer}</p>
              {/* Gir kanskje mer mening å ha tittel som f.eks Daglig leder, Veileder osv. fremfor "Om" ? 
                Eksempel: Tittel: Daglig leder
              */}
              {/* <p>Om:{item.om}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
