"use client";

import { createContext, useContext } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import UploadResumeModal from "@/components/layouts/SendResume/UploadResumeModal";

type SendResumeProviderT = React.FC<{ children: React.ReactNode }> & {};

type SendResumeContextT = {
  modalIsOpen: boolean;
  onCloseModal: () => void;
  paramsToAttach: string;
};

const SendResumeContext = createContext<SendResumeContextT>({
  modalIsOpen: false,
  onCloseModal() {},
  paramsToAttach: "",
});

const SendResumeProvider: SendResumeProviderT = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const modalIsOpen = params.get("send-resume") === "1";

  const buildPath = () => `${pathname}?${params.toString()}`;

  const paramsToAttach = "?send-resume=1";

  const onCloseModal = () => {
    params.delete("send-resume");
    router.push(buildPath(), { scroll: false });
  };

  return (
    <SendResumeContext.Provider
      value={{ modalIsOpen, paramsToAttach, onCloseModal }}
    >
      <UploadResumeModal />
      {children}
    </SendResumeContext.Provider>
  );
};

export default SendResumeProvider;

export const useSendResumeContext = () => {
  const context = useContext(SendResumeContext);

  if (!context)
    throw new Error("please use Send Resume components inside its Provider");

  return context;
};
