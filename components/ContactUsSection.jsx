"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

export function LocationCheck({ content }) {

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

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-4 pb-4 border-b border-jobloop-primary-green/20">
            <span className="text-lg font-semibold text-kv-black">Velg sted:</span>
            <FormControl>
              <RadioGroup
                value={selectedFilters}
                onChange={handleFilterChange}
                sx={{ 
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  gap: 2
                }}>
                <FormControlLabel
                  value=""
                  control={<Radio sx={{ 
                    color: 'var(--jobloop-primary-green)',
                    '&.Mui-checked': {
                      color: 'var(--jobloop-primary-orange)',
                    },
                  }} />}
                  label="Alle byer"
                  aria-label="Velg alle byene"
                  sx={{ color: 'var(--kv-black)' }}
                />
                {filters.map((location, idx) => (
                  <FormControlLabel
                    key={`filters-${idx}`}
                    value={location}
                    control={<Radio sx={{ 
                      color: 'var(--jobloop-primary-green)',
                      '&.Mui-checked': {
                        color: 'var(--jobloop-primary-orange)',
                      },
                    }} />}
                    label={location}
                    aria-label="Velg en av byene som er tilgjengelig."
                    sx={{ color: 'var(--kv-black)' }}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
          <div className="text-sm text-kv-black/70 pb-4">
            {filteredItems && selectedFilters !== "" ? (
              <span>{`${filteredItems.length} personer i ${selectedFilters}`}</span>
            ) : (
              <span>{`${filteredItems.length} personer fordelt over ${filters.length} byer.`}</span>
            )}
          </div>
        </div>
        
        {filteredItems ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            {filteredItems.map((item, idx) => (
              <div
                key={`items-${idx}`}
                className="group bg-kv-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-jobloop-primary-green/20 hover:border-jobloop-primary-green/70 flex flex-row h-64 sm:h-72 cursor-pointer"
                title={`Dette er ${item.navn}`}>
                
                <div className="relative w-40 sm:w-44 lg:w-48 h-full overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {item.image ? (
                    <Image
                      width={200}
                      height={300}
                      className="w-full h-full object-cover object-center  transition-transform duration-300"
                      alt={`Profilbilde ${item.navn}`}
                      src={item.image}
                    />
                  ) : (
                    <div className="w-full h-full bg-jobloop-primary-green/10 flex flex-col justify-center items-center text-center p-2">
                      <div className="w-12 h-12 bg-jobloop-primary-green/20 rounded-full flex items-center justify-center mb-1">
                        <span className="text-xl text-jobloop-primary-green">👤</span>
                      </div>
                      <p className="text-xs text-kv-black/60">
                        <b>Bilde mangler</b>
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="flex-1 p-3 sm:p-4 lg:p-6 flex flex-col justify-center">
                  <div className="space-y-2 sm:space-y-3 lg:space-y-4">
                    <div>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-kv-black leading-tight">
                        {item.navn}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-jobloop-primary-green font-medium">
                        {item.stilling}
                      </p>
                      <div className="h-0.5 sm:h-1 w-0 bg-jobloop-primary-orange transition-all duration-500 group-hover:w-full mt-1 sm:mt-2 lg:mt-3"></div>
                    </div>
                    
                    <div className="space-y-1 sm:space-y-2 lg:space-y-3 text-xs sm:text-sm lg:text-base">
                      <div>
                        <span className="font-semibold text-kv-black/80">Avdeling: </span>
                        <span className="text-kv-black/70">{item.lokasjon}</span>
                      </div>
                      
                      <div>
                        <span className="font-semibold text-kv-black/80">E-post: </span>
                        {item && item.mail ? (
                          <a 
                            href={`mailto:${item.mail}`}
                            className="text-jobloop-primary-green hover:text-jobloop-primary-orange transition-colors duration-200 break-all"
                          >
                            {item.mail}
                          </a>
                        ) : (
                          <span className="text-kv-black/50">Ikke tilgjengelig</span>
                        )}
                      </div>
                      
                      <div>
                        <span className="font-semibold text-kv-black/80">Mobil: </span>
                        {item && item.tlf_nummer ? (
                          <a 
                            href={`tel:${item.tlf_nummer}`}
                            className="text-jobloop-primary-green hover:text-jobloop-primary-orange transition-colors duration-200"
                          >
                            {item.tlf_nummer}
                          </a>
                        ) : (
                          <span className="text-kv-black/50">Ikke tilgjengelig</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-kv-black/60">Ingen ansatte funnet</p>
          </div>
        )}
      </div>
    </div>
  );
}
