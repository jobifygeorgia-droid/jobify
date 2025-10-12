import { styled } from "@mui/material/styles";
import MuiMenu from "@mui/material/Menu";

export const Menu = styled(MuiMenu)(() => ({
  ".MuiPaper-root": {
    borderRadius: "12px",
    boxShadow: "0px 6px 14px rgba(0,0,0,0.17)",
  },

  ".MuiList-root": {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    padding: "20px",
    borderRadius: "inherit",

    "@media (max-width: 640px)": {
      gap: "0px",
      padding: "10px 15px",
    },
  },

  ".MuiMenuItem-root": {
    padding: "0px !important",
    display: "flex",
    alignItems: "center",

    "&:hover": {
      background: "none",
    },
  },
}));
