"use client";

import dayjs from "dayjs";
import classnames from "classnames";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DatePickerT } from "@/interface/ui/forms-ui";

import { ErrorMessage, Label } from ".";
import { MuiDatePicker, PopperStyles, RootStyles } from "./styles/datePicker";

const DatePicker: React.FC<DatePickerT> = (props) => {
  const {
    message,
    className = "",
    disablePortal = false,
    placement = "bottom-start",
  } = props;

  return (
    <div
      className={classnames(className, "flex flex-col gap-2")}
      id="date-picker--wrapper"
    >
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
