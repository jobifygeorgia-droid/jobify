"use client";

import { Heading4 as Icon } from "@/components/ui/icons";
import { useTipTap } from "@/providers/TipTapProvider";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const Heading4: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="heading text -  H4"
      isActive={editor?.isActive("heading", { level: 4 })}
      onClick={() => editor?.chain().focus().toggleHeading({ level: 4 }).run()}
    />
  );
};

export default Heading4;
