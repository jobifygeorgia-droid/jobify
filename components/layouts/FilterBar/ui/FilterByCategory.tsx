import { Controller } from "react-hook-form";

import { useFilterContext } from "@/providers/FilterProvider";

import { Button } from "@/components/ui";
import { Checkbox } from "@/components/layouts/Form";
import { ExpandedFilterSectionTitle } from "./";

const FilterByCategory: React.FC = () => {
  const f = useFilterContext();

  return (
    <div className="flex flex-col" ref={f.categoriesRef}>
      <ExpandedFilterSectionTitle title="აირჩიე შენი სფერო" />

      <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-x-12 gap-y-5 mt-8 mb-3">
        {f.workCategoryOptions.slice(0, f.categoriesLimit).map((option) => (
          <Controller
            control={f.control}
            name="categories"
            key={option.value}
            render={({ field }) => (
              <Checkbox
                id={option.value.toString()}
                name={option.value.toString()}
                checked={field.value.includes(option.value.toString())}
                onCheck={() =>
                  f.onSelectCategory(option.value, field.value, field.onChange)
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
        onClick={f.toggleCategories}
        className="ml-auto text-blue! decoration-transparent"
      >
        <span>{f.expandCategories ? "დაკეცვა" : "სრულად ნახვა"}</span>
      </Button>
    </div>
  );
};

export default FilterByCategory;
