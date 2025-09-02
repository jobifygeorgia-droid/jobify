"use client";

import { useTipTap } from "@/providers/TipTapProvider";
import { Line as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const HorizontalRule: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="horizontal rule"
      isActive={editor?.isActive("horizontalRule")}
      onClick={() => editor?.chain().focus().setHorizontalRule().run()}
    />
  );
};

export default HorizontalRule;
