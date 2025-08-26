import { Location } from "@/components/ui/icons";
import { DatePicker, TextField } from "@/components/layouts/Form";

type FilterFormT = {};

const FilterForm: React.FC<FilterFormT> = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-6 pl-1">
      <TextField label="მინიმუმი" labelPosition="out" />
      <TextField label="მაქსიმუმი" labelPosition="out" />
      <TextField
        label="მდებარეობა"
        labelPosition="out"
        adornment={<Location className="fill-none stroke-dark-grey" />}
      />
      <DatePicker disablePortal={true} placement="top-start" />
    </div>
  );
};

export default FilterForm;
