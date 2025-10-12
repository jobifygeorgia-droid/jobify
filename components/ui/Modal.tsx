"use client";

import classnames from "classnames";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";

import { Close } from "@/components/ui/icons";

type ModalT = {
  onClose: () => void;
  backdrop?: boolean;
  className?: string;
  zIndexOnMobile?: number;
  rounded?: "base" | "lg" | "none";
  children: React.ReactNode;
};

const Modal: React.FC<ModalT> = (props) => {
  const {
    onClose,
    children,
    rounded = "base",
    backdrop,
    className = "",
    zIndexOnMobile = 999,
  } = props;

  const [portalRoot, setPortalRoot] = useState<HTMLDivElement | null>(null);

  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onClose();
  };

  useEffect(() => {
    setPortalRoot(() => document.getElementById("portal") as HTMLDivElement);
  }, []);

  if (!portalRoot) return null;

  return createPortal(
    <div
      onClick={closeModal}
      className={classnames(
        `fixed inset-0 z-[${zIndexOnMobile}] tablet:z-[999] scroll-block`,
        {
          "bg-[rgba(0,0,0,0.3)]": backdrop,
        }
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={classnames(
          className,
          "shadow-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-bc bg-white overflow-hidden",
          {
            "rounded-none": rounded === "none",
            "tablet:rounded-lg": rounded === "base",
            "tablet:rounded-[25px]": rounded === "lg",
          }
        )}
      >
        <button
          onClick={closeModal}
          className="absolute z-[9] max-tablet:top-1 max-tablet:right-2 top-6 right-6 cursor-pointer"
        >
          <Close size={30} />
        </button>

        {children}
      </div>
    </div>,
    portalRoot
  );
};

export default Modal;
