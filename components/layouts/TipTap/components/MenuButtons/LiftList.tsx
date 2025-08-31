"use client";

import { useTipTap } from "@/providers/TipTapProvider";
import { LiftList as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const LiftList: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="lift up list"
      disabled={!editor?.can().liftListItem("listItem")}
      onClick={() => editor?.chain().focus().liftListItem("listItem").run()}
    />
  );
};

export default LiftList;
