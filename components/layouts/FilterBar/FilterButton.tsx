"use client";

import classnames from "classnames";
import { useFilterContext } from "@/components/layouts/FilterBar/FilterProvider";

type FilterButtonT = {
  children: React.ReactNode;
  className?: string;
};

const FilterButton: React.FC<FilterButtonT> = (props) => {
  const { onOpenFilter } = useFilterContext();

  return (
    <button
      className={classnames(
        props.className || "",
        "cursor-pointer flex items-center justify-center leading-0"
      )}
      onClick={onOpenFilter}
    >
      {props.children}
    </button>
  );
};

export default FilterButton;
