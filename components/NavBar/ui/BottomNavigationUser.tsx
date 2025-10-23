import { DYNAMIC_ROUTES, PATHS } from "@/lib/config";

import { BottomNavigationItem } from "./";
import { Heart, Work } from "@/components/ui/icons";

type BottomNavigationUserT = {
  userId: number;
};

const BottomNavigationUser: React.FC<BottomNavigationUserT> = ({ userId }) => {
  return (
    <>
      <BottomNavigationItem
        href={DYNAMIC_ROUTES.user_profile(userId.toString())}
        title="რჩეულები"
      >
        <Heart size={20} />
      </BottomNavigationItem>

      <BottomNavigationItem
        href={PATHS.user_create_statement}
        title="განცხადების დამატება"
      >
        <Work size={20} />
      </BottomNavigationItem>
    </>
  );
};

export default BottomNavigationUser;
