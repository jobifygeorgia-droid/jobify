"use client";

import { createPortal } from "react-dom";
import { useState, useEffect } from "react";

import { Close } from "./icons";

type ModalT = {
  onClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalT> = (props) => {
  const { onClose, children } = props;

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
    <div className="fixed inset-0 z-[9999]" onClick={closeModal}>
      <div
        onClick={(e) => e.stopPropagation()}
        className="shadow-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-bc rounded-lg bg-white overflow-hidden"
      >
        <button
          onClick={closeModal}
          className="absolute z-[9] top-6 right-6 cursor-pointer"
        >
          <Close width={20} height={20} />
        </button>

        {children}
      </div>
    </div>,
    portalRoot
  );
};

export default Modal;
