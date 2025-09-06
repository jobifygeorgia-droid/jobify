"use client";

import { Button, Modal, Divider } from "@/components/ui";
import { useSendResumeContext } from "@/providers/SendResumeProvider";
import { TextEditor, DropzoneFileInput } from "@/components/layouts/Form";
import { TipTapProvider } from "@/providers";

const UploadResumeModal: React.FC = () => {
  const { modalIsOpen, onCloseModal } = useSendResumeContext();

  if (!modalIsOpen) return null;

  return (
    <Modal onClose={onCloseModal}>
      <div className="w-[660px] h-[670px] flex flex-col p-6 pb-0">
        <div className="sticky top-0 flex justify-center font-semibold text-md bg-white h-max flex-1 pr-6">
          <span>რეზიუმეს გაგზავნა</span>
        </div>

        <div className="flex items-center justify-center gap-4 mt-12 mb-9">
          <span className="font-medium">
            გაგზავნეთ პლატფორმაზე არსებული რეზიუმე{" "}
          </span>
          <Button buttonType="secondary">გაგზავნა</Button>
        </div>

        <Divider />

        <div className="h-full overflow-y-auto my-9 flex flex-col gap-6">
          <DropzoneFileInput type="pdf" multiple={false} />

          <TipTapProvider readonly={false}>
            <TextEditor
              height="220px"
              width="100%"
              label="სამოტივაციო წერილი"
            />
          </TipTapProvider>
        </div>

        <div className="h-max flex-1 flex items-center justify-end gap-3 bg-white py-4 border-t border-t-bc sticky">
          <Button buttonType="text">გაუქმება</Button>
          <Button buttonType="primary" paddingSize="base-wider">
            გაგზავნა
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default UploadResumeModal;
