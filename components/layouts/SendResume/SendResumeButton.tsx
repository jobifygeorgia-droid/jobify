"use client";

import { Button } from "@/components/ui";
import { ButtonT } from "@/components/ui/Button";
import { useSendResumeContext } from "./SendResume";

const SendResumeButton: React.FC<Omit<ButtonT, "onClick">> = (props) => {
  const { onOpenModal } = useSendResumeContext();

  return (
    <Button {...props} onClick={onOpenModal}>
      გაგზავნა
    </Button>
  );
};

export default SendResumeButton;
