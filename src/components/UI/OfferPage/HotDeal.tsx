"use client";
import {Box, useTheme} from "@mui/material";
import {useState} from "react";
import HotDealsComponent from "./HotDealsComponent";

const HotDeals = () => {
  const theme = useTheme();
  const [selectedOption, setSelectedOption] = useState("All");
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
      className="bg-palette.background.paper text-center text-primary"
    >
      <div className="h-auto lg:px-10 ">
        <div className="flex pt-10 justify-between flex-col sm:flex-row sm:items-center">
          <p className="text-xl font-bold text-center">Hot Deals </p>
          <div className="flex space-x-4  ">
            <button
              className={`py-2 px-4 rounded ${
                selectedOption === "All" ? "bg-blue-800 text-white" : "bg-white text-blue-500"
              }`}
              onClick={() => setSelectedOption("All")}
            >
              All
            </button>
            <button
              className={`py-2 px-4 rounded ${
                selectedOption === "Flight" ? "bg-blue-800 text-white" : "bg-white text-blue-500"
              }`}
              onClick={() => setSelectedOption("Flight")}
            >
              Flight
            </button>
            <button
              className={`py-2 px-4 rounded ${
                selectedOption === "Holiday" ? "bg-blue-800 text-white" : "bg-white text-blue-500"
              }`}
              onClick={() => setSelectedOption("Holiday")}
            >
              Holiday
            </button>
            <button
              className={`py-2 px-4 rounded ${
                selectedOption === "Visa" ? "bg-blue-800 text-white" : "bg-white text-blue-500"
              }`}
              onClick={() => setSelectedOption("Visa")}
            >
              Visa
            </button>
            <button
              className={`py-2 px-4 rounded ${
                selectedOption === "Hotel" ? "bg-blue-800 text-white" : "bg-white text-blue-500"
              }`}
              onClick={() => setSelectedOption("Hotel")}
            >
              Hotel
            </button>
          </div>
        </div>
        <div className="lg:pt-10">
          <HotDealsComponent selectedType={selectedOption} />
        </div>
      </div>
    </Box>
  );
};

export default HotDeals;
