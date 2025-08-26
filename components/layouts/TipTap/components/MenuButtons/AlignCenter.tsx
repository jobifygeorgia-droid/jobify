"use client";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { AlignCenter as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const AlignCenter: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="text align center"
      isActive={editor?.isActive({ textAlign: "center" })}
      onClick={() => editor?.chain().focus().setTextAlign("center").run()}
    />
  );
};

export default AlignCenter;
