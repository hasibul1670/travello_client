/* eslint-disable quotes */
"use client";
import {BusIcon, FlightIcon, HotelIcon, VisaIcon} from "../../constants/icons";

import {useRouter} from "next/navigation";
import React, {useEffect} from "react";
import { FaMosque, FaUmbrellaBeach } from "react-icons/fa";
import { GiPassport } from "react-icons/gi";
import { MdFlight } from "react-icons/md";
import { RiHotelBedFill } from "react-icons/ri";
import {useDispatch} from "react-redux";

interface Tab {
  id: number;
  name: string;
  icon: string;
  type: string;
}

interface NavbarTabSearchProps {
  tabs: Tab[];
  currentTab: string;
}

const NavbarTabSearch: React.FC<NavbarTabSearchProps> = ({tabs, currentTab}) => {
  const router: any = useRouter();
  const tabIcons: Record<string, JSX.Element> = {
    flights: <MdFlight />,
    hotels: <RiHotelBedFill />,
    tours: <FaUmbrellaBeach />,
    visa: <GiPassport />,
    umrah: <FaMosque />,
  };

  const handleTab = (tabname: string) => {
    if (tabname !== currentTab) {
      router.push("/");
    }
  };

  return (
    <div className="items-center flex justify-center relative ">
      <div
        className={`lg:w-96 w-64 lg:p-2 flex justify-center lg:mx-20 ${
          router.pathname !== "/" ? "text-white" : "text-black"
        }`}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`text-black lg:py-3 lg:px-5 px-2 h-20 capitalize ${
              tab.name === currentTab ? "font-semibold" : ""
            }`}
            onClick={() => {
              handleTab(tab.name);
              router.push("/");
            }}
          >
            <p className="text-2xl flex justify-center align-center">{tabIcons[tab.name]}</p>
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavbarTabSearch;
