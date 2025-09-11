import { vipVacancies } from "@/data/data";
import { VIPVacancyCard, VacancyCard } from "@/components/layouts";
import {
  MultipleSlider,
  Pagination,
  SectionTitle,
  ViewAllButton,
} from "@/components/ui";

type VacanciesT = {};

const Vacancies: React.FC<VacanciesT> = () => {
  return (
    <div className="py-5 flex flex-col gap-10">
      <div className="relative flex flex-col gap-4">
        <SectionTitle title="VIP განცხადებები" />

        <MultipleSlider
          slides={vipVacancies.slice(0, 20).map((vacancy) => (
            <VIPVacancyCard key={`vip-vacancy-${vacancy.id}`} {...vacancy} />
          ))}
        />

        <ViewAllButton
          href="/vip-vacancies"
          className="absolute z-[9] right-0 bottom-0"
        />
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
