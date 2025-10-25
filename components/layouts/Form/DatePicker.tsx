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
    className = "",
    disablePortal = false,
    placement = "bottom-start",
  } = props;

  return (
    <div
      className={classnames(className, "flex flex-col gap-2")}
      id="date-picker--wrapper"
    >
      <Label id="12" label={props.label} />

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker"]} sx={RootStyles}>
          <MuiDatePicker
            label="Basic date picker"
            value={props.value ? dayjs(props.value) : null}
            onChange={(v) => props?.onChange?.(v?.toString() || "")}
            slotProps={{
              popper: {
                placement,
                disablePortal,
                sx: PopperStyles,
              },
            }}
          />
        </DemoContainer>
      </LocalizationProvider>

      <div className="order-3">
        {props.message && <ErrorMessage message={props.message} />}
      </div>
    </div>
  );
};

export default DatePicker;
