import MuiRadio from "@mui/material/Radio";
import { RadioT } from "@/interface/ui/forms-ui";

type RadioItemT = {
  size: RadioT["size"];
  name: RadioT["name"];
  item: RadioT["data"][number];
  selectedValue: string | number | undefined;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioItem: React.FC<RadioItemT> = (props) => {
  const { size, name, item, selectedValue, handleChange } = props;

  return (
    <div className="text-base-sm flex items-center gap-2">
      <MuiRadio
        size={size}
        name={name}
        value={item.value}
        onChange={handleChange}
        id={item?.id || item.value.toString()}
        checked={item.value.toString() === selectedValue}
        sx={{
          padding: 0,
          "&.MuiButtonBase-root.MuiRadio-root": {
            color: "var(--color-bc)",
          },
          "&.MuiButtonBase-root.MuiRadio-root.Mui-checked": {
            color: "var(--color-green)",
          },
        }}
      />
      <label
        className="cursor-pointer"
        htmlFor={item?.id || item.value.toString()}
      >
        {item.label}
      </label>
    </div>
  );
};

export default RadioItem;
