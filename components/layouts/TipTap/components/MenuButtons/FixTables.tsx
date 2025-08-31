"use client";

import { useTipTap } from "@/providers/TipTapProvider";
import { FixTables as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const FixTables: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="fix tables"
      disabled={!editor?.can().fixTables()}
      onClick={() => editor?.chain().focus().fixTables().run()}
    />
  );
};

export default FixTables;
