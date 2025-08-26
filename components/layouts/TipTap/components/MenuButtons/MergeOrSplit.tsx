"use client";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { MergeOrSplit as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const MergeOrSplit: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="merge or split"
      disabled={!editor?.can().mergeOrSplit()}
      onClick={() => editor?.chain().focus().mergeOrSplit().run()}
    />
  );
};

export default MergeOrSplit;
