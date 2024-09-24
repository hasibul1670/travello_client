import { Box, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import {MobileDatePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import {FC} from "react";

const DatePickerUmrah: FC<any> = ({dateLabel}) => {
 const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
      className="bg-palette.background.paper text-center text-primary"
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker
          label={dateLabel}
          defaultValue={dayjs("2024-04-17")}
          slots={{
            textField: (props) => (
              <TextField
                {...props}
                sx={{
                  "& .MuiInputBase-root": {
                    height: 60,
                    width: 550,
                  },
                }}
              />
            ),
          }}
        />
      </LocalizationProvider>
    </Box>
  );
};

export default DatePickerUmrah;
