import { PATHS } from "@/lib/config";

import {
  Home,
  Mail,
  Person,
  Notification,
  FilterSecondary,
  CalendarSecondary,
} from "@/components/ui/icons";
import { BottomNavigationItem } from "./";
import { FilterButton } from "@/components/layouts";

type BottomNavigationCommonT = {
  isAuthorized: boolean;
};

const BottomNavigationCommon: React.FC<BottomNavigationCommonT> = (props) => {
  const { isAuthorized } = props;

  return (
    <>
      <BottomNavigationItem href={PATHS.home} title="მთავარი">
        <Home size={20} />
      </BottomNavigationItem>

      <FilterButton>
        <span className="flex flex-col items-center gap-1 p-0!">
          <FilterSecondary size={20} />
          <span className="text-sm hidden tablet:block">ფილტრი</span>
        </span>
      </FilterButton>

      {isAuthorized && (
        <>
          <BottomNavigationItem href="" title="კალენდარი">
            <CalendarSecondary size={20} />
          </BottomNavigationItem>

          <BottomNavigationItem href="" title="შეტყობინებები">
            <Mail size={20} />
          </BottomNavigationItem>

          <BottomNavigationItem href="" title="ცნობები">
            <Notification size={20} />
          </BottomNavigationItem>
        </>
      )}

      {!isAuthorized && (
        <BottomNavigationItem href={PATHS.sign_in} title="შესვლა">
          <Person size={20} />
        </BottomNavigationItem>
      )}
    </>
  );
};

export default BottomNavigationCommon;
