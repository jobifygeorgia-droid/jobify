"use client";

import { useTipTap } from "@/providers/TipTapProvider";
import { Redo as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const Redo: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="redo"
      disabled={!editor?.can().redo()}
      onClick={() => editor?.chain().focus().redo().run()}
    />
  );
};

export default Redo;
