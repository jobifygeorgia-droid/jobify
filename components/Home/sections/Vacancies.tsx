import { vipVacancies } from "@/data/data";

import { PATHS } from "@/lib/config";

import { VacancyCard } from "@/components/layouts";
import { Pagination, ViewAllButton } from "@/components/ui";
import SectionContainer from "@/components/Home/ui/SectionContainer";

type VacanciesT = {};

const Vacancies: React.FC<VacanciesT> = () => {
  const limit = 5;

  return (
    <SectionContainer>
      <div className="flex flex-col gap-4 tablet:gap-7">
        <div className="flex flex-col gap-3">
          {vipVacancies.slice(0, limit).map((vacancy) => (
            <VacancyCard key={vacancy.id} {...vacancy} />
          ))}
        </div>

        <div className="flex flex-col-reverse gap-2 tablet:flex-row tablet:items-center">
          <div className="w-full flex justify-center">
            <Pagination />
          </div>

          <ViewAllButton href={PATHS.vacancies} className="ml-auto" />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Vacancies;
