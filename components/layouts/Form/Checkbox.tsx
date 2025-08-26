import MuiCheckbox from "@mui/material/Checkbox";

type CheckboxT = {
  id?: string;
  name?: string;
  isChecked: boolean;
  children?: React.ReactNode;
  size?: "small" | "medium" | "large";
};

const Checkbox: React.FC<CheckboxT> = (props) => {
  const { children, isChecked, id, name, size = "medium" } = props;

  return (
    <div className="flex items-start gap-2 cursor-pointer">
      <MuiCheckbox
        id={id}
        name={name}
        size={size}
        defaultChecked={isChecked}
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
