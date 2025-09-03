import { vipVacancies } from "@/data/data";

import { VacancyCard } from "@/components/layouts";
import { Pagination, ViewAllButton } from "@/components/ui";
import SectionContainer from "@/components/Home/ui/SectionContainer";

type VacanciesT = {};

const Vacancies: React.FC<VacanciesT> = () => {
  const limit = 5;

  return (
    <SectionContainer>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          {vipVacancies.slice(0, limit).map((vacancy) => (
            <VacancyCard key={vacancy.id} {...vacancy} />
          ))}
        </div>

        <div className="flex items-center">
          <div className="w-full flex justify-center">
            <Pagination />
          </div>

          <ViewAllButton href="/vacancies" />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Vacancies;
