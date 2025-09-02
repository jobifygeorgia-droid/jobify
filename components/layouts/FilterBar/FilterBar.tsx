import { IconButton } from "@/components/ui";
import { Bag, Loop, Location } from "@/components/ui/icons";
import { TextField, Select } from "@/components/layouts/Form";

import ExpandedFilter from "./ExpandedFilter";
import ExpandFilterButton from "./ui/ExpandFilterButton";
import FilterBarInputContainer from "./ui/FilterBarInputContainer";

const workTypes = [
  { value: "remote", label: "დისტანციური" },
  { value: "on-site", label: "ადგილზე" },
  { value: "hybrid", label: "ჰიბრიდული" },
];

const FilterBar: React.FC = () => {
  return (
    <>
      <div className="w-full max-w-[880px] mx-auto flex items-center border-3 border-blue rounded-full px-4 py-3 gap-4 mt-4">
        <div className="w-full flex items-center">
          <FilterBarInputContainer>
            <Loop className="fill-blue" />
            <TextField
              label="ძებნა"
              variant="outlined"
              fieldWrapperClassName="border-none"
            />
          </FilterBarInputContainer>

          <FilterBarInputContainer>
            <Select
              instanceId="filter-bar-work-type"
              options={workTypes}
              variant="outlined"
              placeholder="სამუშაოს ტიპი"
              adornment={<Bag className="fill-blue" />}
            />
          </FilterBarInputContainer>

          <FilterBarInputContainer>
            <Select
              instanceId="filter-bar-location"
              options={workTypes}
              variant="outlined"
              placeholder="მდებარეობა"
              adornment={<Location className="fill-none stroke-blue" />}
            />
          </FilterBarInputContainer>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <ExpandFilterButton />

          <IconButton className="bg-blue!">
            <Loop className="fill-white" />
          </IconButton>
        </div>
      </div>

      <ExpandedFilter />
    </>
  );
};

export default FilterBar;
