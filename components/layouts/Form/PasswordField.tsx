"use client";

import { useState } from "react";

import TextField from "./TextField";
import PasswordFieldAdornment from "./ui/PasswordFieldAdornment";

type PasswordFieldT = {
  message?: string;
};

const PasswordField: React.FC<PasswordFieldT> = (props) => {
  const { message } = props;

  const [inputType, setInputType] = useState<"password" | "text">("password");

  return (
    <TextField
      label="Password"
      message={message}
      inputType={inputType}
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
