import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Slider,
} from "@mui/material";
import {useState} from "react";
import {FaUmbrellaBeach} from "react-icons/fa6";

const TourFilter = () => {
  const [sort, setSort] = useState("lowTOHigh");
  const [priceRang, setPriceRange] = useState(20000);

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };
  const handleChangePriceRange = (event: any) => {
    setPriceRange(event.target.value);
  };

  return (
    <div className="mt-[8vh] ">
      <div className=" rounded-md bg-gray-100 shadow-xl">
        <p className="text-base text-blue-700 font-bold flex mb-2">
          <FaUmbrellaBeach className="text-2xl mx-4" /> 1 Tour Available
        </p>
        <p className=" flex justify-between px-5">
          <p className="flex flex-col">
            <p className="font-semibold text-sm">Price Range - {priceRang.toFixed(2)}</p>
            <Box sx={{width: 300}}>
              <Slider
                onChange={handleChangePriceRange}
                defaultValue={20000}
                min={15000}
                max={150000}
                color="warning"
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Box>
          </p>
          <p className=" flex">
            <Box sx={{width: 250}}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label ">Sort By</InputLabel>
                <Select
                  sx={{height: 44}}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sort}
                  color="warning"
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="lowTOHigh">Price (Low to High)</MenuItem>
                  <MenuItem value="highToLow">Price (High to Low)</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </p>
        </p>
      </div>
    </div>
  );
};

export default TourFilter;
