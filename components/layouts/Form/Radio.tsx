"use client";

import { useState } from "react";
import classnames from "classnames";

import RadioItem from "./ui/RadioItem";
import FormErrorMessage from "./FormErrorMessage";
import { RadioPropsT } from "./types/form-fields.types";

const Radio: React.FC<RadioPropsT> = (props) => {
  const { data, size, name, message, direction = "row" } = props;
  const [selectedValue, setSelectedValue] = useState<string | number>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className="flex flex-col items-start gap-2">
      <div
        className={classnames("flex gap-3", {
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
