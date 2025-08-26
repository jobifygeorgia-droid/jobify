"use client";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { RemoveLink as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const RemoveLink: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="Remove Link"
      onClick={() => editor?.chain().focus().unsetLink().run()}
      disabled={!editor?.isActive("link")}
    />
  );
};

export default RemoveLink;
