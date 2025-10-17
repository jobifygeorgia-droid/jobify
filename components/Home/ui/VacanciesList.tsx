import { PATHS } from "@/lib/config";
import { VacancyT } from "@/interface/db/vacancies.types";

import { VacancyCard } from "@/components/layouts";
import { Pagination, ViewAllButton } from "@/components/ui";

type VacanciesListT = {
  total: number;
  limit: number;
  vacancies: Array<VacancyT>;
};

const VacanciesList: React.FC<VacanciesListT> = (props) => {
  const { vacancies, total, limit } = props;

  return (
    <div className="flex flex-col gap-4 tablet:gap-7">
      <div className="flex flex-col gap-3">
        {vacancies.map((vacancy) => (
          <VacancyCard key={vacancy.id} vacancy={vacancy} />
        ))}
      </div>

      <div className="flex flex-col-reverse gap-2 tablet:flex-row tablet:items-center">
        <div className="w-full flex justify-center">
          <Pagination total={total} limit={limit} />
        </div>

        <ViewAllButton href={PATHS.vacancies} className="ml-auto" />
      </div>
    </div>
  );
};

export default VacanciesList;
