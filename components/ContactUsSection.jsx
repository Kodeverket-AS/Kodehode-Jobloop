"use client";

import { Checkbox, Label } from "flowbite-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export function LocationCheck({ content }) {
  // const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState("");
  const [filteredItems, setFilteredItems] = useState(content);

  let filters = [...new Set(content.map((item) => item.lokasjon))];

  const handleFilterChange = (e) => {
    setSelectedFilters(e.target.value);
  };

  useEffect(() => {
    filterItems();
  }, [selectedFilters]);

  const filterItems = () => {
    if (selectedFilters) {
      let tempItems = content.filter(
        (item) => item.lokasjon === selectedFilters
      );
      setFilteredItems(tempItems);
    } else {
      setFilteredItems([...content]);
    }
  };
  console.log(filters);

  return (
    <div className="flex flex-col justify-center gap-4 max-w-[1600px]">
      <div className="flex flex-col gap-2 pb-2">
        <div className="border-b-2 pb-1">
          <b>Velg by :</b>
        </div>
        {filterItems ? (
          <FormControl className="flex flex-row gap-8 ">
            <RadioGroup
              value={selectedFilters}
              onChange={handleFilterChange}>
              <FormControlLabel
                value=""
                control={<Radio />}
                label="Alle byer"
                aria-label="Velg alle byene"
              />
              <div>
                {filters.map((location, idx) => (
                  <FormControlLabel
                    key={`filters-${idx}`}
                    value={location}
                    control={<Radio />}
                    label={location}
                    aria-label="Velg en av byene som er tilgjengelig."
                  />
                ))}
              </div>
            </RadioGroup>
          </FormControl>
        ) : (
          <b>Ingen ansatte funnet</b>
        )}
      </div>

      <div className="border-b-2 pb-1">
        {filteredItems && selectedFilters !== "" ? (
          <b>{`${filteredItems.length} personer i ${selectedFilters}`}</b>
        ) : (
          <b>{`${filteredItems.length} personer fordelt over ${filters.length} byer.`}</b>
        )}
      </div>
      {filteredItems ? (
        <div className="grid grid-cols-1 w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => (
            <div
              key={`items-${idx}`}
              className="flex flex-col justify-top p-2 gap-2 rounded-md shadow-md">
              <div className="flex h-72 rounded-sm overflow-hidden">
                {item.image ? (
                  <Image
                    width={500}
                    height={500}
                    className="w-full h-full object-center object-cover"
                    alt={`Profilbilde ${item.navn}` || "profilbilder"}
                    src={item.image || ""}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex flex-col justify-center text-xs">
                    <b className="text-center min-w-[350px]">
                      Bilde mangler mangler av:
                    </b>
                    <p className="text-center">{item.navn}</p>
                  </div>
                )}
              </div>
              <div className="flex flex-col w-full gap-1">
                <div className="border-b-4 border-jobloop-primary-green mb-1 w-full">
                  <h3 className="text-xl">{item.navn}</h3>
                </div>
                <div className="pb-1">
                  <b>Avdeling</b>
                  <p>{item.lokasjon}</p>
                </div>
                <div className="pb-1">
                  <b>E-post</b>
                  <p>{item.mail}</p>
                </div>
                <div className="pb-1">
                  <b>Telefon</b>
                  <p>{item.tlf_nummer}</p>
                </div>

                <p>Om:{item.om}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <b>Ingen ansatte funnet</b>
      )}
    </div>
  );
}
