"use client";

import { createContext, useContext } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import SendResumeButton from "@/components/layouts/SendResume/SendResumeButton";
import UploadResumeModal from "@/components/layouts/SendResume/UploadResumeModal";

type SendResumeProviderT = React.FC<{ children: React.ReactNode }> & {
  Button: typeof SendResumeButton;
};

type SendResumeContextT = {
  modalIsOpen: boolean;
  onOpenModal: () => void;
  onCloseModal: () => void;
};

const SendResumeContext = createContext<SendResumeContextT>({
  modalIsOpen: false,
  onCloseModal() {},
  onOpenModal() {},
});

const SendResumeProvider: SendResumeProviderT = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const modalIsOpen = params.get("send-resume") === "1";

  const buildPath = () => `${pathname}?${params.toString()}`;

  const onOpenModal = () => {
    params.set("send-resume", "1");
    router.push(buildPath(), { scroll: false });
  };

  const onCloseModal = () => {
    params.delete("send-resume");
    router.push(buildPath(), { scroll: false });
  };

  return (
    <SendResumeContext.Provider
      value={{ modalIsOpen, onOpenModal, onCloseModal }}
    >
      <UploadResumeModal />
      {children}
    </SendResumeContext.Provider>
  );
};

SendResumeProvider.Button = SendResumeButton;

export default SendResumeProvider;

export const useSendResumeContext = () => {
  const context = useContext(SendResumeContext);

  if (!context)
    throw new Error("please use Send Resume components inside its Provider");

  return context;
};
