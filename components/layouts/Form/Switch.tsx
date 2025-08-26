"use client";

import FormControlLabel from "@mui/material/FormControlLabel";
import { IOSSwitch } from "./ui/customSwitch";
import Label from "./ui/Label";

type SwitchT = {};

const Switch: React.FC<SwitchT> = () => {
  return (
    <div>
      <FormControlLabel
        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
        label={<Label labelPosition="out" label="მიმდინარე სამსახური" />}
      />
    </div>
  );
};

export default Switch;
