"use client";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { AlignLeft as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const AlignLeft: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="text align left"
      isActive={editor?.isActive({ textAlign: "left" })}
      onClick={() => editor?.chain().focus().setTextAlign("left").run()}
    />
  );
};

export default AlignLeft;
