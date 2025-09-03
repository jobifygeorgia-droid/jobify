"use client";

import { Button, Modal } from "@/components/ui";
import { useSendResumeContext } from "../../../providers/SendResumeProvider";
import { TextEditor, DropzoneFileInput } from "@/components/layouts/Form";

const UploadResumeModal: React.FC = () => {
  const { modalIsOpen, onCloseModal } = useSendResumeContext();

  if (!modalIsOpen) return null;

  return (
    <Modal onClose={onCloseModal}>
      <div className="w-[660px] h-[560px] flex flex-col p-6 pb-0">
        <div className="sticky top-0 flex justify-center font-semibold text-md bg-white h-max flex-1 pr-6">
          <span>რეზიუმეს გაგზავნა</span>
        </div>

        <div className="h-full overflow-y-auto mt-6 mb-4 pr-6 flex flex-col gap-6">
          <DropzoneFileInput type="pdf" multiple={false} />

          <TextEditor height="240px" width="100%" />
        </div>

        <div className="h-max flex-1 flex items-center justify-end gap-3 bg-white py-4 border-t border-t-bc sticky">
          <Button buttonType="text">გასუფთავება</Button>
          <Button>შედეგის ნახვა</Button>
        </div>
      </div>
    </Modal>
  );
};

export default UploadResumeModal;
