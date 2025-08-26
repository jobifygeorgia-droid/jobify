"use client";

import Tooltip from "./Tooltip";
import { ImageIcon } from "@/components/ui/icons";
import { useTipTap } from "@/components/layouts/TipTap/TipTap";

type MenuFileButtonT = {};

const MenuFileButton: React.FC<MenuFileButtonT> = () => {
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
        <ImageIcon width={18} height={18} className="stroke-dark-grey" />
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
