"use client";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { MergeCells as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const MergeCells: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="merge cells"
      disabled={!editor?.can().mergeCells()}
      onClick={() => editor?.chain().focus().mergeCells().run()}
    />
  );
};

export default MergeCells;
