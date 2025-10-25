"use client";

import { useFetchCategories } from "@/hooks/api/utils";
import { CategoriesFieldT } from "@/interface/ui/forms-ui";

import Select from "./Select";

const CategoriesField: React.FC<CategoriesFieldT> = (props) => {
  const { onChange, message, value } = props;

  const { options, loading } = useFetchCategories();

  return (
    <Select
      isMulti
      values={value}
      id="categories"
      label="კატეგორია"
      loading={loading}
      options={options}
      message={message}
      onChange={onChange}
      placeholder="აირჩიეთ კატეგორია"
      instanceId="vacancy-categories"
      containerClassName="rounded-lg!"
    />
  );
};

export default CategoriesField;
