import {
  AlignLeft,
  AlignRight,
  AlignCenter,
  JustifyText,
} from "@/components/layouts/TipTap/components/MenuButtons";
import { MenuGroup } from "@/components/layouts/TipTap/components/ui";

const Alignment: React.FC = () => {
  return (
    <MenuGroup title="Alignment">
      <JustifyText />

      <AlignLeft />

      <AlignCenter />

      <AlignRight />
    </MenuGroup>
  );
};

export default Alignment;
