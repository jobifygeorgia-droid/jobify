import { SendResume } from "@/components/layouts";
import VIPVacancies from "./sections/VIPVacancies";
import BannersSlider from "./sections/BannersSlider";
import Vacancies from "./sections/Vacancies";
import VacanciesForDifferentGroups from "./sections/VacanciesForDifferentGroups";
import InterestingForYou from "./sections/InterestingForYou";
import CreateResume from "./sections/CreateResume";
import Subscribe from "./sections/Subscribe";
import Reviews from "./sections/Reviews";
import LiveInCompany from "./sections/LiveInCompany";
import TopCompanies from "./sections/TopCompanies";

type HomeT = {};

const Home: React.FC<HomeT> = () => {
  return (
    <SendResume>
      <div className="py-5">
        <VIPVacancies />
        <BannersSlider />
        <Vacancies />
        <VacanciesForDifferentGroups />
        <InterestingForYou />
        <LiveInCompany />
        <CreateResume />
        <Subscribe />
        <Reviews />
        <TopCompanies />
      </div>
    </SendResume>
  );
};

export default Home;
