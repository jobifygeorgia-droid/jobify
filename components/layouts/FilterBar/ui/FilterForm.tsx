import { Location } from "@/components/ui/icons";
import { DatePicker, TextField } from "@/components/layouts/Form";

const FilterForm: React.FC = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-6 pl-1">
      <TextField label="მინიმუმი" labelPosition="out" />
      <TextField label="მაქსიმუმი" labelPosition="out" />
      <TextField
        label="მდებარეობა"
        labelPosition="out"
        containerClassName="col-span-2 tablet:col-span-1"
        adornment={<Location className="text-light-grey-dark" />}
      />
      <DatePicker
        disablePortal={true}
        placement="top-start"
        className="col-span-2 tablet:col-span-1"
        label="გამოქვეყნების თარიღი"
      />
    </div>
  );
};

export default FilterForm;
