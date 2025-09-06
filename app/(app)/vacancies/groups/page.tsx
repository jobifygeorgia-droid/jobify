import { PageParamsT } from "@/interface/global.types";
import VacanciesByGroups from "@/components/Vacancies/VacanciesByGroups/VacanciesByGroups";

const Page: React.FC<PageParamsT> = async ({ searchParams }) => {
  const params = await searchParams;

  return <VacanciesByGroups group={params.group} />;
};

export default Page;
