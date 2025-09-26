"use client";

import { useSendResumeContext } from "@/providers/SendResumeProvider";

import { AnchorButton } from "@/components/ui";
import { AnchorButtonT } from "@/components/ui/Button/button.types";

type SendResumeButtonT = {
  title?: "short" | "long";
  buttonProps?: Omit<AnchorButtonT, "buttonType" | "rounded" | "href">;
};

const SendResumeButton: React.FC<SendResumeButtonT> = (props) => {
  const { title, buttonProps } = props;
  const { paramsToAttach } = useSendResumeContext();

  return (
    <AnchorButton {...buttonProps} href={paramsToAttach} buttonType="primary">
      {title === "short" ? "გაგზავნა" : "რეზიუმეს გაგზავნა"}
    </AnchorButton>
  );
};

export default SendResumeButton;
