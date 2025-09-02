"use client";

import { useTipTap } from "@/providers/TipTapProvider";
import { AddRowAfter as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const AddRowAfter: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="add row after"
      disabled={!editor?.can().addRowAfter()}
      onClick={() => editor?.chain().focus().addRowAfter().run()}
    />
  );
};

export default AddRowAfter;
