"use client";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { Underline as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const Underline: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="set Underlined"
      isActive={editor?.isActive("underline")}
      onClick={() => editor?.chain().focus().toggleUnderline().run()}
    />
  );
};

export default Underline;
