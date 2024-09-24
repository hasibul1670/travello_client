import React from "react";

interface SearchResult {
  city?: string | any;
  country?: string | any;
  tourCategory?: string;
  visaCategory?: string;
}

interface Props {
  searchResult: SearchResult[];
  label: "city" | "country" | "tourCategory" | "visaCategory";
  handleClickSearchResult: (option: SearchResult) => void;
}

const uniqueOptions = (
  options: SearchResult[],
  label: "city" | "country" | "tourCategory" | "visaCategory",
) => {
  const seen = new Set<string>();
  return options.filter((option) => {
    const value =
      label === "country"
        ? option.country
        : label === "city"
          ? option.city
          : label === "tourCategory"
            ? option.tourCategory
            : label === "visaCategory"
              ? option.visaCategory
              : "";

    if (seen.has(value)) {
      return false;
    }
    seen.add(value);
    return true;
  });
};

const UniqueSearchResults: React.FC<Props> = ({searchResult, label, handleClickSearchResult}) => {
  const filteredResults = uniqueOptions(searchResult, label);

  return (
    <ul className="bg-white border shadow-lg z-10">
      {filteredResults.length > 0 &&
        filteredResults.map((option, index) => (
          <li
            onClick={() => handleClickSearchResult(option)}
            key={index}
            className="border-b p-2 text-sm cursor-pointer hover:bg-gray-200"
          >
            {label === "country"
              ? option.country
              : label === "city"
                ? option.city
                : label === "tourCategory"
                  ? option.tourCategory
                  : label === "visaCategory"
                    ? option.visaCategory
                    : ""}
          </li>
        ))}
    </ul>
  );
};

export default UniqueSearchResults;
