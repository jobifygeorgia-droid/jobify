"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Control, useForm } from "react-hook-form";
import { createContext, useContext, useState, useRef, useEffect } from "react";

import {
  OptionT,
  workTypeOptions,
  workSectorOptions,
  experienceOptions,
  workCategoryOptions,
} from "@/lib/static-data";
import {
  FilterSchema,
  FilterSchemaT,
  filterInitialState,
} from "@/lib/schemas/FilterSchema";
import { useDevice, useSearchParamUtils } from "@/hooks/utils";
import { PATHS } from "@/lib/config";

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
  control: Control<FilterSchemaT> | undefined;
  onFilter: () => void;
};

const FilterContext = createContext<FilterContextType>({
  control: undefined,
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
  onFilter: () => {},
});

const FilterProvider: React.FC<FilterProviderT> = ({ children }) => {
  const categoriesRef = useRef<HTMLDivElement | null>(null);
  const { control, handleSubmit, reset } = useForm<FilterSchemaT>({
    resolver: zodResolver(FilterSchema),
    defaultValues: filterInitialState,
  });

  const { searchParams, deleteAndNavigate, router } = useSearchParamUtils();

  const isFilterExpanded = searchParams.get("filter") === "1";

  const device = useDevice();

  const categoriesDefaultLimit =
    device === "mobile" ? 4 : device === "tablet" ? 8 : 12;
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

  const onFilter = handleSubmit((values) => {
    const queryParts = [];

    for (const [key, value] of Object.entries(values)) {
      if (Array.isArray(value) && value.length > 0) {
        queryParts.push(`${key}=${value.join(",")}`);
      } else if (typeof value === "string" && value)
        queryParts.push(`${key}=${value}`);
    }

    router.push(`${PATHS.vacancies}?${queryParts.join("&")}`);
  });

  const onCloseFilter = () => {
    deleteAndNavigate(["filter"]);
  };

  useEffect(() => {
    const resetValues: FilterSchemaT = {
      ...filterInitialState,
      ...Object.fromEntries(
        Object.keys(filterInitialState).map((key) => {
          const value = searchParams.get(key);

          if (key === "categories") {
            return [key, value ? value.split(",") : []];
          }
          return [key, value ?? ""];
        })
      ),
    };

    reset(resetValues);
  }, [searchParams, reset]);

  return (
    <FilterContext.Provider
      value={{
        onFilter,
        control,
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
