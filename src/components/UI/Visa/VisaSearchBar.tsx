import {Button} from "@/components/SharedComponents/Button";
import DatepickerMuI from "@/components/SharedComponents/DatePicker";
import dynamic from "next/dynamic";
import {useEffect, useRef, useState} from "react";
import {FaSearchMinus} from "react-icons/fa";
import SearchCountryTour from "../Tour/SearchCountryTour";
import SearchNationality from "@/components/SharedComponents/SearchNationality";

const options: any[] = [
  {country: "India", visaCategory: "Tourist Visa"},
  {country: "India", visaCategory: "Sticker Visa - eVisa"},
  {country: "Japan", visaCategory: "Sticker Visa - eVisa"},
  {country: "Japan", visaCategory: "Tourist Visa"},
  {country: "Germany", visaCategory: "Tourist Visa"},
  {country: "Germany", visaCategory: "Sticker Visa - eVisa"},
  {country: "Thailand", visaCategory: "Sticker Visa - eVisa"},
  {country: "Thailand", visaCategory: "Tourist Visa"},
  {country: "Turkey", visaCategory: "Tourist Visa"},
  {country: "Turkey", visaCategory: "Sticker Visa - eVisa"},
  {country: "Australia", visaCategory: "Tourist Visa"},
  {country: "Australia", visaCategory: "Sticker Visa - eVisa"},
  {country: "France", visaCategory: "Tourist Visa"},
  {country: "France", visaCategory: "Sticker Visa - eVisa"},
  {country: "Italy", visaCategory: "Tourist Visa"},
  {country: "Italy", visaCategory: "Sticker Visa - eVisa"},
  {country: "Spain", visaCategory: "Tourist Visa"},
  {country: "Spain", visaCategory: "Sticker Visa - eVisa"},
  {country: "Canada", visaCategory: "Tourist Visa"},
  {country: "Canada", visaCategory: "Sticker Visa - eVisa"},
];


const nationalities: any[] = [
  {country: "Bangladesh"},
  {country: "Japan"},
  {country: "Germany"},
  {country: "Thailand"},
  {country: "Turkey"},
  {country: "Australia"},
  {country: "France"},
  {country: "Italy"},
  {country: "Spain"},
  {country: "Canada"},
  {country: "United Kingdom"},
  {country: "United States"},
  {country: "Brazil"},
  {country: "Mexico"},
  {country: "South Africa"},
  {country: "Russia"},
  {country: "China"},
  {country: "South Korea"},
  {country: "Singapore"},
  {country: "Malaysia"},
  {country: "New Zealand"},
];



const VisaSearchBar = () => {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);
  const [searchText, setSearchText] = useState<string>("");
  const [country, setCountry] = useState(options[0].country);
  const [tourCategory, setTourCategory] = useState(options[0].visaCategory);
  const [nationality, setNationality] = useState(nationalities[0]);
  const [searchResult, setSearchResult] = useState(options);
  const [searchNationalityResult, setSearchNationalityResult] = useState(nationalities);

  const containerRef = useRef<HTMLDivElement>(null);
  const searchOptions = (searchText: string) => {
    const lowercasedSearchText = searchText.toLowerCase();
    return options?.filter(
      (option) =>
        option.country.toLowerCase().includes(lowercasedSearchText)
    );
  };
  const searchNationality = (searchText: string) => {
    const lowercasedSearchText = searchText.toLowerCase();
    return nationalities?.filter((option) =>
      option.country.toLowerCase().includes(lowercasedSearchText),
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
    setSearchNationalityResult(searchNationality(text));
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
        <div className="w-1/3">
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

        <div className="w-1/3">
          <SearchCountryTour
            label="visaCategory"
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

        <div className="w-1/3">
          <SearchNationality
            label="nationality"
            searchText={searchText}
            handleSearchText={handleSearchText}
            selectedTab={selectedTab}
            onSelect={handleSelect}
            searchResult={searchNationalityResult}
            setTextLabel={setNationality}
            textLabel={nationality}
            setSelectedTab={setSelectedTab}
          />
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

export default dynamic(() => Promise.resolve(VisaSearchBar), {ssr: false});
