"use client";

import { Heading1 as Icon } from "@/components/ui/icons";
import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const Heading1: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="heading text -  H1"
      isActive={editor?.isActive("heading", { level: 1 })}
      onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}
    />
  );
};

export default Heading1;
