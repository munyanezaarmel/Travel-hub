import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";interface CountryData {
  name: {
    common: string;
  };
  currencies: {
    [currencyCode: string]: {
      name: string;
      symbol: string;
    };
  };
}

export default function CurrencyModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  const [countryOptions, setCountryOptions] = useState<CountryData[]>([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response: any) => {
        setCountryOptions(response.data);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);
  if (!countryOptions) return null;
  return (
    <div
      className="fixed inset-0 z-[130] flex h-full w-full items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={(e) => (e.target === e.currentTarget ? closeModal() : null)}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0, transition: { duration: 0.5 } }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
        className="relative z-50 flex h-[80vh] w-[80vw] rounded-lg bg-white p-5 md:h-[90vh]"
      >
        <div
          onClick={() => {
            closeModal();
          }}
          className="-md:right-12 absolute -top-12 right-0 z-50 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-gray-500 md:-top-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>
        {countryOptions.length > 0 && (
          <div className="">
            <p className="text-[#191919] text-[24px] font-bold">
              Select your Language
            </p>
            <div className="grid grid-cols-4 gap-4 max-h-[800px] overflow-y-auto no-scrollbar">
              {countryOptions.map((country, index) => (
                <div
                  key={index}
                  className=" text-[#191919]"
                >
                  <div className="">
                    {country.currencies &&
                      Object.keys(country.currencies).map(
                        (currencyCode: any) => (
                          <div
                            key={currencyCode}
                            className=" grid justify-between  hover:p-2 hover:bg-gray-100 hover:border-lg"
                          >
                            {country.currencies[currencyCode].name}
                            <div>{currencyCode}</div>
                          </div>
                        )
                      )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
