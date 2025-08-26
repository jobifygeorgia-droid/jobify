"use client";

import { useTipTap } from "@/components/layouts/TipTap/TipTap";
import { Youtube as Icon } from "@/components/ui/icons";
import { MenuInteractiveButton } from "@/components/layouts/TipTap/components/ui";

const Youtube: React.FC = () => {
  const { editor } = useTipTap();

  return (
    <MenuInteractiveButton
      Icon={Icon}
      title="embed YouTube video"
      placeholder="https://youtu.be/..."
      message="გთხოვთ მიუთითოთ თქვენთვის სასურველი ბმული აქ 👇"
      onConfirm={(url: string) =>
        editor?.commands.setYoutubeVideo({ src: url })
      }
    />
  );
};

export default Youtube;
