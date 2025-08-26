"use client";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";
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
