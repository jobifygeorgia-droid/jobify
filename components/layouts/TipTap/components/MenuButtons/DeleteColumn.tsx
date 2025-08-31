"use client";

import { useTipTap } from "@/providers/TipTapProvider";
import { DeleteColumn as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const DeleteColumn: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="delete column"
      disabled={!editor?.can().deleteColumn()}
      onClick={() => editor?.chain().focus().deleteColumn().run()}
    />
  );
};

export default DeleteColumn;
