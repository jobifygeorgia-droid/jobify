"use client";

import { useTipTap } from "@/providers/TipTapProvider";
import { NextCell as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const NextCell: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="go to next cell"
      disabled={!editor?.can().goToNextCell()}
      onClick={() => editor?.chain().focus().goToNextCell().run()}
    />
  );
};

export default NextCell;
