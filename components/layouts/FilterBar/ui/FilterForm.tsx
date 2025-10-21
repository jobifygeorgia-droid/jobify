import { Controller } from "react-hook-form";

import {
  TextField,
  DatePicker,
  LocationField,
} from "@/components/layouts/Form";
import { useFilterContext } from "@/components/layouts/FilterBar/FilterProvider";

const FilterForm: React.FC = () => {
  const { control, onChangeDate } = useFilterContext();

  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-6 pl-1">
      <Controller
        control={control}
        name="salary_min"
        render={({ field }) => (
          <TextField
            {...field}
            inputType="number"
            labelPosition="out"
            label="მინ. ანაზღაურება"
          />
        )}
      />

      <Controller
        control={control}
        name="published_after"
        render={({ field }) => (
          <DatePicker
            value={field.value}
            disablePortal={true}
            placement="top-start"
            label="გამოქვეყნების თარიღი"
            className="col-span-2 tablet:col-span-1"
            onChange={(date) => onChangeDate(date, field.onChange)}
          />
        )}
      />

      <Controller
        control={control}
        name="location"
        render={({ field }) => (
          <LocationField
            value={field.value}
            onChange={(loc) => field.onChange(loc.location_name)}
            containerClassName="col-span-2"
          />
        )}
      />
    </div>
  );
};

export default FilterForm;
