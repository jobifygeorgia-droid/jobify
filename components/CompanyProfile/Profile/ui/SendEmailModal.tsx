"use client";

import { Button, Modal } from "@/components/ui";
import { useSearchParamUtils } from "@/hooks/utils";

type SendEmailModalT = {
  children: React.ReactNode;
};

const SendEmailModal: React.FC<SendEmailModalT> = ({ children }) => {
  const { searchParams, deleteAndNavigate } = useSearchParamUtils();

  const isOpened = searchParams.get("send-mails") === "1";

  const closeModal = () => {
    deleteAndNavigate(["send-mails"]);
  };

  if (!isOpened) return null;

  return (
    <Modal onClose={closeModal} backdrop>
      <div className="flex flex-col py-6 gap-3 w-[800px] px-2">
        {children}

        <div className="flex items-center justify-end gap-3 px-6 bg-white">
          <Button
            paddingSize="base-wider"
            buttonType="tertiary"
            onClick={closeModal}
          >
            გაუქმება
          </Button>

          <Button paddingSize="base-wider" buttonType="primary">
            გაგზავნა
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default SendEmailModal;
