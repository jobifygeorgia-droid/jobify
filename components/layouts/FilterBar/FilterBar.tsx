import { IconButton } from "@/components/ui";
import { TextField, Select } from "@/components/layouts/Form";

import ExpandedFilter from "./ExpandedFilter";
import FilterButton from "./FilterButton";
import FilterBarInputContainer from "./ui/FilterBarInputContainer";
import { Search, Bag, Location, Filter } from "@/components/ui/icons";

const workTypes = [
  { value: "remote", label: "დისტანციური" },
  { value: "on-site", label: "ადგილზე" },
  { value: "hybrid", label: "ჰიბრიდული" },
];

const FilterBar: React.FC = () => {
  return (
    <>
      <div className="w-full max-w-[650px] laptop:max-w-[880px] mx-auto flex items-center border-2 laptop:border-3 border-blue rounded-full px-[2px] py-0 tablet:px-2 laptop:px-3  tablet:py-[5px] laptop:py-2 gap-4 mt-4 bg-white">
        <div className="w-full flex items-center pl-1 laptop:pl-2">
          <FilterBarInputContainer>
            <Search className="text-blue laptop:text-xl!" />
            <TextField
              containerClassName="w-full"
              placeholder="ძებნა"
              variant="outlined"
              fieldWrapperClassName="border-none text-sm laptop:text-base"
            />
          </FilterBarInputContainer>

          <FilterBarInputContainer className="hidden tablet:flex">
            <Select
              options={workTypes}
              variant="outlined"
              placeholder="სამუშაოს ტიპი"
              instanceId="filter-bar-work-type"
              containerClassName="text-sm laptop:text-base border-none"
              adornment={<Bag className="text-blue laptop:text-xl!" />}
            />
          </FilterBarInputContainer>

          <FilterBarInputContainer className="hidden tablet:flex">
            <Select
              options={workTypes}
              variant="outlined"
              placeholder="მდებარეობა"
              instanceId="filter-bar-location"
              containerClassName="text-sm laptop:text-base border-none"
              adornment={
                <Location className="text-blue text-lg! laptop:text-xl!" />
              }
            />
          </FilterBarInputContainer>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <FilterButton className="hidden laptop:flex">
            <span className="bg-blue-light rounded-full flex items-center justify-center size-9">
              <Filter className="text-orange" />
            </span>
          </FilterButton>

          <IconButton className="bg-blue! size-9! laptop:size-12!">
            <Search className="text-white" />
          </IconButton>
        </div>
      </div>

      <ExpandedFilter />
    </>
  );
};

export default FilterBar;
