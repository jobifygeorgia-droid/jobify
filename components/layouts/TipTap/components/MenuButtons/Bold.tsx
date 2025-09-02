"use client";

import { useTipTap } from "@/providers/TipTapProvider";
import { Bold as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const Bold: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="bold"
      isActive={editor?.isActive("bold")}
      onClick={() => editor?.chain().focus().toggleBold().run()}
    />
  );
};

export default Bold;
