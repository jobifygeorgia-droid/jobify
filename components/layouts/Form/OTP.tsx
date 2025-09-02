"use client";

import OtpInput from "react-otp-input";

import Label from "./ui/Label";

type OTPT = {
  label?: string;
  numInputs?: number;
  name?: string;
  value?: string;
  onChange: () => void;
  message?: string;
};

const OTP: React.FC<OTPT> = (props) => {
  const { numInputs = 6, label, name, value, onChange, message } = props;

  return (
    <div className="flex flex-col gap-[6px]">
      {label && <Label label={label} labelPosition="out" />}

      <OtpInput
        value={value}
        onChange={onChange}
        renderInput={(inputProps) => (
          <input
            {...inputProps}
            name={name || ""}
            placeholder="*"
            className="border border-bc rounded-lg w-11! h-11! placeholder:text-center outline-none text-center bg-white!"
          />
        )}
        numInputs={numInputs}
        containerStyle="flex items-center gap-3 order-2"
      />

      {false && <span>{message}</span>}
    </div>
  );
};

export default OTP;
