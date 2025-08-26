"use client";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { HighLight as Icon } from "@/components/ui/icons";
import { MenuButton } from "@/components/layouts/TipTap/components/ui";
import { IconPropsT } from "@/components/ui/icons/icon.types";

const TurnOffHighLight: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuButton
      title="remove highlight"
      Icon={TurnOffHighlightIcon}
      disabled={!editor?.isActive("highlight")}
      onClick={() => editor?.chain().focus().unsetHighlight().run()}
    />
  );
};

export default TurnOffHighLight;

function TurnOffHighlightIcon(props: IconPropsT) {
  return (
    <span className="relative">
      <span className="h-[20px] w-[1px] bg-current absolute -rotate-45" />
      <Icon {...props} />
    </span>
  );
}
