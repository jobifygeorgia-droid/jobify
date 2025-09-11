import { PageParamsT } from "@/interface/global.types";
import VacancyDetails from "@/components/CompanyProfile/VacancyDetails/VacancyDetails";

const Page: React.FC<PageParamsT> = async () => {
  return <VacancyDetails />;
};

export default Page;
