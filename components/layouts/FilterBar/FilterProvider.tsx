"use client";

import { format } from "date-fns";
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

type FilterProviderT = {
  children: React.ReactNode;
  redirectTo: string;
};

type FilterContextType = {
  onCloseFilter: () => void;
  toggleCategories: () => void;
  categoriesLimit: number;
  expandCategories: boolean;
  categoriesRef: React.RefObject<HTMLDivElement | null>;
  workTypeOptions: Array<OptionT>;
  workSectorOptions: Array<OptionT>;
  experienceOptions: Array<OptionT>;
  workCategoryOptions: Array<OptionT>;
  control: Control<FilterSchemaT> | undefined;
  onFilter: () => void;
  isOpen: boolean;
  onOpenFilter: () => void;
  onSelectCategory: (
    newValue: string | number,
    existingValues: Array<string>,
    cb: (value: Array<string>) => void
  ) => void;
  onChangeDate: (value: string, cb: (v: string) => void) => void;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  currentSearch: string;
};

const FilterContext = createContext<FilterContextType>({
  control: undefined,
  onCloseFilter: () => {},
  toggleCategories: () => {},
  categoriesLimit: 0,
  expandCategories: false,
  categoriesRef: { current: null },
  workTypeOptions: [],
  workSectorOptions: [],
  experienceOptions: [],
  workCategoryOptions: [],
  onFilter: () => {},
  isOpen: false,
  onOpenFilter: () => {},
  onSelectCategory: () => {},
  onChangeDate: () => {},
  onSearchChange: () => {},
  currentSearch: "",
});

const FilterProvider: React.FC<FilterProviderT> = (props) => {
  const { children, redirectTo } = props;

  const [isOpen, setIsOpen] = useState(false);

  const { control, handleSubmit, reset, ...form } = useForm<FilterSchemaT>({
    resolver: zodResolver(FilterSchema),
    defaultValues: filterInitialState,
  });

  const { searchParams, router } = useSearchParamUtils();

  const device = useDevice();

  // Search state //
  const currentSearch = form.watch("search");

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    form.setValue("search", value);
  };

  // Filter state //
  const onOpenFilter = () => setIsOpen(true);
  const onCloseFilter = () => setIsOpen(false);

  // Categories state //
  const categoriesRef = useRef<HTMLDivElement | null>(null);
  const [expandCategories, setExpandCategories] = useState(false);

  const categoriesDefaultLimit =
    device === "mobile" ? 4 : device === "tablet" ? 8 : 12;
  const categoriesCount = workCategoryOptions.length;

  const categoriesLimit = expandCategories
    ? categoriesCount
    : categoriesDefaultLimit;

  const toggleCategories = () => {
    setExpandCategories((prev) => !prev);
    if (categoriesRef.current && expandCategories)
      categoriesRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onSelectCategory = (
    newValue: string | number,
    existingValues: Array<string>,
    cb: (value: Array<string>) => void
  ) => {
    const strValue = newValue.toString();

    const candidateValue = existingValues.includes(strValue)
      ? existingValues.filter((v) => v !== strValue)
      : [...existingValues, strValue];

    cb(candidateValue);
  };

  // Published date change handler //
  const onChangeDate = (value: string, cb: (v: string) => void) => {
    const dateToReceive = value ? new Date(value) : "";

    if (!dateToReceive) return;

    const year = String(dateToReceive.getFullYear());
    const month = String(dateToReceive.getMonth() + 1).padStart(2, "0");
    const day = String(dateToReceive.getDate()).padStart(2, "0");

    const localOnly = new Date(`${year}-${month}-${day}`);

    cb(format(localOnly, "yyyy-MM-dd"));
  };

  // Handle filter form submission //
  const onFilter = handleSubmit((values) => {
    const queryParts = [];

    for (const [key, value] of Object.entries(values)) {
      if (Array.isArray(value) && value.length > 0) {
        queryParts.push(`${key}=${value.join(",")}`);
      } else if (typeof value === "string" && value)
        queryParts.push(`${key}=${value}`);
    }

    console.log(queryParts);

    router.push(`${redirectTo}?${queryParts.join("&")}`);
    setIsOpen(false);
  });

  // Reset filter values from URL params
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
        currentSearch,
        onSearchChange,
        onFilter,
        control,
        isOpen,
        onOpenFilter,
        onCloseFilter,
        onChangeDate,
        toggleCategories,
        categoriesLimit,
        categoriesRef,
        expandCategories,
        workTypeOptions,
        workCategoryOptions,
        workSectorOptions,
        experienceOptions,
        onSelectCategory,
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
