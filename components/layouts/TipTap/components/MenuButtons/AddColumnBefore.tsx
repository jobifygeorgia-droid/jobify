"use client";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { AddColumnBefore as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const AddColumnBefore: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="add column before"
      disabled={!editor?.can().addColumnBefore()}
      onClick={() => editor?.chain().focus().addColumnBefore().run()}
    />
  );
};

export default AddColumnBefore;
