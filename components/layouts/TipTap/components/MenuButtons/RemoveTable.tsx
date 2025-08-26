"use client";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { RemoveTable as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const RemoveTable: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="remove table"
      disabled={!editor?.can().deleteTable()}
      onClick={() => editor?.chain().focus().deleteTable().run()}
    />
  );
};

export default RemoveTable;
