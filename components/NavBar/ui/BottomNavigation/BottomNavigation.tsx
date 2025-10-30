import { SessionUserT, USER_TYPES } from "@/interface/global.types";

import {
  BottomNavigationUser,
  BottomNavigationCommon,
  BottomNavigationCompany,
  BottomNavigationContainer,
} from "..";

type BottomNavigationT = {
  user: SessionUserT;
};

const BottomNavigation: React.FC<BottomNavigationT> = (props) => {
  const { user } = props;

  const isAuthorized = !!user;
  const isEmployer = user?.user_type === USER_TYPES.EMPLOYER;
  const isJobSeeker = user?.user_type === USER_TYPES.JOB_SEEKER;

  return (
    <BottomNavigationContainer>
      <nav className="h-full w-full tablet:max-w-[744px] flex items-center justify-between gap-4">
        <BottomNavigationCommon isAuthorized={isAuthorized} />

        {isJobSeeker && <BottomNavigationUser userId={user.id} />}

        {isEmployer && <BottomNavigationCompany />}
      </nav>
    </BottomNavigationContainer>
  );
};

export default BottomNavigation;
