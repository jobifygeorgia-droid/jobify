"use client";

import { useTipTap } from "@/providers/TipTapProvider";
import { SplitList as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const SplitList: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="add list item / split list"
      disabled={!editor?.can().splitListItem("listItem")}
      onClick={() => editor?.chain().focus().splitListItem("listItem").run()}
    />
  );
};

export default SplitList;
