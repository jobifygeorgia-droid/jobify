"use client";

import { Heading5 as Icon } from "@/components/ui/icons";
import { useTipTap } from "@/providers/TipTapProvider";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const Heading5: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="heading text -  H5"
      isActive={editor?.isActive("heading", { level: 5 })}
      onClick={() => editor?.chain().focus().toggleHeading({ level: 5 }).run()}
    />
  );
};

export default Heading5;
