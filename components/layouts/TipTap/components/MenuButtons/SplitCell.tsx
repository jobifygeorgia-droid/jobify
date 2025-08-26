"use client";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { SplitCell as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const SplitCell: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="split cell"
      disabled={!editor?.can().splitCell()}
      onClick={() => editor?.chain().focus().splitCell().run()}
    />
  );
};

export default SplitCell;
