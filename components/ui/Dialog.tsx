"use client";

import classnames from "classnames";

import { Button, Modal, Spinner } from "./";
import { DialogT } from "@/interface/ui/ui";

type DialogPropsT = DialogT & {
  onClose: () => void;
  setIsLoadingDialog: (loading: boolean) => void;
};

const Dialog: React.FC<DialogPropsT> = (props) => {
  const { type = "normal", closeOnConfirm = false, loading = false } = props;

  const handleConfirm = () => {
    if (closeOnConfirm) props.onClose();
    if (props.loadingOnConfirm) props.setIsLoadingDialog(true);

    props.onConfirmCallback?.();
  };

  return (
    <Modal onClose={props.onClose}>
      <div className="p-8 w-[90vw] tablet:w-[600px] relative">
        {props.loading && <Spinner />}

        <h2 className="text-md font-semibold w-[90%] py-0 leading-5">
          {props.title}
        </h2>

        <div className="mt-6 text-secondary font-medium tracking-wide text-base-sm">
          {props.content}
        </div>

        <div className="flex items-center justify-end gap-4 mt-12">
          <Button
            disabled={loading}
            buttonType="tertiary"
            onClick={props.onClose}
          >
            დახურვა
          </Button>

          <Button
            disabled={loading}
            onClick={handleConfirm}
            className={classnames("", {
              "bg-blue-light hover:bg-blue hover:text-white": type === "normal",
              "bg-orange-light-active hover:bg-orange text-white":
                type === "warning",
              "bg-red-light-active hover:bg-red text-white": type === "danger",
            })}
          >
            თანხმობა
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Dialog;
