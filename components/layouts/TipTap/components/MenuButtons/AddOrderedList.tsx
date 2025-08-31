"use client";

import { useTipTap } from "@/providers/TipTapProvider";
import { OrderedList as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";

const AddOrderedList: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      Icon={Icon}
      title="create ordered list"
      isActive={editor?.isActive("orderedList") || false}
      onClick={() => editor?.chain().focus().toggleOrderedList().run()}
    />
  );
};

export default AddOrderedList;
