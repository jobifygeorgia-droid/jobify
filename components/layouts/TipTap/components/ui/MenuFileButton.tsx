"use client";

import { useTipTap } from "@/providers/TipTapProvider";

import Tooltip from "./Tooltip";
import { Image as ImageIcon } from "@/components/ui/icons";

const MenuFileButton: React.FC = () => {
  const { addImage } = useTipTap();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget?.files?.[0];
    if (!file) return;
    addImage(file);
  };

  return (
    <div>
      <label
        htmlFor="tiptap-image"
        className="group relative text-2xl size-10 flex items-center justify-center rounded-full capitalize cursor-pointer"
      >
        <ImageIcon size={18} className="text-dark-grey" />
        <Tooltip>embed image</Tooltip>
      </label>
      <input
        type="file"
        hidden
        accept="image/*"
        id="tiptap-image"
        onChange={onFileChange}
      />
    </div>
  );
};

export default MenuFileButton;
