import { styled } from "@mui/material";
import Switch, { SwitchProps } from "@mui/material/Switch";

export const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,

  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",

    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "var(--color-blue-light)",

      "& + .MuiSwitch-track": {
        backgroundColor: "var(--color-green)",
        opacity: 1,
        border: 0,
      },

      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },

    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "var(--color-green-hover)",
      border: "6px solid var(--color-blue-light)",
    },

    "&.Mui-disabled .MuiSwitch-thumb": {
      color: theme.palette.grey[100],
    },

    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },

  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "var(--color-blue-light)",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));
