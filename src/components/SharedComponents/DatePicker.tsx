import {useTheme} from "@mui/material";
import TextField from "@mui/material/TextField";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import {FC} from "react";

const DatepickerMuI: FC<any> = ({dateLabel}) => {
  const theme = useTheme();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={dateLabel}
        defaultValue={dayjs("2024-04-17")}
        slots={{
          textField: (props) => (
            <TextField
              {...props}
              sx={{
                "& .MuiInputBase-root": {
                  height: 70,
                },
              }}
            />
          ),
        }}
      />
    </LocalizationProvider>
  );
};

export default DatepickerMuI;
