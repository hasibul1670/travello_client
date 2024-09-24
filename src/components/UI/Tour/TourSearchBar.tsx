import {Button} from "@/components/SharedComponents/Button";
import DatepickerMuI from "@/components/SharedComponents/DatePicker";
import dynamic from "next/dynamic";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {FaSearchMinus} from "react-icons/fa";
import SearchCountryTour from "./SearchCountryTour";

const options: any[] = [
  {
    city: "Dhaka",
    country: "Bangladesh",
    tourCategory: "Sightseeing",
  },
  {
    city: "Tokyo",
    country: "Japan",
    tourCategory: "Cultural",
  },
  {
    city: "Tokyo",
    country: "Japan",
    tourCategory: "Sightseeing",
  },
  {
    city: "Tokyo",
    country: "Japan",
    tourCategory: "Archaeological",
  },
  {
    city: "Dhaka",
    country: "Bangladesh",
    tourCategory: "Historical",
  },
  {
    city: "Dhaka",
    country: "Bangladesh",
    tourCategory: "Urban Exploration",
  },
  {
    city: "Cairo",
    country: "Egypt",
    tourCategory: "Archaeological",
  },
  {
    city: "Cairo",
    country: "Egypt",
    tourCategory: "Coastal",
  },
  {
    city: "Cairo",
    country: "Egypt",
    tourCategory: "Historical",
  },
  {
    city: "Istanbul",
    country: "Turkey",
    tourCategory: "Adventure",
  },
  {
    city: "Istanbul",
    country: "Turkey",
    tourCategory: "Cultural",
  },
  {
    city: "Istanbul",
    country: "Turkey",
    tourCategory: "Beach",
  },
];

const TourSearchBar = () => {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const [searchText, setSearchText] = useState<string>("");
  const [country, setCountry] = useState(options[0].country);
  const [city, setCity] = useState(options[0].city);
  const [tourCategory, setTourCategory] = useState(options[0].tourCategory);
  const [searchResult, setSearchResult] = useState(options);

  const containerRef = useRef<HTMLDivElement>(null);
  const searchOptions = (searchText: string) => {
    const lowercasedSearchText = searchText.toLowerCase();
    return options?.filter(
      (option) =>
        option.city.toLowerCase().includes(lowercasedSearchText) ||
        option.country.toLowerCase().includes(lowercasedSearchText) ||
        option.tourCategory.toLowerCase().includes(lowercasedSearchText),
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

  const handleSearchText = (text: string) => {
    setSearchText(text);
    setSearchResult(searchOptions(text));
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="flex gap-2 z-20 relative items-center" ref={containerRef}>
        <div className="w-1/4">
          <SearchCountryTour
            label="country"
            searchText={searchText}
            handleSearchText={handleSearchText}
            selectedTab={selectedTab}
            onSelect={handleSelect}
            searchResult={searchResult}
            setTextLabel={setCountry}
            textLabel={country}
            setSelectedTab={setSelectedTab}
          />
        </div>

        <div className="w-1/4">
          <SearchCountryTour
            label="city"
            searchText={searchText}
            handleSearchText={handleSearchText}
            selectedTab={selectedTab}
            onSelect={handleSelect}
            searchResult={searchResult}
            setTextLabel={setCity}
            textLabel={city}
            setSelectedTab={setSelectedTab}
          />
        </div>
        <div className="w-1/4">
          <SearchCountryTour
            label="tourCategory"
            searchText={searchText}
            handleSearchText={handleSearchText}
            selectedTab={selectedTab}
            onSelect={handleSelect}
            searchResult={searchResult}
            setTextLabel={setTourCategory}
            textLabel={tourCategory}
            setSelectedTab={setSelectedTab}
          />
        </div>

        <div className="w-1/4">
          <DatepickerMuI dateLabel="When ? " />
        </div>
      </div>
      <div className="z-10 text-center relative">
        <Link href="/tour">
          <Button className="text-xl text-white font-bold bg-red-900 py-4 top-[1rem] cursor-pointer hover:bg-blue-950  rounded-full absolute  transform -translate-x-1/2 -translate-y-1/2">
            <p className="flex gap-1 justify-center items-center">
              <FaSearchMinus /> Search
            </p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(TourSearchBar), {ssr: false});
