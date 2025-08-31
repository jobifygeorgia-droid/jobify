"use client";

import { useTipTap } from "@/providers/TipTapProvider";
import { AlignRight as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";
const AlignRight: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="text align right"
      isActive={editor?.isActive({ textAlign: "right" })}
      onClick={() => editor?.chain().focus().setTextAlign("right").run()}
    />
  );
};

export default AlignRight;
