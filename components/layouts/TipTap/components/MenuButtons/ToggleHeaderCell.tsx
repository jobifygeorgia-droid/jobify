"use client";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { ToggleHeaderCell as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const ToggleHeaderCell: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="toggle header cell"
      disabled={!editor?.can().toggleHeaderCell()}
      onClick={() => editor?.chain().focus().toggleHeaderCell().run()}
    />
  );
};

export default ToggleHeaderCell;
