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
} from "@/lib/static-data";

import {
  FilterSchema,
  FilterSchemaT,
  filterInitialState,
} from "@/lib/schemas/FilterSchema";

import { useDevice, useSearchParamUtils } from "@/hooks/utils";
import { PATHS } from "@/lib/config";
import { useFetchCategories } from "@/hooks/api/utils";

type FilterProviderT = {
  children: React.ReactNode;
};

type FilterContextType = {
  isOpen: boolean;
  currentSearch: string;
  categoriesLimit: number;
  currentWorkType: string;
  expandCategories: boolean;
  workTypeOptions: Array<OptionT>;
  workSectorOptions: Array<OptionT>;
  experienceOptions: Array<OptionT>;
  workCategoryOptions: Array<OptionT>;
  control: Control<FilterSchemaT> | undefined;
  categoriesRef: React.RefObject<HTMLDivElement | null>;
  onFilter: () => void;
  onOpenFilter: () => void;
  onCloseFilter: () => void;
  toggleCategories: () => void;
  onSelectCategory: (
    newValue: string | number,
    existingValues: Array<string>,
    cb: (value: Array<string>) => void
  ) => void;
  onChangeWorkType: (value: string) => void;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDate: (value: string, cb: (v: string) => void) => void;
};

const FilterContext = createContext<FilterContextType>({
  isOpen: false,
  currentSearch: "",
  categoriesLimit: 0,
  currentWorkType: "",
  expandCategories: false,
  workTypeOptions: [],
  workSectorOptions: [],
  experienceOptions: [],
  workCategoryOptions: [],
  control: undefined,
  categoriesRef: { current: null },
  onFilter: () => {},
  onOpenFilter: () => {},
  onCloseFilter: () => {},
  toggleCategories: () => {},
  onSelectCategory: () => {},
  onChangeWorkType: () => {},
  onSearchChange: () => {},
  onChangeDate: () => {},
});

const FilterProvider: React.FC<FilterProviderT> = (props) => {
  const { children } = props;

  const [isOpen, setIsOpen] = useState(false);

  const { control, handleSubmit, reset, ...form } = useForm<FilterSchemaT>({
    resolver: zodResolver(FilterSchema),
    defaultValues: filterInitialState,
  });

  const { searchParams, router, pathname } = useSearchParamUtils();

  const device = useDevice();

  ///// Outside Filter Bar (handle fields which are not included in form ) /////
  /////////////////////////////////////////////////////////////////////////////

  // Search state //
  const currentSearch = form.watch("search");

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    form.setValue("search", value);
  };

  // Work type state //

  const currentWorkType = form.watch("vacancy_type");

  const onChangeWorkType = (value: string) => {
    form.setValue("vacancy_type", value);
  };

  /////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////

  // Filter state //
  const onOpenFilter = () => setIsOpen(true);

  const onCloseFilter = () => setIsOpen(false);

  // Categories state //
  const { options: workCategoryOptions } = useFetchCategories();

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

    const redirectTo = pathname.startsWith(PATHS.vip_vacancies)
      ? PATHS.vip_vacancies
      : PATHS.vacancies;

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
        currentWorkType,
        onChangeWorkType,
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
