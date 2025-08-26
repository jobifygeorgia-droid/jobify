"use client";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { Undo as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const Undo: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="undo"
      disabled={!editor?.can().undo()}
      onClick={() => editor?.chain().focus().undo().run()}
    />
  );
};

export default Undo;
