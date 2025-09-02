import { vipVacancies } from "@/data/data";
import { VIPVacancyCard, SendResume, VacancyCard } from "@/components/layouts";
import { MultipleSlider, Pagination, SectionTitle } from "@/components/ui";

type VacanciesT = {};

const Vacancies: React.FC<VacanciesT> = () => {
  return (
    <SendResume>
      <div className="py-5 flex flex-col gap-6">
        <div>
          <SectionTitle title="VIP განცხადებები" />

          <MultipleSlider
            slides={vipVacancies.slice(0, 20).map((vacancy) => (
              <VIPVacancyCard key={`vip-vacancy-${vacancy.id}`} {...vacancy} />
            ))}
          />
        </div>

        <div>Kind of filter</div>

        <section className="flex flex-col gap-4">
          {vipVacancies.slice(0, 20).map((vacancy) => (
            <VacancyCard key={`vacancy-${vacancy.id}`} {...vacancy} />
          ))}
        </section>

        <div className="flex justify-center">
          <Pagination />
        </div>
      </div>
    </SendResume>
  );
};

export default Vacancies;
