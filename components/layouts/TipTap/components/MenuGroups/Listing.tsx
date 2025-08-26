import {
  AddBulletList,
  AddOrderedList,
  SinkList,
  SplitList,
  LiftList,
} from "@/components/layouts/TipTap/components/MenuButtons";
import { MenuGroup } from "@/components/layouts/TipTap/components/ui";

const Listing: React.FC = () => {
  return (
    <MenuGroup title="Listing">
      <AddBulletList />

      <AddOrderedList />

      <SplitList />

      <SinkList />

      <LiftList />
    </MenuGroup>
  );
};

export default Listing;
