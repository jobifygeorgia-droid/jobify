"use client";

import { Heading3 as Icon } from "@/components/ui/icons";
import { useTipTap } from "@/providers/TipTapProvider";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const Heading3: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="heading text -  H3"
      isActive={editor?.isActive("heading", { level: 3 })}
      onClick={() => editor?.chain().focus().toggleHeading({ level: 3 }).run()}
    />
  );
};

export default Heading3;
