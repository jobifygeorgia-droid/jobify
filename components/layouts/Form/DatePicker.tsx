"use client";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import Label from "./ui/Label";
import { MuiDatePicker, PopperStyles, RootStyles } from "./ui/datePicker";

type DatePickerT = {
  disablePortal?: boolean;
  placement?: "top-start" | "bottom-end";
};

const DatePicker: React.FC<DatePickerT> = (props) => {
  const { disablePortal = false, placement = "bottom-start" } = props;

  return (
    <div className="flex flex-col gap-2" id="date-picker--wrapper">
      <Label id="12" label="გამოქვეყნების თარიღი" labelPosition="out" />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]} sx={RootStyles}>
          <MuiDatePicker
            label="Basic date picker"
            slotProps={{
              popper: {
                sx: PopperStyles,
                disablePortal,
                placement,
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export default DatePicker;
