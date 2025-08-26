import { styled, SxProps } from "@mui/material/styles";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const RootStyles: SxProps = {
  order: 2,
  padding: 0,
  height: "44px",
  borderRadius: "6px",
  border: "1px solid var(--color-blue-light-hover)",
};

export const PopperStyles: SxProps = {
  // zIndex: 9999,

  "& .MuiPaper-root": {
    boxShadow: "none",
    border: "1px solid var(--color-blue-light-active)",
  },

  "& .MuiButtonBase-root.MuiPickersDay-root.Mui-selected": {
    backgroundColor: "var(--color-blue)",
  },

  "& .MuiButtonBase-root.MuiPickersDay-root.MuiPickersDay-today": {
    borderColor: "var(--color-blue)",
  },
};

export const MuiDatePicker = styled(DatePicker)(() => ({
  width: "100%",

  "& .MuiFormLabel-root": {
    display: "none",
  },

  "& .MuiPickersInputBase-root": {
    height: "100%",
    width: "100%",
    border: "unset",
    padding: "0px 4px",
    paddingRight: "0px",

    "& .MuiPickersSectionList-root": {
      LineHeight: 1,
      padding: 0,
    },

    "& .MuiInputAdornment-root": {
      marginLeft: 0,

      button: {
        margin: 0,
      },
    },

    "& .MuiPickersOutlinedInput-notchedOutline": {
      display: "none",
    },
  },
}));
