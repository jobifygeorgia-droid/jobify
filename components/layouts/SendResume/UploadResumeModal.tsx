"use client";

import { useDevice } from "@/hooks/utils";
import { TipTapProvider } from "@/providers";
import { useSendResumeContext } from "@/providers/SendResumeProvider";

import { Button, Modal, Divider } from "@/components/ui";
import { TextEditor, DropzoneFileInput } from "@/components/layouts/Form";

const UploadResumeModal: React.FC = () => {
  const { modalIsOpen, onCloseModal } = useSendResumeContext();

  const device = useDevice();

  if (!modalIsOpen) return null;

  return (
    <Modal onClose={onCloseModal} backdrop zIndexOnMobile={99}>
      <div className="w-screen h-screen pt-20 pb-10 px-4 tablet:w-[640px] desktop-sm:w-[800px] tablet:h-[670px] flex flex-col tablet:p-6 tablet:pb-0">
        <div className="sticky top-0 flex justify-center font-semibold text-base desktop-sm:text-md bg-white h-max pr-6">
          <span>რეზიუმეს გაგზავნა</span>
        </div>

        <div className="tablet:px-6 desktop-sm:px-28">
          <div className="flex flex-col tablet:flex-row items-center justify-center gap-4 mt-6 laptop:mt-12 mb-4 laptop:mb-9">
            <span className="font-medium text-base-sm">
              გაგზავნეთ პლატფორმაზე არსებული რეზიუმე{" "}
            </span>

            <Button
              paddingSize="base-wider"
              buttonType="secondary"
              className="w-full py-2! text-sm tablet:text-base-sm! tablet:py-3! tablet:w-max"
            >
              გაგზავნა
            </Button>
          </div>

          <Divider />

          <div className="h-full overflow-y-auto my-9 flex flex-col gap-6">
            <DropzoneFileInput type="pdf" multiple={false} />

            <TipTapProvider readonly={false}>
              <TextEditor
                width="100%"
                label="სამოტივაციო წერილი"
                height={device === "mobile" ? "350px" : "200px"}
              />
            </TipTapProvider>
          </div>
        </div>

        <div className="mt-auto h-max flex items-center justify-end gap-3 tablet:py-4 tablet:border-t border-t-bc sticky">
          <Button
            buttonType="tertiary"
            paddingSize="base-wider"
            onClick={onCloseModal}
          >
            გაუქმება
          </Button>
          <Button buttonType="primary" paddingSize="base-wider">
            გაგზავნა
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default UploadResumeModal;
