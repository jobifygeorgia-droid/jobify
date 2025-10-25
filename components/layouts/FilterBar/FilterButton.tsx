"use client";

import classnames from "classnames";
import { useFilterContext } from "@/providers/FilterProvider";

type FilterButtonT = {
  children: React.ReactNode;
  className?: string;
};

const FilterButton: React.FC<FilterButtonT> = (props) => {
  const { onOpenFilter } = useFilterContext();

  return (
    <button
      type="button"
      onClick={onOpenFilter}
      className={classnames(
        props.className || "",
        "cursor-pointer flex items-center justify-center leading-0"
      )}
    >
      {props.children}
    </button>
  );
};

export default FilterButton;
