import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, {SelectChangeEvent} from "@mui/material/Select";

export const FlightTypeSelect: React.FC<any> = ({setFlightType, flightType}) => {
  const handleChange = (event: SelectChangeEvent) => {
    setFlightType(event.target.value);
  };

  return (
    <FormControl className="text-black" sx={{minWidth: 120}} size="small">
      <Select id="flight-type-select" value={flightType} onChange={handleChange} displayEmpty>
        <MenuItem value="one-way">One Way</MenuItem>
        <MenuItem value="round-trip">Round Trip</MenuItem>
        <MenuItem value="multi-city">Multi-City</MenuItem>
      </Select>
    </FormControl>
  );
};
