import MuiTooltip, {
  TooltipProps,
  tooltipClasses,
} from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

export const Tooltip = styled(({ className, ...props }: TooltipProps) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },

  [`& .${tooltipClasses.arrow}`]: {
    // color: "#f5f5f9",
    left: "50% !important",
    transform: "translateX(-50%) !important",
  },
}));
