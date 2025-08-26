"use client";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { SinkList as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const SinkList: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="sink list"
      disabled={!editor?.can().sinkListItem("listItem")}
      onClick={() => editor?.chain().focus().sinkListItem("listItem").run()}
    />
  );
};

export default SinkList;
