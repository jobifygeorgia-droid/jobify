"use client";

import { useState } from "react";
import SelectEl from "react-select";
import classnames from "classnames";

import { SelectedOptionT } from "./types/form-fields.types";

import SelectInputContainer from "./ui/SelectInputContainer";
import SelectMultiValueContainer from "./ui/SelectMultiValueContainer";
import { customSelectStyles, customSelectTheme } from "./ui/selectConfig";

type SelectT<T> = {
  options?: Array<T>;
  isMulti?: boolean;
  placeholder?: string;
  width?: string;
  containerClassName?: string;
  variant?: "filled" | "outlined";
  adornment?: React.ReactNode;
  instanceId: string;
};

const Select = <T extends object>(props: SelectT<T>) => {
  const {
    options = [],
    isMulti = false,
    placeholder,
    width = "100%",
    adornment,
    instanceId,
    containerClassName,
  } = props;

  const [selectedOption, setSelectedOption] = useState<SelectedOptionT<T>>(
    isMulti ? [] : null
  );

  const onChange = (value: SelectedOptionT<T>) => {
    setSelectedOption(value);
  };

  return (
    <div
      className={classnames(
        "relative flex items-center gap-1 border border-bc rounded-xl bg-white",
        containerClassName
      )}
      style={{ width }}
    >
      <SelectEl
        instanceId={instanceId}
        isMulti={!!isMulti}
        defaultValue={selectedOption}
        options={options}
        onChange={onChange}
        className="w-full outline-none"
        classNamePrefix="custom-select"
        components={{
          ValueContainer: (props) => (
            <SelectInputContainer adornment={adornment} {...props} />
          ),
          MultiValue: (props) => <SelectMultiValueContainer {...props} />,
        }}
        placeholder={placeholder}
        theme={customSelectTheme}
        styles={{
          ...customSelectStyles<T, typeof isMulti>(),
          control: (baseStyles) => ({
            ...baseStyles,
            zIndex: 9999,
            minHeight: "44px",
            boxShadow: "none",
            borderRadius: "inherit",
            background: "inherit",
            border: "inherit",
            fontSize: "inherit",
          }),
        }}
      />
    </div>
  );
};

export default Select;
