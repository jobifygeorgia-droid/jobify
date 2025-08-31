"use client";

import { useTipTap } from "@/providers/TipTapProvider";
import { ToggleHeaderRow as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const ToggleHeaderRow: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="toggle header row"
      disabled={!editor?.can().toggleHeaderRow()}
      onClick={() => editor?.chain().focus().toggleHeaderRow().run()}
    />
  );
};

export default ToggleHeaderRow;
