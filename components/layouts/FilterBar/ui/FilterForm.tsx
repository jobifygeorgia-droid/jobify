import { LocationOutlined } from "@/components/ui/icons";
import { DatePicker, TextField } from "@/components/layouts/Form";

const FilterForm: React.FC = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-6 pl-1">
      <TextField label="მინიმუმი" labelPosition="out" />
      <TextField label="მაქსიმუმი" labelPosition="out" />
      <TextField
        label="მდებარეობა"
        labelPosition="out"
        adornment={<LocationOutlined className="fill-blue!" />}
      />
      <DatePicker
        disablePortal={true}
        placement="top-start"
        label="გამოქვეყნების თარიღი"
      />
    </div>
  );
};

export default FilterForm;
