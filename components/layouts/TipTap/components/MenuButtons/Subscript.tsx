"use client";

import { useTipTap } from "@/providers/TipTapProvider";
import { Subscript as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const Subscript: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="create Subscript"
      isActive={editor?.isActive("subscript")}
      onClick={() => editor?.chain().focus().toggleSubscript().run()}
    />
  );
};

export default Subscript;
