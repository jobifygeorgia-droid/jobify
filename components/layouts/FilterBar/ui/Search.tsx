"use client";

import { useFilterContext } from "@/components/layouts/FilterBar/FilterProvider";

import { FilterBarInputContainer } from "./";
import { TextField } from "@/components/layouts/Form";
import { Search as Icon } from "@/components/ui/icons";

const Search: React.FC = () => {
  const { onSearchChange, currentSearch } = useFilterContext();

  return (
    <FilterBarInputContainer>
      <Icon className="text-blue laptop:text-xl!" />
      <TextField
        placeholder="ძებნა"
        variant="outlined"
        value={currentSearch}
        onChange={onSearchChange}
        containerClassName="w-full"
        fieldWrapperClassName="border-none text-sm laptop:text-base"
      />
    </FilterBarInputContainer>
  );
};

export default Search;
