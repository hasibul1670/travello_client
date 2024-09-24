import {Button} from "@/components/SharedComponents/Button";
import DatepickerMuI from "@/components/SharedComponents/DatePicker";
import SearchableDropdown from "@/components/SharedComponents/SearchAbleDropdown";
import dynamic from "next/dynamic";
import {useEffect, useRef, useState} from "react";
import {FaSearchMinus} from "react-icons/fa";
import {HiSwitchHorizontal} from "react-icons/hi";
import FlightClass from "./FlightDropdowns/flightClass";
import FlightStopSelect from "./FlightDropdowns/flightStopSelect";
import {FlightTypeSelect} from "./FlightDropdowns/flightType";
import PassengerCountSelect from "./FlightDropdowns/passenger";
const options: any[] = [
  {label: "Dhaka, Bangladesh", airport: "Hazrat Shahjalal International Airport", code: "DAC"},
  {label: "Chittagong, Bangladesh", airport: "Shah Amanat International", code: "CGP"},
  {label: "Cox's Bazar, Bangladesh", airport: "Cox's Bazar", code: "CXB"},
  {label: "Sylhet, Bangladesh", airport: "Osmani International", code: "ZYL"},
];

const FLightSearchBar = () => {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const [formSearchText, setFormSearchText] = useState<string>("");
  const [toSearchText, setToSearchText] = useState<string>("");
  const [formAirport, setFormAirport] = useState(options[0]);
  const [toAirport, setToAirport] = useState(options[1]);
  const [formSearchResult, setFormSearchResult] = useState(options);
  const [toSearchResult, setToSearchResult] = useState(options);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSwitchAirport = () => {
    setFormAirport(toAirport);
    setToAirport(formAirport);
  };

  const searchOptions = (searchText: string) => {
    const lowercasedSearchText = searchText.toLowerCase();
    return options.filter(
      (option) =>
        option.label.toLowerCase().includes(lowercasedSearchText) ||
        option.airport.toLowerCase().includes(lowercasedSearchText) ||
        option.code.toLowerCase().includes(lowercasedSearchText),
    );
  };

  const handleSelect = (label: string) => {
    setSelectedTab(label);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setSelectedTab(null);
    }
  };

  const handleSearchForm = (text: string) => {
    setFormSearchText(text);
    setFormSearchResult(searchOptions(text));
  };

  const handleSearchTo = (text: string) => {
    setToSearchText(text);
    setToSearchResult(searchOptions(text));
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [flightType, setFlightType] = useState("one-way");

  return (
    <div>
      <div className="flex gap-1 mb-3">
        <FlightTypeSelect flightType={flightType} setFlightType={setFlightType} />
        <FlightStopSelect />
        <FlightClass />
        <PassengerCountSelect />
      </div>
      <div className="flex gap-2 items-center" ref={containerRef}>
        <div className={`${flightType === "round-trip" ? "w-1/4" : "w-1/3"}`}>
          <SearchableDropdown
            label="Form"
            searchText={formSearchText}
            setSearchText={handleSearchForm}
            selectedTab={selectedTab}
            onSelect={handleSelect}
            searchResult={formSearchResult}
            setTextLabel={setFormAirport}
            textLabel={formAirport}
            setSelectedTab={setSelectedTab}
          />
        </div>
        <div onClick={handleSwitchAirport} className="z-10 relative">
          <HiSwitchHorizontal className="text-3xl cursor-pointer  rounded-full border-2  text-red-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className={`${flightType === "round-trip" ? "w-1/4" : "w-1/3"}`}>
          <SearchableDropdown
            label="To"
            searchText={toSearchText}
            setSearchText={handleSearchTo}
            selectedTab={selectedTab}
            onSelect={handleSelect}
            searchResult={toSearchResult}
            setTextLabel={setToAirport}
            textLabel={toAirport}
            setSelectedTab={setSelectedTab}
          />
        </div>
        <div className={`${flightType === "round-trip" ? "w-1/4" : "w-1/3"}`}>
          <DatepickerMuI dateLabel="Journey Date" />
        </div>

        {flightType === "round-trip" && (
          <div className="w-1/4">
            <DatepickerMuI dateLabel="Return Date" />
          </div>
        )}
      </div>

      <div className="z-10 text-center  relative">
        <Button className="text-xl text-white font-bold bg-red-900 py-4 top-[3rem] cursor-pointer hover:bg-blue-950  rounded-full absolute  transform -translate-x-1/2 -translate-y-1/2">
          <p className="flex gap-1 justify-center items-center">
            <FaSearchMinus /> Search
          </p>
        </Button>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(FLightSearchBar), {ssr: false});
