"use client";

import { useTipTap } from "@/providers/TipTapProvider";
import { AddRowBefore as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const AddRowBefore: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="add row before"
      disabled={!editor?.can().addRowBefore()}
      onClick={() => editor?.chain().focus().addRowBefore().run()}
    />
  );
};

export default AddRowBefore;
