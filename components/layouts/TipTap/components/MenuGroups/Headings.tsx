import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "@/components/layouts/TipTap/components/MenuButtons";
import { MenuGroup } from "@/components/layouts/TipTap/components/ui";

const Headings: React.FC = () => {
  return (
    <MenuGroup title="Headings">
      <Heading1 />

      <Heading2 />

      <Heading3 />

      <Heading4 />

      <Heading5 />

      <Heading6 />
    </MenuGroup>
  );
};

export default Headings;
