"use client";

import { Heading6 as Icon } from "@/components/ui/icons";
import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const Heading6: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="heading text -  H6"
      isActive={editor?.isActive("heading", { level: 6 })}
      onClick={() => editor?.chain().focus().toggleHeading({ level: 6 }).run()}
    />
  );
};

export default Heading6;
