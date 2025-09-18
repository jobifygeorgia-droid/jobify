"use client";

import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { ErrorMessage, Label } from ".";
import { MuiDatePicker, PopperStyles, RootStyles } from "./ui/datePicker";

type DatePickerT = {
  disablePortal?: boolean;
  placement?: "top-start" | "bottom-end";
  label?: string;
  message?: string;
  value?: string;
  onChange?: (v: string) => void;
};

const DatePicker: React.FC<DatePickerT> = (props) => {
  const { disablePortal = false, placement = "bottom-start", message } = props;

  return (
    <div className="flex flex-col gap-2" id="date-picker--wrapper">
      <Label id="12" label={props.label} labelPosition="out" />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]} sx={RootStyles}>
          <MuiDatePicker
            label="Basic date picker"
            value={props.value ? dayjs(props.value) : null}
            onChange={(v) => props?.onChange?.(v?.toString() || "")}
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

      <div className="order-3">
        {message && <ErrorMessage message={message} />}
      </div>
    </div>
  );
};

export default DatePicker;
