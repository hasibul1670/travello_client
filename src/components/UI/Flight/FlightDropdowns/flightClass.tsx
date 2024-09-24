import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, {SelectChangeEvent} from "@mui/material/Select";

export default function SelectFlightClass() {
  const [flightClass, setFlightClass] = React.useState("economy"); 

  const handleChange = (event: SelectChangeEvent) => {
    setFlightClass(event.target.value);
  };

  return (
    <FormControl className="text-black" sx={{minWidth: 120}} size="small">
      <Select
        id="flight-class-select"
        value={flightClass}
        onChange={handleChange}
        displayEmpty 
      >
        <MenuItem value="economy">Economy</MenuItem>
        <MenuItem value="business">Business</MenuItem>
        <MenuItem value="first-class">First Class</MenuItem>
        <MenuItem value="premium-economy">Premium Economy</MenuItem>
      </Select>
    </FormControl>
  );
}
