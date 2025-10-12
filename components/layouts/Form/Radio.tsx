"use client";

import { useState } from "react";
import classnames from "classnames";

import RadioItem from "./ui/RadioItem";
import FormErrorMessage from "./FormErrorMessage";
import { RadioT } from "@/interface/ui/forms-ui";

const Radio: React.FC<RadioT> = (props) => {
  const {
    data,
    size,
    name,
    message,
    direction = "row",
    value,
    onChange,
  } = props;

  const [selectedValue, setSelectedValue] = useState<string | number>(
    () => value?.toString() || ""
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange?.(value);
  };

  return (
    <div className="flex flex-col items-start justify-start gap-2">
      <div
        className={classnames("flex gap-6", {
          "flex-row items-center": direction === "row",
          "flex-col justify-center-center": direction === "column",
        })}
      >
        {data.map((input) => (
          <RadioItem
            key={name + input.value}
            item={input}
            size={size}
            name={name}
            selectedValue={selectedValue}
            handleChange={handleChange}
          />
        ))}
      </div>

      {message && (
        <div className="pl-3">
          <FormErrorMessage message={message} />
        </div>
      )}
    </div>
  );
};

export default Radio;
