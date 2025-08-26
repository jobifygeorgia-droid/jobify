"use client";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { Blockquote as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const Blockquote: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="blockquote"
      isActive={editor?.isActive("blockquote")}
      onClick={() => editor?.chain().focus().toggleBlockquote().run()}
    />
  );
};

export default Blockquote;
