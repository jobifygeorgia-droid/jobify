"use client";

import { useTipTap } from "@/providers/TipTapProvider";
import { LinkIcon as Icon } from "@/components/ui/icons";
import { MenuInteractiveButton } from "@/components/layouts/TipTap/components/ui";

const Link: React.FC = () => {
  const { editor, setLink } = useTipTap();

  return (
    <MenuInteractiveButton
      Icon={Icon}
      title="Link"
      placeholder="https:// ..."
      message="გთხოვთ მიუთითოთ თქვენთვის სასურველი ბმული აქ 👇"
      onConfirm={setLink}
    />
  );
};

export default Link;
