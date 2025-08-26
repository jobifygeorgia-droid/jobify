import {
  Font,
  LineBreak,
} from "@/components/layouts/TipTap/components/MenuButtons";
import { MenuGroup } from "@/components/layouts/TipTap/components/ui";

const Others: React.FC = () => {
  return (
    <MenuGroup title="Others">
      <LineBreak />

      <Font />
    </MenuGroup>
  );
};

export default Others;
