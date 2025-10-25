"use client";

import FormControlLabel from "@mui/material/FormControlLabel";
import { IOSSwitch } from "./styles/customSwitch";
import Label from "./Label";
import { SwitchT } from "@/interface/ui/forms-ui";

const Switch: React.FC<SwitchT> = (props) => {
  const { type = "primary", label, value, onChange = () => {} } = props;

  return (
    <FormControlLabel
      sx={{ margin: "0px", display: "flex", alignItems: "center", gap: "10px" }}
      control={
        <IOSSwitch
          switchtype={type}
          value={value}
          sx={{ m: 1, margin: "0px" }}
          onChange={(e) => onChange(!!e.target.value)}
        />
      }
      label={label ? <Label label={label} /> : null}
    />
  );
};

export default Switch;
