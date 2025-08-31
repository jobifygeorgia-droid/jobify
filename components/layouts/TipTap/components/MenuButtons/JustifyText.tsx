"use client";

import { useTipTap } from "@/providers/TipTapProvider";
import { Justify as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const JustifyText: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="justify text"
      isActive={editor?.isActive({ textAlign: "justify" })}
      onClick={() => editor?.chain().focus().setTextAlign("justify").run()}
    />
  );
};

export default JustifyText;
