"use client";
import {Container} from "@/components/SharedComponents/Container";
import TourFilter from "@/components/UI/Tour/TourFilter/TourFilter";
import TourSearchBar from "@/components/UI/Tour/TourSearchBar";
import TourSearchList from "@/components/UI/Tour/TourSearchList/TourSearchList";
import dynamic from "next/dynamic";

const Tour = () => {
  return (
    <Container className="py-[20vh] px-[8rem] hover:bg-gray-200  transition-all ease-in-out duration-700">
      <p className="shadow-lg rounded-lg bg-white px-2 py-2">
        <TourSearchBar />
      </p>
      <p className="bg-white">
        <TourFilter />
      </p>
      <p className=" ">
        <TourSearchList />
      </p>
    </Container>
  );
};

export default dynamic(() => Promise.resolve(Tour), {ssr: false});
