"use client";

import { Button } from "@/components/ui";
import { ButtonT } from "@/components/ui/Button/button.types";
import { useSendResumeContext } from "../../../providers/SendResumeProvider";

type SendResumeButtonT = {
  title?: "short" | "long";
  buttonProps?: Omit<ButtonT, "onClick" | "buttonType" | "rounded">;
};

const SendResumeButton: React.FC<SendResumeButtonT> = (props) => {
  const { title, buttonProps } = props;
  const { onOpenModal } = useSendResumeContext();

  return (
    <Button
      {...buttonProps}
      buttonType="secondary"
      rounded="base"
      onClick={onOpenModal}
    >
      {title === "short" ? "გაგზავნა" : "რეზიუმეს გაგზავნა"}
    </Button>
  );
};

export default SendResumeButton;
