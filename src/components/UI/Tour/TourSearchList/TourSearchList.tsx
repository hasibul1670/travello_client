"use client";
import {SelectChangeEvent} from "@mui/material";
import {useState} from "react";
import TourCard from "../TourCard/TourCard";
import dynamic from "next/dynamic";

const demoTourDate = [
  {
    id: "1",
    title: "Thailand 4 Nights 5 Days Tour Package",
    image: "077b4abb-6c3f-4274-99f6-4140dc366d0c.webp",
    description:
      "The 5-day taste of Thailand tour will take you to the heart of a beautiful Asian country: Thailand. This tour is a perfect introduction to Asia, ideal for first timers and those who want to explore and experience as much as possible in 05 days. Discover the amazing",
    price: 35000,
  },
  {
    id: "2",
    title: "Thailand 5 Nights 6 Days Tour Package",
    image: "3dd87cf1-c96a-4621-954f-51de070ab9d6.webp",
    description:
      "The 5-day taste of Thailand tour will take you to the heart of a beautiful Asian country: Thailand. This tour is a perfect introduction to Asia, ideal for first timers and those who want to explore and experience as much as possible in 05 days. Discover the amazing",
    price: 45000,
  },
];
const TourSearchList = () => {

  return (
    <div className="mt-[2vh] ">
      <div className="">
        {demoTourDate.map((tourData) => (
          <TourCard tourData={tourData} />
        ))}
      </div>
    </div>
  );
};


export default dynamic(() => Promise.resolve(TourSearchList), {ssr: false});
