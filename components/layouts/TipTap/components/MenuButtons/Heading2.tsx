"use client";

import { Heading2 as Icon } from "@/components/ui/icons";
import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const Heading2: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="heading text -  H2"
      isActive={editor?.isActive("heading", { level: 2 })}
      onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}
    />
  );
};

export default Heading2;
