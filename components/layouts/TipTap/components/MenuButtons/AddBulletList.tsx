"use client";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { UnorderedList as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const AddBulletList: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="create bullet list"
      isActive={editor?.isActive("bulletList") || false}
      onClick={() => editor?.chain().focus().toggleBulletList().run()}
    />
  );
};

export default AddBulletList;
