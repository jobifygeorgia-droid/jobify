"use client";

import { useTipTap } from "@/providers/TipTapProvider";
import { Strike as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const Strike: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="strike"
      isActive={editor?.isActive("strike")}
      onClick={() => editor?.chain().focus().toggleStrike().run()}
    />
  );
};

export default Strike;
