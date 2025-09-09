import { useFilterContext } from "../FilterProvider";

import { Button } from "@/components/ui";
import { ArrowRight } from "@/components/ui/icons";
import { Checkbox } from "@/components/layouts/Form";
import ExpandedFilterSectionTitle from "./ExpandedFilterSectionTitle";

const FilterByCategory: React.FC = () => {
  const {
    workCategoryOptions,
    categoriesRef,
    categoriesLimit,
    toggleCategories,
    expandCategories,
  } = useFilterContext();

  return (
    <div className="flex flex-col" ref={categoriesRef}>
      <ExpandedFilterSectionTitle title="აირჩიე კატეგორია" />

      <div className="grid grid-cols-3 gap-x-12 gap-y-5 mt-8 mb-3">
        {workCategoryOptions.slice(0, categoriesLimit).map((option) => (
          <Checkbox
            name=""
            id={option.value}
            key={option.value}
            isChecked={false}
          >
            {option.label}
          </Checkbox>
        ))}
      </div>

      <Button
        buttonType="text"
        className="ml-auto text-blue!"
        onClick={toggleCategories}
      >
        <span>{expandCategories ? "დაკეცვა" : "ყველას ნახვა"}</span>
        <span className="flex items-center">
          <ArrowRight className="text-blue" size={20} />
        </span>
      </Button>
    </div>
  );
};

export default FilterByCategory;
