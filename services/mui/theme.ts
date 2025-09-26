import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640, // tablet
      md: 1056, // laptop
      lg: 1280, // small desktop
      xl: 1536, // large desktop
    },
  },
});
