"use client";

import FormControlLabel from "@mui/material/FormControlLabel";
import { IOSSwitch } from "./ui/customSwitch";
import Label from "./ui/Label";

type SwitchT = {
  label?: string;
  value: boolean;
  onChange?: (v: boolean) => void;
};

const Switch: React.FC<SwitchT> = (props) => {
  const { label, value, onChange = () => {} } = props;

  return (
    <div>
      <FormControlLabel
        control={
          <IOSSwitch
            sx={{ m: 1 }}
            value={value}
            onChange={(e) => onChange(!!e.target.value)}
          />
        }
        label={<Label labelPosition="out" label={label} />}
      />
    </div>
  );
};

export default Switch;
