import { Controller } from "react-hook-form";

import { Button } from "@/components/ui";
import { Checkbox } from "@/components/layouts/Form";
import ExpandedFilterSectionTitle from "./ExpandedFilterSectionTitle";
import { useFilterContext } from "@/components/layouts/FilterBar/FilterProvider";

const FilterByCategory: React.FC = () => {
  const {
    control,
    categoriesRef,
    categoriesLimit,
    toggleCategories,
    expandCategories,
    workCategoryOptions,
  } = useFilterContext();

  const onChange = (
    newValue: string,
    existingValues: Array<string>,
    cb: (value: Array<string>) => void
  ) => {
    const candidateValue = existingValues.includes(newValue)
      ? existingValues.filter((v) => v !== newValue)
      : [...existingValues, newValue];

    cb(candidateValue);
  };

  return (
    <div className="flex flex-col" ref={categoriesRef}>
      <ExpandedFilterSectionTitle title="აირჩიე შენი სფერო" />

      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-x-12 gap-y-5 mt-8 mb-3">
        {workCategoryOptions.slice(0, categoriesLimit).map((option) => (
          <Controller
            control={control}
            name="categories"
            key={option.value}
            render={({ field }) => (
              <Checkbox
                name={option.value}
                id={option.value}
                checked={field.value.includes(option.value)}
                onCheck={() =>
                  onChange(option.value, field.value, field.onChange)
                }
              >
                {option.label}
              </Checkbox>
            )}
          />
        ))}
      </div>

      <Button
        type="button"
        buttonType="text"
        className="ml-auto text-blue! decoration-transparent"
        onClick={toggleCategories}
      >
        <span>{expandCategories ? "დაკეცვა" : "სრულად ნახვა"}</span>
      </Button>
    </div>
  );
};

export default FilterByCategory;
