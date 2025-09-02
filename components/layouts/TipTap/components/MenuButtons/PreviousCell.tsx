"use client";

import { useTipTap } from "@/providers/TipTapProvider";
import { PreviousCell as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const PreviousCell: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="go to previous cell"
      disabled={!editor?.can().goToPreviousCell()}
      onClick={() => editor?.chain().focus().goToPreviousCell().run()}
    />
  );
};

export default PreviousCell;
