import { PATHS } from "@/lib/config";

import {
  Mail,
  Plus,
  Heart,
  Calendar,
  Notification,
} from "@/components/ui/icons";
import { AnchorButton } from "@/components/ui";

type UserActionsT = {
  children: React.ReactNode;
};

const UserActions: React.FC<UserActionsT> = ({ children }) => {
  return (
    <div className="flex items-center gap-6">
      <AnchorButton
        href={PATHS.user_create_cv}
        buttonType="primary"
        className="mr-4"
      >
        <Plus />
        განაცხადი
      </AnchorButton>

      <AnchorButton href={""} className="p-0!">
        <Calendar />
      </AnchorButton>

      <AnchorButton href={""} className="p-0!">
        <Heart />
      </AnchorButton>

      <AnchorButton href={""} className="p-0!">
        <Mail />
      </AnchorButton>

      <AnchorButton href={""} className="p-0!">
        <Notification />
      </AnchorButton>

      {children}
    </div>
  );
};

export default UserActions;
