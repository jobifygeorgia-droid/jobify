"use client";

import { useTipTap } from "@/providers/TipTapProvider";
import { LineBreak as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const LineBreak: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="line break"
      onClick={() => editor?.chain().focus().setHardBreak().run()}
    />
  );
};

export default LineBreak;
