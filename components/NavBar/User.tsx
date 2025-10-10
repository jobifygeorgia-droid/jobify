import LoginButton from "./ui/LoginButton";
import CompanyActions from "./ui/CompanyActions";
import UserActions from "./ui/UserActions";
import AvatarMenu from "./ui/AvatarMenu";
import { USER_TYPES } from "@/lib/config";

type UserT = {
  role: USER_TYPES | undefined;
};

const User: React.FC<UserT> = (props) => {
  const { role } = props;

  return (
    <div className="ml-auto flex items-center gap-5">
      {!role ? (
        <LoginButton />
      ) : role === "employer" ? (
        <CompanyActions>
          <AvatarMenu isUser={false} />
        </CompanyActions>
      ) : role === "job_seeker" ? (
        <UserActions>
          <AvatarMenu />
        </UserActions>
      ) : null}
    </div>
  );
};

export default User;
