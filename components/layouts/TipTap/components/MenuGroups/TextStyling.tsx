import {
  Color,
  Highlight,
  TurnOffHighLight,
  Bold,
  Italic,
  Strike,
  Underline,
  Subscript,
  Superscript,
} from "@/components/layouts/TipTap/components/MenuButtons";
import { MenuGroup } from "@/components/layouts/TipTap/components/ui";

const TextStyling: React.FC = () => {
  return (
    <MenuGroup title="Text Styling">
      <Color />

      <Highlight />

      <TurnOffHighLight />

      <Bold />

      <Italic />

      <Strike />

      <Underline />

      <Subscript />

      <Superscript />
    </MenuGroup>
  );
};

export default TextStyling;
