"use client";

import { useTipTap } from "@/providers/TipTapProvider";
import { ToggleHeaderColumn as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const ToggleHeaderColumn: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="toggle header column"
      disabled={!editor?.can().toggleHeaderColumn()}
      onClick={() => editor?.chain().focus().toggleHeaderColumn().run()}
    />
  );
};

export default ToggleHeaderColumn;
