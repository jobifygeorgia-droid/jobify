import { USER_TYPES } from "@/interface/global.types";
import { SessionUserT } from "@/interface/global.types";

import { AvatarMenu, LoginButton, CompanyActions, UserActions } from "..";

type UserT = {
  user: SessionUserT;
};

const User: React.FC<UserT> = ({ user }) => {
  const role = user?.user_type;
  const isUser = role === USER_TYPES.JOB_SEEKER;

  return (
    <div className="ml-auto flex items-center gap-5">
      {!role ? (
        <LoginButton />
      ) : role === USER_TYPES.EMPLOYER ? (
        <CompanyActions>
          <AvatarMenu isUser={isUser} userId={user.id} />
        </CompanyActions>
      ) : role === USER_TYPES.JOB_SEEKER ? (
        <UserActions>
          <AvatarMenu isUser={isUser} userId={user.id} />
        </UserActions>
      ) : null}
    </div>
  );
};

export default User;
