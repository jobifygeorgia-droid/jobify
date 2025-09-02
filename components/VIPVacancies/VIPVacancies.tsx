import { Pagination, SectionTitle } from "@/components/ui";
import { vipVacancies } from "@/data/data";
import { SendResume, VIPVacancyCard } from "@/components/layouts";

type VIPVacanciesT = {};

const VIPVacancies: React.FC<VIPVacanciesT> = () => {
  return (
    <SendResume>
      <div className="py-5 flex flex-col gap-6">
        <SectionTitle title="VIP განცხადებები" />

        <section className="grid grid-cols-4 gap-4 mb-10 pb-10">
          {vipVacancies.map((vacancy) => (
            <VIPVacancyCard key={vacancy.id} {...vacancy} />
          ))}
        </section>

        <div className="flex justify-center">
          <Pagination />
        </div>
      </div>
    </SendResume>
  );
};

export default VIPVacancies;
