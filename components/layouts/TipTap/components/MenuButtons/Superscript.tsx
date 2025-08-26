"use client";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { Superscript as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const Superscript: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="create Superscript"
      isActive={editor?.isActive("superscript")}
      onClick={() => editor?.chain().focus().toggleSuperscript().run()}
    />
  );
};

export default Superscript;
