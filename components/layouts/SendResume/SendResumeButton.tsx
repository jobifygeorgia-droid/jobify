"use client";

import { ButtonT } from "@/components/ui/Button/button.types";

import { Button } from "@/components/ui";
import UploadResumeModal from "./UploadResumeModal";
import { useState } from "react";

type SendResumeButtonT = {
  title?: "short" | "long";
  buttonProps?: Omit<ButtonT, "buttonType" | "rounded" | "href">;
};

const SendResumeButton: React.FC<SendResumeButtonT> = (props) => {
  const { title, buttonProps } = props;
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <Button
        {...buttonProps}
        buttonType="primary"
        onClick={() => setIsOpened(true)}
      >
        {title === "short" ? "გაგზავნა" : "რეზიუმეს გაგზავნა"}
      </Button>

      <UploadResumeModal
        isOpened={isOpened}
        onClose={() => setIsOpened(false)}
      />
    </>
  );
};

export default SendResumeButton;
