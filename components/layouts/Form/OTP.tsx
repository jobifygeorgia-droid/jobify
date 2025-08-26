"use client";

import { useState } from "react";
import OtpInput from "react-otp-input";

import Label from "./ui/Label";

type OTPT = {
  label?: string;
  numInputs?: number;
};

const OTP: React.FC<OTPT> = (props) => {
  const { numInputs = 6, label } = props;

  const [otp, setOtp] = useState<string>("");

  return (
    <div className="flex flex-col gap-[6px]">
      {label && <Label label={label} labelPosition="out" />}

      <OtpInput
        value={otp}
        onChange={setOtp}
        renderInput={(props) => (
          <input
            {...props}
            placeholder="*"
            className="border border-bc rounded-lg w-11! h-11! placeholder:text-center outline-none text-center bg-white!"
          />
        )}
        numInputs={numInputs}
        containerStyle="flex items-center gap-3 order-2"
      />
    </div>
  );
};

export default OTP;
