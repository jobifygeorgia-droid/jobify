import { styled } from "@mui/material/styles";
import Slider from "@mui/material/Slider";

export const CustomRangeSlider = styled(Slider)(() => ({
  color: "var(--color-primary)",
  height: 63,
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "var(--color-blue-light-hover)",
    border: "2px solid var(--color-blue-light-active)",
    "&:hover": {
      boxShadow: "0 0 0 8px rgba(12, 91, 175,0.1)",
    },
  },
  "& .MuiSlider-track": {
    height: 8,
    borderRadius: "4px",
    backgroundColor: "var(--color-blue)",
  },
  "& .MuiSlider-rail": {
    height: 8,
    opacity: 0.3,
    backgroundColor: "var(--color-blue-light-active)",
  },
  "& .MuiSlider-valueLabel": {
    color: "var(--color-dark-grey-dark)",
    background: "#fff",
    fontWeight: "bold",
    borderRadius: "8px",
    boxShadow: "0px 2px 10px 2px rgba(0, 0, 0, 0.1)",
    padding: "8px 10px",
  },
}));
