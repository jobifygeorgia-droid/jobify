"use client";

import classnames from "classnames";

import { TextFieldPropsT } from "@/interface/ui/forms-ui";

import Label from "./Label";
import AdornmentWrapper from "./ui/AdornmentWrapper";
import TextFieldContainer from "./ui/TextFieldContainer";
import TextFieldContentContainer from "./ui/TextFieldContentContainer";
import FormErrorMessage from "./FormErrorMessage";

const TextField: React.FC<TextFieldPropsT> = (props) => {
  const { id, name, label, adornment, placeholder, ...rest } = props;

  const hasAdornment = Boolean(adornment);
  const hasLabel = Boolean(label);

  return (
    <TextFieldContainer className={rest.containerClassName}>
      {hasLabel && <Label id={id} label={label} />}

      <TextFieldContentContainer
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
          {...rest.htmlInputProps}
          className={classnames(
            "peer w-full h-11 outline-none pl-2 rounded-[inherit]",
            { "w-[93%]!": Boolean(adornment) }
          )}
        />

        {hasAdornment && <AdornmentWrapper>{adornment}</AdornmentWrapper>}
      </TextFieldContentContainer>

      {rest.message && <FormErrorMessage message={rest.message} />}
    </TextFieldContainer>
  );
};

export default TextField;
