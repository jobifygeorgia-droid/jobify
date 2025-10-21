"use client";

import { workTypeOptions } from "@/lib/static-data";
import { useFilterContext } from "./FilterProvider";

import {
  Bag,
  Filter,
  Location,
  Search as SearchIcon,
} from "@/components/ui/icons";
import FilterButton from "./FilterButton";
import ExpandedFilter from "./ExpandedFilter";
import { IconButton } from "@/components/ui";
import { Select } from "@/components/layouts/Form";
import { FilterBarInputContainer, Search } from "./ui";

const FilterBar: React.FC = () => {
  const { onFilter } = useFilterContext();

  return (
    <>
      <div className="w-full max-w-[650px] laptop:max-w-[880px] mx-auto flex items-center border-2 laptop:border-3 border-blue rounded-full px-[2px] py-0 tablet:px-2 laptop:px-3  tablet:py-[5px] laptop:py-2 gap-4 mt-4 bg-white">
        <div className="w-full flex items-center pl-1 laptop:pl-2">
          <Search />

          <FilterBarInputContainer className="hidden tablet:flex">
            <Select
              values={[]}
              onChange={() => {}}
              options={workTypeOptions}
              variant="outlined"
              id="filter-work-type"
              placeholder="სამუშაოს ტიპი"
              instanceId="filter-bar-work-type"
              containerClassName="text-sm laptop:text-base border-none"
              adornment={<Bag className="text-blue laptop:text-xl!" />}
            />
          </FilterBarInputContainer>

          <FilterBarInputContainer className="hidden tablet:flex">
            <Select
              values={[]}
              onChange={() => {}}
              options={workTypeOptions}
              variant="outlined"
              placeholder="მდებარეობა"
              id="filter-select-location"
              instanceId="filter-bar-location"
              containerClassName="text-sm laptop:text-base border-none"
              adornment={
                <Location className="text-blue text-lg! laptop:text-xl!" />
              }
            />
            {/* <LocationField value="" onChange={() => {}} /> */}
          </FilterBarInputContainer>
        </div>

        <div className="flex items-center gap-4 ml-auto">
          <FilterButton className="hidden laptop:flex">
            <span className="bg-blue-light rounded-full flex items-center justify-center size-9">
              <Filter className="text-orange" />
            </span>
          </FilterButton>

          <IconButton
            className="bg-blue! size-9! laptop:size-12! relative"
            onClick={onFilter}
          >
            <SearchIcon className="text-white" />
          </IconButton>
        </div>
      </div>

      <ExpandedFilter />
    </>
  );
};

export default FilterBar;
