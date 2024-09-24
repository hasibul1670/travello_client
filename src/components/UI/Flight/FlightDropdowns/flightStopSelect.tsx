import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, {SelectChangeEvent} from "@mui/material/Select";

export default function FlightStopSelect() {
  const [flightStop, setFlightStop] = React.useState("any-flight");

  const handleChange = (event: SelectChangeEvent) => {
    setFlightStop(event.target.value);
  };

  return (
    <FormControl className="text-black" sx={{minWidth: 120}} size="small">
      <Select id="flight-stop-select" value={flightStop} onChange={handleChange} displayEmpty>
        <MenuItem value="any-flight">Any Flight</MenuItem>
        <MenuItem value="non-stop">Non-Stop Flight</MenuItem>
      </Select>
    </FormControl>
  );
}
