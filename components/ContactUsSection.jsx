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
    <section className="w-screen py-12">
      <div className="flex flex-col justify-center gap-12 max-w-screen-2xl mx-auto px-4">
        <div className="flex flex-col gap-2 pb-2">
          <div className="border-b-2 pb-1">
            <b>Velg sted :</b>
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
                className="group flex flex-row h-56 w-full justify-top p-2 gap-3 rounded-xl hover:bg-jobloop-primary-green/5 border border-jobloop-primary-green/0 hover:border-jobloop-primary-green transition-all duration-300"
                title={`Dette er ${item.navn}`}>
                <figure className="flex h-full w-1/3 overflow-hidden rounded-md">
                  {item.image ? (
                    <Image
                      width={500}
                      height={500}
                      className="w-full h-full object-cover object-center"
                      alt={`Profilbilde ${item.navn}` || "profilbilder"}
                      src={item.image || ""}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex flex-col justify-center text-xs">
                      <p className="text-center">
                        <b>
                          Bilde mangler av: <br />
                        </b>{" "}
                        {item.navn}
                      </p>
                    </div>
                  )}
                </figure>
                <address className="flex flex-col w-2/3">
                  <div className="pb-1 w-full">
                    <h3 className="text-xl">{item.navn}</h3>
                    <div className="h-[3px] w-0 transition-all duration-500 group-hover:w-full shadow-inner rounded-full group-hover:shadow-jobloop-primary-green"></div>
                  </div>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <b>Avdeling</b>
                      <p>{item.lokasjon}</p>
                    </li>
                    <li>
                      <b>E-post</b>
                      {item && item.mail ? (
                        <p>{item.mail}</p>
                      ) : (
                        <p className="text-kv-black/60 text-sm">
                          Ingen e-post, beklager.
                        </p>
                      )}
                    </li>
                    <li>
                      <b>Mobil</b>
                      {item && item.tlf_nummer ? (
                        <p>{item.tlf_nummer}</p>
                      ) : (
                        <p className="text-kv-black/60 text-sm">
                          Ingen mobilnummer, beklager.
                        </p>
                      )}
                    </li>
                  </ul>
                  {/* <p>Om:{item.om}</p> */}
                </address>
              </div>
            ))}
          </div>
        ) : (
          <b>Ingen ansatte funnet</b>
        )}
      </div>
    </section>
  );
}
