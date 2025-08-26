"use client";

import { DeleteRow as Icon } from "@/components/ui/icons";
import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const DeleteRow: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="delete row"
      disabled={!editor?.can().deleteRow()}
      onClick={() => editor?.chain().focus().deleteRow().run()}
    />
  );
};

export default DeleteRow;
