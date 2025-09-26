// import { AnchorButton } from "@/components/ui";
import {
  // Work,
  Plus,
  // Person,
  Home,
  FilterSecondary,
  CalendarSecondary,
  // Heart,
  Notification,
  Mail,
} from "@/components/ui/icons";
import BottomNavigationItem from "./BottomNavigationItem";
import BottomNavigationContainer from "./BottomNavigationContainer";
import { FilterButton } from "@/components/layouts";

const BottomNavigation: React.FC = () => {
  return (
    <BottomNavigationContainer>
      <nav className="py-3 px-4 w-full max-w-[744px] flex items-center justify-evenly gap-6">
        <BottomNavigationItem href="/" title="მთავარი">
          <Home size={20} />
        </BottomNavigationItem>

        <FilterButton>
          <span className="flex flex-col gap-1 p-0!">
            <FilterSecondary size={20} />
            <span className="text-sm hidden tablet:block">ფილტრი</span>
          </span>
        </FilterButton>

        <BottomNavigationItem href="/" title="კალენდარი">
          <CalendarSecondary size={20} />
        </BottomNavigationItem>

        {/* <BottomNavigationItem href="/" title="რჩეულები">
          <Heart size={20} />
        </BottomNavigationItem> */}

        <BottomNavigationItem href="/" title="შეტყობინებები">
          <Mail size={20} />
        </BottomNavigationItem>

        <BottomNavigationItem href="/" title="ცნობები">
          <Notification size={20} />
        </BottomNavigationItem>

        {/* <BottomNavigationItem href="/" title="განცხადების დამატება">
          <Work size={20} />
        </BottomNavigationItem> */}

        <BottomNavigationItem href="/" title="ვაკანსიის დამატება">
          <Plus size={20} />
        </BottomNavigationItem>

        {/* <BottomNavigationItem href="/" title="შესვლა">
          <Person size={20} />
        </BottomNavigationItem> */}
      </nav>
    </BottomNavigationContainer>
  );
};

export default BottomNavigation;
