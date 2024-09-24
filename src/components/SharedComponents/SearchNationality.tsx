import React from "react";
import {FaSearch} from "react-icons/fa";

const SearchNationality: React.FC<any> = ({
  label,
  searchResult,
  selectedTab,
  onSelect,
  handleSearchText,
  textLabel,
  setTextLabel,
  setSelectedTab,
}) => {
  const handleClickSearchResult = (value: any) => {
    setTextLabel(value);
    setSelectedTab("");
  };
  return (
    <div className=" ">
      <div
        className={`cursor-pointer h-[4.5rem] p-2 rounded-md relative border-2  ${
          selectedTab === label ? "bg-blue-200" : "bg-white text-black"
        }`}
        onClick={() => onSelect(label)}
      >
        <p className="text-sm capitalize">{label}</p>
        <p className="font-semibold text-sm">{textLabel?.country}</p>
      </div>

      {selectedTab === label && (
        <div className="absolute ">
          <div className=" bg-white  flex items-center border-b">
            <FaSearch className="text-[2rem] cursor-pointer rounded-l-lg text-blue-900 p-1" />
            <input
              type="text"
              id="search"
              onChange={(e) => handleSearchText(e.target.value)}
              className=" h-12 focus:outline-none focus:border-none text-black text-sm rounded-l-lg block p-2.5"
              placeholder="Type City,Country Name "
            />
          </div>

          {searchResult.length > 0 && (
            <ul className="bg-white  border  shadow-lg z-10">
              {searchResult?.map((option: any, index: number) => (
                <li
                  onClick={() => handleClickSearchResult(option)}
                  key={index}
                  className="border-b p-2 text-sm cursor-pointer hover:bg-gray-200"
                >
                  {option.country}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchNationality;
