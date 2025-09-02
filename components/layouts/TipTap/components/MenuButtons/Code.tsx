"use client";

import { useTipTap } from "@/providers/TipTapProvider";
import { Code as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const Code: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="code"
      isActive={editor?.isActive("code")}
      onClick={() => editor?.chain().focus().toggleCode().run()}
    />
  );
};

export default Code;
