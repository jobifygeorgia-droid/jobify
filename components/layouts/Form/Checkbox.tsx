"use client";

import MuiCheckbox from "@mui/material/Checkbox";

type CheckboxT = {
  id?: string;
  name?: string;
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
  checked?: boolean;
  onCheck?: () => void;
};

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
