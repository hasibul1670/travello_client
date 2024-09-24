import {Button} from "@/components/SharedComponents/Button";
import DatepickerMuI from "@/components/SharedComponents/DatePicker";
import SearchCountryDropdown from "@/components/SharedComponents/SearchCountryDropdown";
import dynamic from "next/dynamic";
import {useEffect, useRef, useState} from "react";
import {FaSearchMinus} from "react-icons/fa";
import HotelPassenger from "./HotelComponents/hotelPassenger";

const options: any[] = [
  {label: "Dhaka, Bangladesh"},
  {label: "Bankok, Thailand"},
  {label: "Delli, India"},
  {label: "Sedney, Austlia"},
];

const HotelSearchBar = () => {
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

  return (
    <div>
      <div className="flex gap-2 items-center" ref={containerRef}>
        <div className="w-1/4">
          <SearchCountryDropdown
            label="Destination"
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

        <div className="w-1/4">
          <DatepickerMuI dateLabel="Entry Date" />
        </div>
        <div className="w-1/4">
          <DatepickerMuI dateLabel="Exit Date" />
        </div>
        <div className="">
          <HotelPassenger />
        </div>
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

export default dynamic(() => Promise.resolve(HotelSearchBar), {ssr: false});
