"use client";

import { createContext, useContext, useState, useRef } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import {
  workTypeOptions,
  experienceOptions,
  workSectorOptions,
  workCategoryOptions,
  OptionT,
} from "./data";

type FilterProviderT = {
  children: React.ReactNode;
};

type FilterContextType = {
  onCloseFilter: () => void;
  toggleCategories: () => void;
  categoriesLimit: number;
  isFilterExpanded: boolean;
  expandCategories: boolean;
  categoriesRef: React.RefObject<HTMLDivElement | null>;
  workTypeOptions: Array<OptionT>;
  workSectorOptions: Array<OptionT>;
  experienceOptions: Array<OptionT>;
  workCategoryOptions: Array<OptionT>;
};

const FilterContext = createContext<FilterContextType>({
  onCloseFilter: () => {},
  toggleCategories: () => {},
  categoriesLimit: 0,
  isFilterExpanded: false,
  expandCategories: false,
  categoriesRef: { current: null },
  workTypeOptions: [],
  workSectorOptions: [],
  experienceOptions: [],
  workCategoryOptions: [],
});

const FilterProvider: React.FC<FilterProviderT> = ({ children }) => {
  const categoriesRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const isFilterExpanded = params.get("filter") === "1";

  const categoriesDefaultLimit = 12;
  const categoriesCount = workCategoryOptions.length;
  const [expandCategories, setExpandCategories] = useState(false);

  const categoriesLimit = expandCategories
    ? categoriesCount
    : categoriesDefaultLimit;

  const toggleCategories = () => {
    setExpandCategories((prev) => !prev);
    if (categoriesRef.current && expandCategories)
      categoriesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onCloseFilter = () => {
    params.delete("filter");
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <FilterContext.Provider
      value={{
        isFilterExpanded,
        onCloseFilter,
        toggleCategories,
        categoriesLimit,
        categoriesRef,
        expandCategories,
        workTypeOptions,
        workCategoryOptions,
        workSectorOptions,
        experienceOptions,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;

export const useFilterContext = () => {
  const context = useContext(FilterContext);

  if (!context) throw new Error("please wrap filter within FilterProvider");

  return context;
};
