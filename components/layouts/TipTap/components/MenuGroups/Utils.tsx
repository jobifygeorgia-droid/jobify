import {
  Blockquote,
  Code,
  File,
  Youtube,
  HorizontalRule,
  Link,
  RemoveLink,
} from "@/components/layouts/TipTap/components/MenuButtons";
import { MenuGroup } from "@/components/layouts/TipTap/components/ui";

const Utils: React.FC = () => {
  return (
    <MenuGroup title="Utils">
      <Blockquote />

      <Code />

      <File />

      <Youtube />

      <Link />

      <RemoveLink />

      <HorizontalRule />
    </MenuGroup>
  );
};

export default Utils;
