import { DYNAMIC_ROUTES } from "@/lib/config";

import { BottomNavigationItem } from "..";
import { Heart } from "@/components/ui/icons";

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
    </>
  );
};

export default BottomNavigationUser;
