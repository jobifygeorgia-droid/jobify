"use client";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { Italic as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const Italic: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="italic"
      isActive={editor?.isActive("italic")}
      onClick={() => editor?.chain().focus().toggleItalic().run()}
    />
  );
};

export default Italic;
