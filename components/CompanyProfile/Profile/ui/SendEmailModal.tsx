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
      <div className="flex flex-col tablet:gap-6 pt-6 pb-0 tablet:py-6 h-screen tablet:h-auto">
        <div className="w-screen tablet:w-[90vw] desktop-sm:w-[800px] flex flex-col gap-3 pl-2 desktop-sm:px-2">
          {children}
        </div>

        <div className="flex items-center justify-center tablet:justify-end gap-3 px-6 py-4 tablet:py-0 bg-white">
          <Button
            onClick={closeModal}
            buttonType="tertiary"
            paddingSize="base-wider"
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
