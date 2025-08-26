"use client";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { AddColumnAfter as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const AddColumnAfter: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="add column after"
      disabled={!editor?.can().addColumnAfter()}
      onClick={() => editor?.chain().focus().addColumnAfter().run()}
    />
  );
};

export default AddColumnAfter;
