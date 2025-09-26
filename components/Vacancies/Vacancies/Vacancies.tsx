import { vipVacancies } from "@/data/data";

import { VacancyCard, VIPVacanciesSlider } from "@/components/layouts";
import { Pagination, SectionTitle } from "@/components/ui";

type VacanciesT = {};

const Vacancies: React.FC<VacanciesT> = () => {
  return (
    <div className="py-5 flex flex-col gap-5 tablet:gap-10">
      <div className="flex flex-col gap-4">
        <SectionTitle title="VIP განცხადებები" />
        <VIPVacanciesSlider />
      </div>

      <section className="flex flex-col gap-4">
        {vipVacancies.slice(0, 20).map((vacancy) => (
          <VacancyCard key={`vacancy-${vacancy.id}`} {...vacancy} />
        ))}
      </section>

      <div className="flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default Vacancies;
