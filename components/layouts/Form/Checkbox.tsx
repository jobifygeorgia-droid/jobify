"use client";

import { CheckboxT } from "@/interface/ui/forms-ui";
import MuiCheckbox from "@mui/material/Checkbox";

const Checkbox: React.FC<CheckboxT> = (props) => {
  const { children, checked, onCheck, id, name, size = "medium" } = props;

  return (
    <div className="flex items-start gap-2 cursor-pointer text-[inherit]">
      <MuiCheckbox
        id={id}
        name={name}
        size={size}
        checked={checked}
        onChange={onCheck}
        sx={{
          "&.MuiButtonBase-root.MuiCheckbox-root": {
            color: "var(--color-bc)",
            padding: 0,
            borderRadius: "4px",
          },
          "&.MuiButtonBase-root.MuiCheckbox-root.Mui-checked": {
            color: "var(--color-green)",
            padding: 0,
          },
        }}
      />
      <label htmlFor={id} className="cursor-pointer">
        {children}
      </label>
    </div>
  );
};

export default Checkbox;
