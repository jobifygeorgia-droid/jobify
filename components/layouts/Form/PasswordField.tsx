"use client";

import { useState } from "react";

import TextField from "./TextField";
import PasswordFieldAdornment from "./ui/PasswordFieldAdornment";
import { TextFieldPropsT } from "./types/form-fields.types";

type PasswordFieldT = {
  message?: string;
  inputProps: Exclude<TextFieldPropsT, "message" | "inputType" | "adornment">;
};

const PasswordField: React.FC<PasswordFieldT> = (props) => {
  const { message, inputProps } = props;

  const [inputType, setInputType] = useState<"password" | "text">("password");

  return (
    <TextField
      message={message}
      inputType={inputType}
      {...inputProps}
      adornment={
        <PasswordFieldAdornment
          inputType={inputType}
          setInputType={setInputType}
        />
      }
    />
  );
};

export default PasswordField;
