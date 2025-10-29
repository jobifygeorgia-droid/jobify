"use client";

import SelectEl from "react-select";
import classnames from "classnames";

import { SelectT, SelectValueT, SelectOptionT } from "@/interface/ui/forms-ui";

import { ErrorMessage, Label } from ".";
import { Spinner } from "@/components/ui";
import SelectInputContainer from "./ui/SelectInputContainer";
import SelectMultiValueContainer from "./ui/SelectMultiValueContainer";
import { customSelectStyles, customSelectTheme } from "./styles/selectConfig";

const Select = (props: SelectT) => {
  const {
    adornment,
    values = [],
    isMulti = false,
    itemsToShowCount = 1,
  } = props;

  const selectedOptions = props.options.filter((option) =>
    values.includes(option.value)
  );

  const onChange = (value: SelectValueT) => props.onChange(value);

  return (
    <div className="w-full flex flex-col gap-2" style={{ width: props.width }}>
      {props.label && <Label label={props.label} id={`select-${props.id}`} />}

      <div
        className={classnames(
          "w-full relative flex items-center gap-1 border border-bc focus-within:border-light-grey-active rounded-xl bg-white",
          props.containerClassName
        )}
      >
        <SelectEl
          id={props.id}
          isMulti={!!isMulti}
          onChange={onChange}
          options={props.options}
          theme={customSelectTheme}
          instanceId={props.instanceId}
          value={selectedOptions}
          placeholder={props.placeholder}
          classNamePrefix="custom-select"
          className="w-full outline-none"
          noOptionsMessage={() => props.dropdownPlaceholder || "No options"}
          classNames={{
            menuList: () => classnames({ "loading-active": props.loading }),
          }}
          components={{
            ValueContainer: (props) => (
              <SelectInputContainer adornment={adornment} {...props} />
            ),
            MultiValue: (props) => (
              <SelectMultiValueContainer
                {...props}
                itemsToShowCount={itemsToShowCount}
              />
            ),
            NoOptionsMessage: () =>
              props.loading || props.dropdownPlaceholder ? (
                <div className="py-8 h-[40px] w-full text-center text-gray-500  ">
                  {props.loading ? (
                    <Spinner size="sm" type="inline" />
                  ) : (
                    props.dropdownPlaceholder || ""
                  )}
                </div>
              ) : null,
          }}
          styles={{
            ...customSelectStyles<SelectOptionT, typeof isMulti>(),
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

      {props.message && <ErrorMessage message={props.message} />}
    </div>
  );
};

export default Select;
