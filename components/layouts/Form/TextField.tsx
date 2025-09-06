"use client";

import classnames from "classnames";

import { TextFieldPropsT } from "./types/form-fields.types";
import { filledContainerStyles } from "./ui/TextFieldContentContainer";

import Label from "./ui/Label";
import AdornmentWrapper from "./ui/AdornmentWrapper";
import TextFieldContainer from "./ui/TextFieldContainer";
import TextFieldContentContainer from "./ui/TextFieldContentContainer";
import FormErrorMessage from "./FormErrorMessage";

const TextField: React.FC<TextFieldPropsT> = (props) => {
  const {
    id,
    name,
    label,
    adornment,
    placeholder,
    labelPosition = "in",
    ...rest
  } = props;

  const hasAdornment = Boolean(adornment);
  const hasLabel = Boolean(label);
  const isLabelOut = labelPosition === "out";

  return (
    <TextFieldContainer className={rest.containerClassName}>
      <TextFieldContentContainer
        isLabelOut={isLabelOut}
        onClick={rest.onClick}
        variant={rest.variant}
        fieldWrapperClassName={rest.fieldWrapperClassName}
      >
        <input
          id={id}
          name={name}
          value={rest.value}
          onChange={rest.onChange}
          type={rest.inputType || "text"}
          placeholder={placeholder || " "}
          className={classnames(
            "peer w-full h-11 outline-none pl-2 rounded-[inherit] bg-white",
            { [`order-2 ${filledContainerStyles}`]: isLabelOut }
          )}
        />

        {hasAdornment && <AdornmentWrapper>{adornment}</AdornmentWrapper>}

        {hasLabel && (
          <Label id={id} label={label} labelPosition={labelPosition} />
        )}
      </TextFieldContentContainer>

      {rest.message && <FormErrorMessage message={rest.message} />}
    </TextFieldContainer>
  );
};

export default TextField;
