import Filter from "./ui/Filter";
import Favorites from "./ui/Favorites";
import Statistics from "./ui/Statistics";
import ProfileHeader from "./ui/ProfileHeader";
import AskForRecommendation from "./ui/AskForRecommendation";

type ProfileT = {};

const Profile: React.FC<ProfileT> = () => {
  return (
    <div className="py-2 tablet:py-7">
      <ProfileHeader />

      <AskForRecommendation />

      <Statistics />

      <Filter />

      <Favorites />
    </div>
  );
};

export default Profile;
