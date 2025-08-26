import { Undo, Redo } from "@/components/layouts/TipTap/components/MenuButtons";
import { MenuGroup } from "@/components/layouts/TipTap/components/ui";

const Controls: React.FC = () => {
  return (
    <MenuGroup title="Undo / Redo">
      <Undo />

      <Redo />
    </MenuGroup>
  );
};

export default Controls;
