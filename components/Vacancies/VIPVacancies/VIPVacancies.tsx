import { Pagination, SectionTitle } from "@/components/ui";

import { vipVacancies } from "@/data/data";
import { VIPVacancyCard } from "@/components/layouts";

type VIPVacanciesT = {};

const VIPVacancies: React.FC<VIPVacanciesT> = () => {
  return (
    <div className="py-5 flex flex-col gap-6">
      <SectionTitle title="VIP განცხადებები" />

      <section className="grid grid-cols-1 tablet:grid-cols-3 desktop-sm:grid-cols-4 justify-items-center gap-4 mb-0 laptop:mb-10 pb-5 laptop:pb-10">
        {vipVacancies.map((vacancy) => (
          <VIPVacancyCard
            key={vacancy.id}
            vacancy={vacancy}
            className="min-w-full! aspect-auto! tablet:min-w-[unset]"
          />
        ))}
      </section>

      <div className="flex justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default VIPVacancies;
