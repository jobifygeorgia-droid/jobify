import LoginButton from "./ui/LoginButton";
import CompanyActions from "./ui/CompanyActions";
import UserActions from "./ui/UserActions";
import AvatarMenu from "./ui/AvatarMenu";

type UserT = {
  role: string;
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
